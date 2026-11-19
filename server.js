import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { toPngBuffer } from '@yashumstrum/qr-code';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/qr', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send('Missing "url" query parameter');
  }

  try {
    const buffer = await toPngBuffer(url, { width: 400 });
    res.type('image/png').send(buffer);
  } catch (err) {
    res.status(400).send(err.message || 'Failed to generate QR code');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
