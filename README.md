# QR Code Generator Web App

An Express server that serves an interactive web UI at `/` and generates QR codes using [`@yashumstrum/qr-code`](https://www.npmjs.com/package/@yashumstrum/qr-code).

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
npm start
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## Features

- **Interactive Web Interface**: Clean UI with an input box to enter any link, preview the QR code in real-time, and download the PNG.
- **REST Endpoint**: Direct image generation endpoint at `/qr?url=...` for integrations and scripts.

---

## API Endpoint

### `GET /qr`

Generates and streams a PNG QR code image.

**Query Parameters:**
- `url` (required): The URL or link to convert (e.g. `https://example.com`, `github.com`).

**Example:**
```bash
curl -o qr.png "http://localhost:3000/qr?url=https://github.com"
```
