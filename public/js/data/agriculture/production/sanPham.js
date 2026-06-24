// Sản phẩm - Gạo Lài thơm & Gạo Tấm thơm
if (typeof agricultureData === 'undefined') var agricultureData = {};

agricultureData.production = agricultureData.production || {};

agricultureData.production.sanPham = {
  title: "🌾 Sản phẩm",
  icon: "fas fa-box-open",
  cards: [
    // ===== GẠO LÀI THƠM =====
    {
      icon: "fas fa-tractor",
      title: "Gạo Lài thơm - Quỳnh Organic Farm",
      content: "Tên sản phẩm: Gạo Lài thơm.\nThành phần: 100% gạo Lài thơm.\nThời hạn sử dụng: 09 tháng kể từ ngày sản xuất.\nQuy cách đóng gói: 5kg, 10kg, 20kg hoặc theo yêu cầu.\nChứng nhận: BRCGS Global Standard Food Safety (Số VN23/00000354).\nNhà sản xuất: Công ty CP Hoàng Minh Nhật (Cần Thơ).",
      badge: "✅ Đã công bố | BRCGS",
      borderColor: "#f57c00"
    },
    
    // ===== GẠO TẤM THƠM =====
    {
      icon: "fas fa-flask",
      title: "Gạo Tấm thơm - Báo cáo kiểm nghiệm VietLabs",
      content: "Tên mẫu: Gạo Tấm thơm.\nSố phiếu: VLAB0-260409-025/4.\nNgày phát hành: 16/04/2026.\nĐơn vị kiểm nghiệm: Công ty Cổ phần Công nghệ VietLabs.\n\n📋 KẾT QUẢ KIỂM NGHIỆM:\n\n1. VI SINH (đều đạt hoặc không phát hiện):\n   - Tổng vi sinh vật hiếu khí: 8,0 x 10¹ CFU/g\n   - E.coli: <10 CFU/g\n   - Coliforms: <10 CFU/g\n   - Nấm men và nấm mốc: <10 CFU/g\n   - Salmonella spp.: Không phát hiện/25g\n\n2. KIM LOẠI NẶNG (không phát hiện):\n   - Cadimi (Cd): Không phát hiện\n   - Chì (Pb): Không phát hiện\n   - Asen (As): Không phát hiện\n   - Thủy ngân (Hg): Không phát hiện\n\n3. ĐỘC TỐ VI NẤM (không phát hiện):\n   - Aflatoxin tổng số: Không phát hiện\n\n4. THÀNH PHẦN DINH DƯỠNG:\n   - Năng lượng: 346 Kcal/100g\n   - Carbohydrat: 76,9 g/100g\n   - Đạm: 6,91 g/100g\n   - Béo tổng: 1,17 g/100g\n   - Đường tổng: 0,42 g/100g\n   - Natri: 4,21 mg/100g\n\n✅ KẾT LUẬN: Sản phẩm đạt chuẩn an toàn thực phẩm theo Quyết định 05/2016/TT-BYT, QCVN 8-1:2011/BYT và QCVN 8-2:2011/BYT.",
      badge: "✅ Kiểm nghiệm đạt chuẩn",
      borderColor: "#f57c00",
      // 👇 Mảng 2 ảnh (trang 2 và trang 3)
      images: [
        "/images/ket-qua-kiem-nghiem-gao-tam-thom-trang2.png",
        "/images/ket-qua-kiem-nghiem-gao-tam-thom-trang3.png"
      ]
    }
  ],
  highlight: "🍚 Các sản phẩm gạo của QUỲNH ORGANIC FARM đều được kiểm định chất lượng nghiêm ngặt, đảm bảo an toàn vệ sinh thực phẩm. Gạo Lài thơm đã có hồ sơ công bố và chứng nhận BRCGS. Gạo Tấm thơm đã qua kiểm nghiệm VietLabs với kết quả đạt chuẩn tuyệt đối, không phát hiện vi sinh vật gây hại, kim loại nặng và độc tố vi nấm."
};