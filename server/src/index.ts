// index.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { checkGmail } from './utils/emailChecker';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Modified to handle both single and bulk email checks
app.post('/api/check-emails', async (req, res) => {
  const { emails } = req.body;

  if (!emails || !Array.isArray(emails) || emails.length === 0) {
    return res.status(400).json({ error: 'At least one email is required' });
  }

  try {
    const results = await Promise.all(
      emails.map(async (email: string) => await checkGmail(email))
    );
    res.json(results);
  } catch (err: any) {
    res.status(500).json({ error: 'Server error', message: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('Email Checker API is running');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});