const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the menu page
app.get('/speisekarte', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/pages/speisekarte.html'));
});

app.get('/weinkarte', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/pages/weinkarte.html'));
});

app.get('/kontakt', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/pages/kontakt.html'));
});

app.get('/impressum', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/pages/impressum.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use('/data', express.static(path.join(__dirname, 'public/data')));