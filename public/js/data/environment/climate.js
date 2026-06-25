// Khí nhà kính & Biến đổi khí hậu
if (typeof environmentData === 'undefined') var environmentData = {};

environmentData.climate = {
  cards: [
    { 
      icon: "fas fa-smog", 
      title: "Khí nhà kính chính", 
      content: "CO₂, CH₄, N₂O, HFCs. CO₂ từ đốt nhiên liệu hóa thạch và công nghiệp. CH₄ từ chăn nuôi, lúa nước và chất thải. N₂O từ phân bón hóa học và hoạt động công nghiệp.",
      badge: "CO₂ · CH₄ · N₂O", 
      borderColor: "#c62828" 
    },
    { 
      icon: "fas fa-globe-asia", 
      title: "Biến đổi khí hậu", 
      content: "Hiện tượng nóng lên toàn cầu, băng tan, nước biển dâng, thiên tai cực đoan. Tác động sâu sắc đến nông nghiệp, tài nguyên nước, đa dạng sinh học và đời sống xã hội.",
      badge: "Thích ứng & giảm thiểu", 
      borderColor: "#c62828" 
    },
    { 
      icon: "fas fa-chart-simple", 
      title: "Nguyên nhân & hậu quả", 
      content: "Hoạt động công nghiệp, phá rừng, nông nghiệp thâm canh, đô thị hóa làm gia tăng phát thải khí nhà kính, gây mất cân bằng hệ sinh thái và gia tăng thiên tai.",
      badge: "Giải pháp carbon thấp", 
      borderColor: "#c62828" 
    },
    { 
      icon: "fas fa-city", 
      title: "Ứng phó toàn cầu", 
      content: "Thỏa thuận Paris, lộ trình trung hòa carbon (Net Zero), phát triển năng lượng tái tạo, chuyển đổi xanh trong sản xuất nông nghiệp, quản lý đất đai và bảo vệ rừng.",
      badge: "Hợp tác quốc tế", 
      borderColor: "#c62828" 
    }
  ],
  highlight: "🌡️ Khí nhà kính & Biến đổi khí hậu: Cần kết hợp mô hình hóa, GIS và AI để dự báo, đánh giá tác động và đề xuất giải pháp giảm phát thải hiệu quả."
};