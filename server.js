const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware để log requests (debug)
app.use((req, res, next) => {
    console.log(`📱 ${req.method} ${req.url}`);
    next();
});

// Serve static files từ thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// Route cho trang chủ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Fallback cho tất cả các route khác - gửi index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Export cho Vercel
module.exports = app;

// Chạy server local
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