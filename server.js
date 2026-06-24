const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    console.log(`📱 Request: ${req.url}`);
    
    // Xây dựng đường dẫn file - LUÔN thêm public vào đầu
    let filePath = req.url === '/' ? '/index.html' : req.url;
    filePath = path.join(__dirname, 'public', filePath);
    
    // Lấy extension của file
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    // Đọc file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File không tồn tại
                console.log(`❌ File not found: ${filePath}`);
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Không tìm thấy trang</h1>', 'utf-8');
            } else {
                // Lỗi server
                console.log(`❌ Server error: ${err.code}`);
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Thành công
            console.log(`✅ Served: ${filePath} (${contentType})`);
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
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