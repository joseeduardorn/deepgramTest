const https = require('https');
const fs = require('fs');
const WebSocket = require('ws');

// Load SSL/TLS certificate and key (you need to provide your own)
const serverOptions = {
  key: fs.readFileSync('your-private-key.pem'),
  cert: fs.readFileSync('your-certificate.pem')
};

// Create an HTTPS server
const server = https.createServer(serverOptions);

// Create a WebSocket Server on top of the HTTPS server
const wss = new WebSocket.Server({ server });

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('Client connected');

  // WebSocket message handling
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);

    // Echo the received message back to the client
    ws.send(`Server received: ${message}`);
  });

  // WebSocket connection close handling
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Start the HTTPS server on port 443 (default HTTPS port)
server.listen(443, () => {
  console.log('WSS server is running on port 443');
});