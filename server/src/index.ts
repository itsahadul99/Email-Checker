import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { checkGmail } from './utils/emailChecker';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/check-email', async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: 'Email is required' });

  try {
    const result = await checkGmail(email);
    res.json(result);
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
