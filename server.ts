import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContactEnquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  receivedAt: string;
  status: string;
}

// In-memory record storage for received enquiries
const enquiries: ContactEnquiry[] = [];

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // Real backend endpoint for Contact Us submissions
  app.post('/api/contact', (req: Request, res: Response) => {
    const { fullName, email, phone, subject, message } = req.body;

    // Server-side validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({ error: 'Please provide your full name.' });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }
    if (!phone || typeof phone !== 'string' || phone.trim().length < 8) {
      return res.status(400).json({ error: 'Please provide a valid Australian contact phone number.' });
    }
    if (!subject || typeof subject !== 'string' || subject.trim().length < 2) {
      return res.status(400).json({ error: 'Please provide a subject for your enquiry.' });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({ error: 'Please include a message detailing your enquiry (minimum 5 characters).' });
    }

    const newEnquiry: ContactEnquiry = {
      id: `SA-ENQ-${Date.now().toString().slice(-6)}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message.trim(),
      receivedAt: new Date().toISOString(),
      status: 'received'
    };

    enquiries.push(newEnquiry);
    console.log(`[Southern Agedcare Backend] Recorded enquiry ${newEnquiry.id} from ${newEnquiry.fullName} (${newEnquiry.email})`);

    return res.status(201).json({
      success: true,
      referenceNumber: newEnquiry.id,
      message: 'Your enquiry has been received by our Desert Springs team. A care coordinator will review your request and get in touch with you shortly.',
      receivedAt: newEnquiry.receivedAt
    });
  });

  // Health and verification endpoint
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'ok',
      service: 'Southern Agedcare Backend API',
      enquiriesCount: enquiries.length,
      time: new Date().toISOString()
    });
  });

  // Mount Vite SPA or static production build
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Southern Agedcare server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
