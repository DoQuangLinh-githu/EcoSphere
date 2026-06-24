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

// ✅ QUAN TRỌNG: Không dùng app.get('*'), dùng middleware fallback
app.use((req, res, next) => {
    // Nếu request là file static, bỏ qua
    if (req.path.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|json|woff|woff2|ttf|eot)$/)) {
        return next();
    }
    // Gửi index.html cho tất cả các route khác
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Export cho Vercel
module.exports = app;

// Chạy server local
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`🌍 EcoSphere running at http://localhost:${PORT}`);
    });
}