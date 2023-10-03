const WebSocket = require('ws');
const { Deepgram } = require("@deepgram/sdk");
const fetch = require("cross-fetch");

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 }); // You can specify the port you want to use

// WebSocket server event handlers
wss.on('connection', (ws) => {
  console.log('Client connected');

  // WebSocket message event
  ws.on('message', (message) => {
   // console.log(`Received: ${message}`);

// Inside the UK
// const url = 'http://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourfm';

// Initialize the Deepgram SDK
const deepgram = new Deepgram('91b6bdd748c658fdc08769976fafba06b76918c7');

// Create a websocket connection to Deepgram
// In this example, punctuation is turned on, interim results are turned off, and language is set to UK English.
const deepgramLive = deepgram.transcription.live({
	smart_format: true,
	interim_results: false,
	language: "en-US",
	model: "nova",
});

// Listen for the connection to open and send streaming audio from the URL to Deepgram
// fetch(url)
// 	.then((r) => r.body)
// 	.then((res) => {
// 		res.on("readable", () => {
// 			if (deepgramLive.getReadyState() == 1) {
// 				deepgramLive.send(res.read());
// 			}
// 		});
// 	});
console.log(deepgramLive);
console.log(deepgramLive.getReadyState());
  
  if (deepgramLive.getReadyState() === 1) {
    deepgramLive.send(message);
  }

// Listen for the connection to close
deepgramLive.addListener("close", () => {
	//console.log("Connection closed.");
});

// Listen for any transcripts received from Deepgram and write them to the console
deepgramLive.addListener("transcriptReceived", (message) => {
	const data = JSON.parse(message);
	// Write the entire response to the console
	console.dir(data.channel, { depth: null });
  
  console.log(data);
	// Write only the transcript to the console
	//console.dir(data.channel.alternatives[0].transcript, { depth: null });
});



    // Echo the message back to the client
    ws.send(`You said: `); //${message}
  });

  // WebSocket close event
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is listening on port 8080');
