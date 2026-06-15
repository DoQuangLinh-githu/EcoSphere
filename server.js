const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware để phục vụ file tĩnh từ thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// Middleware để parse JSON và URL encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route chính
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route API cho dữ liệu (tùy chọn - có thể dùng để lấy dữ liệu động)
app.get('/api/environment', (req, res) => {
    const environmentData = {
        climate: {
            title: "Biến đổi khí hậu",
            description: "Hiện tượng nóng lên toàn cầu do phát thải khí nhà kính"
        },
        ghg: {
            title: "Khí nhà kính",
            description: "CO2, CH4, N2O từ hoạt động công nghiệp và nông nghiệp"
        }
    };
    res.json(environmentData);
});

// Xử lý route 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`);
    console.log(`📱 Truy cập để xem trang web`);
    console.log(`⏹️  Nhấn Ctrl+C để dừng server`);
});