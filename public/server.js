const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// server.js public ichida joylashgani uchun statik fayllar shu papkadan olinadi.
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server ishga tushdi: http://localhost:${PORT}`);
}); 