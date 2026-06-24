// Mô hình hóa
if (typeof environmentData === 'undefined') var environmentData = {};

environmentData.modeling = {
  cards: [
    { icon: "fas fa-chart-network", title: "Mô hình khí hậu", content: "Mô hình tuần hoàn chung (GCM), mô hình khu vực (RCM). Dự báo nhiệt độ, lượng mưa, tần suất thiên tai theo kịch bản phát thải.", badge: "Kịch bản RCP/SSP", borderColor: "#3f8dbf" },
    { icon: "fas fa-leaf", title: "Ứng dụng nông nghiệp", content: "Mô phỏng năng suất cây trồng, mô hình dịch hại, dòng chảy tưới tiêu. Hỗ trợ ra quyết định mùa vụ và giống cây trồng.", badge: "Hệ thống cảnh báo sớm", borderColor: "#3f8dbf" },
    { icon: "fas fa-chart-line", title: "Mô hình môi trường", content: "Mô hình lan truyền ô nhiễm, chất lượng không khí, xói mòn đất. Tích hợp GIS để trực quan hóa kết quả đầu ra.", badge: "Phân tích không gian", borderColor: "#3f8dbf" }
  ],
  highlight: "Mô hình hóa + GIS + CSDL: Nền tảng hỗ trợ lập kế hoạch thích ứng biến đổi khí hậu cho nông nghiệp và cộng đồng."
};