// Mô hình hóa
if (typeof environmentData === 'undefined') var environmentData = {};

environmentData.modeling = {
  cards: [
    { 
      icon: "fas fa-chart-network", 
      title: "Mô hình khí hậu", 
      content: "Mô hình tuần hoàn chung (GCM), mô hình khu vực (RCM). Dự báo nhiệt độ, lượng mưa, tần suất thiên tai theo kịch bản phát thải (RCP/SSP). Tích hợp dữ liệu từ các trạm quan trắc.",
      badge: "Kịch bản RCP/SSP", 
      borderColor: "#1565c0" 
    },
    { 
      icon: "fas fa-leaf", 
      title: "Ứng dụng nông nghiệp", 
      content: "Mô phỏng năng suất cây trồng, mô hình dịch hại, dòng chảy tưới tiêu. Hỗ trợ ra quyết định mùa vụ và lựa chọn giống cây trồng phù hợp với điều kiện khí hậu.",
      badge: "Hệ thống cảnh báo sớm", 
      borderColor: "#1565c0" 
    },
    { 
      icon: "fas fa-chart-line", 
      title: "Mô hình môi trường", 
      content: "Mô hình lan truyền ô nhiễm không khí, chất lượng nước, xói mòn đất. Tích hợp GIS để trực quan hóa kết quả đầu ra và phân tích không gian.",
      badge: "Phân tích không gian", 
      borderColor: "#1565c0" 
    },
    { 
      icon: "fas fa-cogs", 
      title: "Mô hình tích hợp đa ngành", 
      content: "Kết hợp mô hình khí hậu - thủy văn - nông nghiệp - kinh tế. Đánh giá tác động tổng hợp của biến đổi khí hậu và đề xuất giải pháp thích ứng.",
      badge: "Mô hình hệ thống", 
      borderColor: "#1565c0" 
    }
  ],
  highlight: "📈 Mô hình hóa đa ngành + GIS + CSDL: Nền tảng hỗ trợ lập kế hoạch thích ứng biến đổi khí hậu cho nông nghiệp, tài nguyên nước và cộng đồng."
};