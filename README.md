# 🌍 EcoSphere - Hệ sinh thái tri thức

## 📌 Giới thiệu

**EcoSphere** là một trang web tĩnh với giao diện sidebar menu động, cung cấp kiến thức chuyên sâu về:

- **Môi trường**: Biến đổi khí hậu, Khí nhà kính, Mô hình hóa, GIS & Cơ sở dữ liệu
- **Xã hội**: Cộng đồng bền vững, Công bằng môi trường, Giáo dục
- **Nông nghiệp**: Công nghệ cao, Sản xuất nông nghiệp (QUYNH ORGANIC FARM)

## 🎯 Tính năng chính

- ✅ Menu sidebar với các mục chính và submenu
- ✅ Giao diện responsive, hiển thị tốt trên mọi thiết bị
- ✅ Nội dung động theo từng tab được chọn
- ✅ Hiển thị logo và thông tin công ty khi vào mục Sản xuất nông nghiệp
- ✅ Mỗi mục con có nội dung riêng biệt

text

## 🚀 Cách cài đặt và chạy

### Yêu cầu hệ thống
- **Node.js** (phiên bản 14.x trở lên)
- Hoặc **Python 3.x** (cách đơn giản hơn)

### Cách 1: Chạy với Node.js (Khuyến nghị)

```bash
# Di chuyển vào thư mục dự án
cd C:\Users\Public\all_WEB\EcoSphere

# Chạy server
node server.js
Sau đó mở trình duyệt và truy cập: http://localhost:3000

Cách 2: Chạy với Python
bash
# Di chuyển vào thư mục public
cd C:\Users\Public\all_WEB\EcoSphere\public

# Chạy server Python
python -m http.server 8000
Sau đó mở trình duyệt: http://localhost:8000

Cách 3: Chạy trực tiếp (không cần server)
Double-click vào file public/index.html để mở trực tiếp bằng trình duyệt.

📖 Hướng dẫn sử dụng
Menu Sidebar
Menu	Chức năng
Môi trường	Click để hiện 4 mục con: Biến đổi khí hậu, Khí nhà kính, Mô hình hóa, GIS & CSDL
Xã hội	Click để hiển thị nội dung về xã hội bền vững
Nông nghiệp	Click để hiện 2 mục con: Công nghệ cao, Sản xuất nông nghiệp
Sản xuất nông nghiệp
Khi click vào Sản xuất nông nghiệp, sẽ hiện ra 7 mục con:

Trang chủ - Giới thiệu về QUYNH ORGANIC FARM

Giới thiệu - Thông tin công ty, thành tựu

Sản phẩm - Gạo Lài thơm, gạo hữu cơ

Quan hệ cổ đông - Thông tin tài chính, báo cáo

Tin tức - Cập nhật hoạt động công ty

Đối tác - Đối tác sản xuất, phân phối

Liên hệ - Địa chỉ, hotline, email

Hero Banner
Khi vào các mục Môi trường, Xã hội, Công nghệ cao: Hero hiển thị tiêu đề "EcoSphere · Môi trường · Xã hội · Nông nghiệp"

Khi vào Sản xuất nông nghiệp: Hero hiển thị Logo + Tên công ty QUYNH ORGANIC FARM + Slogan

🛠️ Công nghệ sử dụng
Công nghệ	Mục đích
HTML5	Cấu trúc trang web
CSS3	Giao diện, hiệu ứng, responsive
JavaScript	Xử lý sự kiện, render nội dung động
Font Awesome	Biểu tượng đẹp mắt
Google Fonts	Phông chữ Inter hiện đại
Node.js	Web server tĩnh
📱 Hỗ trợ thiết bị
✅ Desktop (Chrome, Firefox, Edge, Safari)

✅ Tablet (iPad, Android)

✅ Mobile (iPhone, Android)

🔧 Xử lý lỗi thường gặp
Lỗi: Không tìm thấy file CSS/JS
Nguyên nhân: Sai đường dẫn hoặc server không phục vụ file tĩnh

Cách sửa: Đảm bảo chạy server từ thư mục gốc EcoSphere

Lỗi: Logo không hiển thị
Nguyên nhân: Thiếu file logo hoặc sai tên file

Cách sửa:

Tạo thư mục public/images/

Đặt file logo với tên logo.png (hoặc sửa đường dẫn trong renderer.js)

Lỗi: Menu không mở được
Nguyên nhân: JavaScript chưa được tải hoặc lỗi cú pháp

Cách sửa: Mở Console (F12) để xem lỗi chi tiết

📝 Thêm nội dung mới
Thêm sản phẩm mới
Mở file js/renderer.js

Tìm hàm renderProductionContent()

Thêm card mới vào phần content tương ứng

Thêm màu sắc mới
Sửa file css/style.css - phần màu chính:

css
.sidebar {
  background: linear-gradient(180deg, #1b4d3c 0%, #0f2e23 100%);
}
.hero {
  background: linear-gradient(120deg, #1b4d3c, #2f7553);
}
📄 License
MIT License - Free to use and modify

👥 Tác giả
Phát triển bởi EcoSphere Team

📧 Liên hệ
Công ty: QUYNH ORGANIC FARM

Địa chỉ: 20/36 Tân Thắng, Phường Tân Sơn Nhì, TP Hồ Chí Minh

Điện thoại: 0918180583

Email: contact@quynhorganic.vn

🎉 Chúc bạn thành công!
Nếu gặp bất kỳ vấn đề gì, hãy:

Kiểm tra Console trình duyệt (F12)

Kiểm tra terminal nếu dùng server

Đảm bảo cấu trúc thư mục đúng

⭐ Đừng quên star dự án nếu thấy hữu ích!

text
-----