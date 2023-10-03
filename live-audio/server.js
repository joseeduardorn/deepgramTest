const express = require('express');
const http = require('http');
const MediaServer = require('node-media-server');
const uuid = require('uuid');
const app = express();
const port = 3000; // Choose an appropriate port

// Set up a WebSocket server for live audio streaming
const server = http.createServer(app);
const nms = new MediaServer({
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8000,
    allow_origin: '*',
  },
});

nms.run();

// Serve recorded audio files statically
app.use('/recordings', express.static('recordings'));

// Generate a GET method to download the recorded audio file
app.get('/download/:filename', (req, res) => {
  const fileName = req.params.filename;
  const filePath = `recordings/${fileName}`;

  res.download(filePath, (err) => {
    if (err) {
      res.status(404).send('File not found.');
    }
  });
});

// Create a route to receive live audio streams
app.post('/stream', (req, res) => {
  const recordingId = uuid.v4();
  const filePath = `recordings/${recordingId}.wav`;

  req.pipe(
    new MediaServer.Stream(filePath).record()
  );

  res.json({ url: `/download/${recordingId}.wav` });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
