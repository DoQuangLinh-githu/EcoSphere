const environmentData = {
  climate: {
    cards: [
      { icon: "fas fa-globe-asia", title: "Biến đổi khí hậu", content: "Hiện tượng nóng lên toàn cầu, băng tan, nước biển dâng, thiên tai cực đoan. Tác động sâu sắc đến nông nghiệp, tài nguyên nước và đời sống xã hội.", badge: "Thích ứng & giảm thiểu", borderColor: "#e05a2a" },
      { icon: "fas fa-chart-simple", title: "Nguyên nhân & hậu quả", content: "Hoạt động công nghiệp, phá rừng, nông nghiệp thâm canh làm gia tăng phát thải khí nhà kính.", badge: "Giải pháp carbon thấp", borderColor: "#e05a2a" },
      { icon: "fas fa-city", title: "Ứng phó toàn cầu", content: "Thỏa thuận Paris, lộ trình trung hòa carbon, năng lượng tái tạo, chuyển đổi xanh trong sản xuất nông nghiệp.", badge: "Hợp tác quốc tế", borderColor: "#e05a2a" }
    ],
    highlight: "Biến đổi khí hậu làm thay đổi chu kỳ mùa vụ → cần mô hình hóa và GIS để lập bản đồ rủi ro."
  },
  ghg: {
    cards: [
      { icon: "fas fa-smog", title: "Khí nhà kính chính", content: "CO₂, CH₄, N₂O, HFCs. CO₂ từ đốt nhiên liệu hóa thạch, CH₄ từ chăn nuôi và lúa nước.", badge: "Phát thải theo ngành", borderColor: "#bd8a3a" },
      { icon: "fas fa-industry", title: "Nông nghiệp & phát thải", content: "Quản lý chất thải chăn nuôi, canh tác lúa ngập nước. Công nghệ cao giúp giảm phát thải.", badge: "Giải pháp giảm nhẹ", borderColor: "#bd8a3a" }
    ],
    highlight: "Xu hướng Net‑Zero: Kết hợp mô hình hóa khí nhà kính, dữ liệu không gian để định hướng nông nghiệp carbon thấp."
  },
  modeling: {
    cards: [
      { icon: "fas fa-chart-network", title: "Mô hình khí hậu", content: "Mô hình tuần hoàn chung (GCM), mô hình khu vực (RCM). Dự báo nhiệt độ, lượng mưa.", badge: "Kịch bản RCP/SSP", borderColor: "#3f8dbf" },
      { icon: "fas fa-leaf", title: "Ứng dụng nông nghiệp", content: "Mô phỏng năng suất cây trồng, mô hình dịch hại, dòng chảy tưới tiêu.", badge: "Hệ thống cảnh báo sớm", borderColor: "#3f8dbf" }
    ],
    highlight: "Mô hình hóa + GIS + CSDL: Nền tảng hỗ trợ lập kế hoạch thích ứng biến đổi khí hậu."
  },
  gisdb: {
    cards: [
      { icon: "fas fa-database", title: "Cơ sở dữ liệu môi trường", content: "Lưu trữ số liệu quan trắc khí tượng, thủy văn, chất lượng đất, phát thải khí nhà kính.", badge: "Dữ liệu mở", borderColor: "#5c9c6e" },
      { icon: "fas fa-map-marked-alt", title: "Hệ thống thông tin địa lý (GIS)", content: "Phân tích không gian, bản đồ ngập lụt, xói mòn, quy hoạch sử dụng đất.", badge: "Lớp bản đồ chuyên đề", borderColor: "#5c9c6e" }
    ],
    highlight: "Xây dựng nền tảng GIS – CSDL quốc gia về biến đổi khí hậu."
  }
};

const societyData = {
  title: "Xã hội bền vững & thích ứng",
  icon: "fas fa-hand-holding-heart",
  iconColor: "#d97706",
  cards: [
    { icon: "fas fa-city", title: "Cộng đồng & khí hậu", content: "Di cư do biến đổi khí hậu, mất sinh kế nông nghiệp, áp lực lên đô thị.", borderColor: "#e67e22" },
    { icon: "fas fa-scale-balanced", title: "Công bằng môi trường", content: "Tiếp cận công bằng với tài nguyên đất, nước và không khí sạch.", borderColor: "#e67e22" }
  ],
  highlight: "Dữ liệu GIS về phân bố dân cư và rủi ro khí hậu giúp thiết kế các chương trình hỗ trợ thông minh."
};

const agricultureData = {
  highTech: {
    cards: [
      { icon: "fas fa-microchip", title: "IoT & cảm biến", content: "Mạng lưới cảm biến đất, khí tượng, độ ẩm. Điều khiển tưới tiêu chính xác.", badge: "Smart Agri", borderColor: "#4c8b35" },
      { icon: "fas fa-drone", title: "Drone & viễn thám", content: "Giám sát sức khỏe cây trồng, phát hiện sâu bệnh sớm.", badge: "Ảnh đa phổ", borderColor: "#4c8b35" }
    ],
    highlight: "Công nghệ cao kết hợp mô hình hóa khí hậu và GIS giúp giảm phát thải khí nhà kính."
  },
  production: {
    cards: [
      { icon: "fas fa-tractor", title: "Canh tác bền vững", content: "Luân canh, xen canh, nông lâm kết hợp, giảm làm đất.", badge: "Hữu cơ & tái sinh", borderColor: "#6b8c3e" },
      { icon: "fas fa-water", title: "Quản lý nước thông minh", content: "Hệ thống tưới nhỏ giọt, tái sử dụng nước, dự báo nhu cầu nước.", badge: "Tiết kiệm nước", borderColor: "#6b8c3e" }
    ],
    highlight: "Kết hợp mô hình hóa biến đổi khí hậu, khí nhà kính thấp và GIS để chuyển đổi sang nền nông nghiệp phát thải ròng bằng 0."
  }
};

const footerTags = ["Biến đổi khí hậu", "Khí nhà kính", "Mô hình hóa", "Cơ sở dữ liệu", "Hệ thống thông tin địa lý (GIS)", "Công nghệ cao", "Sản xuất nông nghiệp"];