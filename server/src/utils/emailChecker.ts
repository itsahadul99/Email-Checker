import dns from 'dns/promises';
import validator from 'email-validator';
import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

interface GmailCheckResult {
  email: string;
  format: boolean;
  mx: boolean;
  twoFactor: {
    enabled: boolean | null;
    details?: string;
    error?: string;
  } | null;
  error?: string;
}

export async function checkGmail(email: string): Promise<GmailCheckResult> {
  const result: GmailCheckResult = {
    email,
    format: false,
    mx: false,
    twoFactor: null,
  };

  const isValidEmail = validator.validate(email);
  const isGmail = email.toLowerCase().endsWith('@gmail.com') || email.toLowerCase().endsWith('@googlemail.com');
  result.format = isValidEmail && isGmail;

  if (!result.format) {
    result.error = 'Invalid Gmail address';
    return result;
  }

  const domain = email.split('@')[1];
  try {
    const mxRecords = await dns.resolveMx(domain);
    result.mx = mxRecords.length > 0;
  } catch (err: any) {
    result.error = `MX Lookup failed: ${err.message}`;
    return result;
  }

  // Check 2FA using Google Workspace Admin SDK (optional)
  if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/admin.directory.user'],
      });

      const admin = google.admin({ version: 'directory_v1', auth });
      const { data } = await admin.users.get({ userKey: email });

      result.twoFactor = {
        enabled: data.isEnrolledIn2Sv ?? false,
        details: data.twoStepVerification ?? 'No details',
      };
    } catch (err: any) {
      result.twoFactor = {
        enabled: null,
        error: `2FA check failed: ${err.message}`,
      };
    }
  } else {
    result.twoFactor = {
      enabled: null,
      error: 'Google credentials missing',
    };
  }

  return result;
}
