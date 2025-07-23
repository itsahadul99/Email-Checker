// utils/emailChecker.ts
import dns from 'dns/promises';
import validator from 'email-validator';
import dotenv from 'dotenv';

dotenv.config();

interface EmailCheckResult {
  email: string;
  isValidFormat: boolean;
  hasMxRecords: boolean;
  isDisposable: boolean;
  isRoleAccount: boolean;
  isFreeProvider: boolean;
  isCorporate: boolean;
  isHighRiskDomain: boolean;
  hasCatchAll: boolean | null;
  error?: string;
}

// Common disposable email domains
const DISPOSABLE_DOMAINS = [
  'mailinator.com', 'tempmail.com', 'throwawaymail.com', 
  'guerrillamail.com', '10minutemail.com', 'temp-mail.org',
  'yopmail.com', 'fakeinbox.com', 'trashmail.com'
];

// Common free email providers
const FREE_EMAIL_PROVIDERS = [
  'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
  'icloud.com', 'protonmail.com', 'zoho.com', 'mail.com',
  'aol.com', 'yandex.com'
];

// Common role account prefixes
const ROLE_ACCOUNT_PREFIXES = [
  'admin', 'support', 'info', 'sales', 'contact', 
  'help', 'service', 'feedback', 'hello', 'noreply'
];

// High risk domains often used for spam
const HIGH_RISK_DOMAINS = [
  'qq.com', '163.com', '126.com', 'yeah.net', 
  'sina.com', 'sohu.com', 'aliyun.com'
];

async function emailChecker(email: string): Promise<EmailCheckResult> {
  const result: EmailCheckResult = {
    email,
    isValidFormat: false,
    hasMxRecords: false,
    isDisposable: false,
    isRoleAccount: false,
    isFreeProvider: false,
    isCorporate: false,
    isHighRiskDomain: false,
    hasCatchAll: null
  };

  // Validate email format
  result.isValidFormat = validator.validate(email);

  if (!result.isValidFormat) {
    result.error = 'Invalid email format';
    return result;
  }

  // Extract domain and local part
  const [localPart, domain] = email.split('@');
  const domainLower = domain.toLowerCase();
  const localPartLower = localPart.toLowerCase();

  // Check MX records
  try {
    const mxRecords = await dns.resolveMx(domainLower);
    result.hasMxRecords = mxRecords.length > 0;
    
    if (!result.hasMxRecords) {
      result.error = 'No MX records found for domain';
      return result;
    }
  } catch (err: any) {
    result.error = `MX Lookup failed: ${err.message}`;
    return result;
  }

  // Check disposable domains
  result.isDisposable = DISPOSABLE_DOMAINS.includes(domainLower);

  // Check role accounts
  result.isRoleAccount = ROLE_ACCOUNT_PREFIXES.some(
    prefix => localPartLower.startsWith(prefix) || 
             localPartLower.includes(prefix)
  );

  // Check free providers
  result.isFreeProvider = FREE_EMAIL_PROVIDERS.includes(domainLower);
  result.isCorporate = !result.isFreeProvider && !result.isDisposable;

  // Check high risk domains
  result.isHighRiskDomain = HIGH_RISK_DOMAINS.includes(domainLower);

  // Note: Catch-all check would require sending an email, which isn't free
  // This is left as null since we can't determine it without external services

  return result;
}

export default emailChecker;