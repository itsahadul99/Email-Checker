// utils/emailChecker.ts
import dns from 'dns/promises';
import validator from 'email-validator';
import dotenv from 'dotenv';

dotenv.config();

interface EmailCheckResult {
  email: string;
  isValidFormat: boolean;
  hasMxRecords: boolean;
  hasTwoFA: boolean | null;
  isDisposable: boolean;
  isRoleAccount: boolean;
  error?: string;
}

export async function checkGmail(email: string): Promise<EmailCheckResult> {
  const result: EmailCheckResult = {
    email,
    isValidFormat: false,
    hasMxRecords: false,
    hasTwoFA: null,
    isDisposable: false,
    isRoleAccount: false,
  };

  // Validate email format
  result.isValidFormat = validator.validate(email);

  if (!result.isValidFormat) {
    result.error = 'Invalid email format';
    return result;
  }

  // Check MX records
  const domain = email.split('@')[1];
  try {
    const mxRecords = await dns.resolveMx(domain);
    result.hasMxRecords = mxRecords.length > 0;
  } catch (err: any) {
    result.error = `MX Lookup failed: ${err.message}`;
    return result;
  }

  // Mock checks for disposable and role accounts
  const disposableDomains = ['mailinator.com', 'tempmail.com', 'throwawaymail.com'];
  result.isDisposable = disposableDomains.includes(domain.toLowerCase());

  const roleKeywords = ['admin', 'support', 'info', 'sales', 'contact'];
  const localPart = email.split('@')[0].toLowerCase();
  result.isRoleAccount = roleKeywords.some(keyword => localPart.includes(keyword));

  // Mock 2FA (since actual check isn't possible)
  result.hasTwoFA = null; // or false, depending on frontend preference

  return result;
}