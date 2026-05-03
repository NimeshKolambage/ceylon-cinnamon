const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running successfully.' });
});

// Mock endpoint for contact/order
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Here you would typically use nodemailer to send an email or mongoose to save to DB
  console.log('Received contact request:', { name, email, message });
  res.json({ success: true, message: 'Message received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
