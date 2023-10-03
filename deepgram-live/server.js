const express = require('express');
const app = express();
const port = 3000; // You can change the port as needed

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Define an API endpoint
app.get('/api/data', (req, res) => {
    const data = { message: 'This is an API endpoint.' };
    res.json(data);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
