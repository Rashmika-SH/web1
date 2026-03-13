const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Handle all routes - serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle all HTML file requests
app.get('/*.html', (req, res) => {
  res.sendFile(path.join(__dirname, req.path));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
