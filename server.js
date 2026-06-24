const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Fallback - dùng '/*' thay vì '*'
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Export cho Vercel
module.exports = app;

// Chạy local
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`🌍 EcoSphere running at http://localhost:${PORT}`);
    });
}