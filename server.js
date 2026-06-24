const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files từ thư mục public
app.use(express.static('public'));

// Fallback cho SPA (Single Page Application)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Export cho Vercel
module.exports = app;

// Chạy server khi không ở Vercel
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   🌍 EcoSphere - Hệ sinh thái tri thức                   ║
║                                                          ║
║   🚀 Server đang chạy tại: http://localhost:${PORT}       ║
║   📱 Truy cập để xem trang web                           ║
║   ⏹️  Nhấn Ctrl+C để dừng server                         ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
        `);
    });
}