// =============================================
// RENDERER NÔNG NGHIỆP - Phong cách nâu ấm
// =============================================

function createAgriCard(card) {
  const formattedContent = (card.content || '').replace(/\n/g, '<br>');
  
  // 👇 Kiểm tra nếu có ảnh (1 ảnh hoặc nhiều ảnh)
  let imageHtml = '';
  if (card.image) {
    // Nếu là 1 ảnh (chuỗi)
    imageHtml = `
      <div class="agri-card-image-wrapper">
        <img src="${card.image}" alt="${card.title}" class="agri-card-image">
        <div class="agri-card-image-caption">📄 Nguồn: Báo cáo kết quả thử nghiệm VietLabs</div>
      </div>
    `;
  } else if (card.images && card.images.length > 0) {
    // 👇 Nếu là mảng nhiều ảnh (2 ảnh)
    const imagesHtml = card.images.map(img => `
      <div class="agri-card-image-item">
        <img src="${img}" alt="${card.title}" class="agri-card-image">
      </div>
    `).join('');
    
    imageHtml = `
      <div class="agri-card-images-wrapper">
        <div class="agri-card-images-grid">
          ${imagesHtml}
        </div>
        <div class="agri-card-image-caption">📄 Nguồn: Báo cáo kết quả thử nghiệm VietLabs (Trang 2 và 3)</div>
      </div>
    `;
  }
  
  return `
    <div class="agri-card">
      <div class="agri-card-icon"><i class="${card.icon}"></i></div>
      <div class="agri-card-content">
        <h3 class="agri-card-title">${card.title}</h3>
        <p class="agri-card-text">${formattedContent}</p>
        ${imageHtml}
        ${card.badge ? `<span class="agri-badge">${card.badge}</span>` : ''}
      </div>
    </div>
  `;
}

function renderAgriCards(cards) {
  if (!cards || cards.length === 0) return '<p class="agri-empty">Đang cập nhật nội dung...</p>';
  return `<div class="agri-list">${cards.map(card => createAgriCard(card)).join('')}</div>`;
}

// ===== Các hàm render khác giữ nguyên =====
function renderHighTechContent() {
  if (typeof agricultureData === 'undefined' || !agricultureData.highTech) {
    console.warn('agricultureData.highTech chưa được tải');
    return;
  }
  
  const container = document.getElementById('dynamic-content');
  if (!container) return;
  
  updateHero('EcoSphere · Công nghệ cao', 'Ứng dụng công nghệ trong nông nghiệp hiện đại', null, 'agriculture');
  
  container.innerHTML = `
    <div class="agri-section">
      <h2 class="agri-section-title"><i class="fas fa-microchip"></i> Công nghệ cao trong nông nghiệp</h2>
      ${renderAgriCards(agricultureData.highTech.cards)}
      <div class="agri-highlight">
        <i class="fas fa-chart-line"></i> 
        <strong>${agricultureData.highTech.highlight || ''}</strong>
      </div>
    </div>
  `;
}

function renderProductionContent(pageId) {
  const container = document.getElementById('dynamic-content');
  if (!container) return;
  
  const logoPath = '/images/logo.png';
  
  updateHero('QUYNH ORGANIC FARM', 'NÔNG SẢN SẠCH - An toàn - Chất lượng', logoPath, 'agriculture');
  
  if (typeof agricultureData !== 'undefined' && agricultureData.production) {
    const pageMap = {
      'trangChu': 'trangChu',
      'gioiThieu': 'gioiThieu',
      'sanPham': 'sanPham',
      'quanHeCoDong': 'quanHeCoDong',
      'tinTuc': 'tinTuc',
      'doiTac': 'doiTac',
      'lienHe': 'lienHe'
    };
    
    const dataKey = pageMap[pageId];
    const data = agricultureData.production[dataKey];
    
    if (data) {
      container.innerHTML = `
        <div class="agri-section">
          <div class="agri-page-header">
            <i class="${data.icon}" style="font-size: 2rem; color: #5d4037;"></i>
            <h1 class="agri-page-title">${data.title}</h1>
          </div>
          ${renderAgriCards(data.cards)}
          <div class="agri-highlight">
            <i class="fas fa-charging-station"></i> 
            <strong>${data.highlight}</strong>
          </div>
        </div>
      `;
      return;
    }
  }
  
  container.innerHTML = `
    <div class="agri-section">
      <h2><i class="fas fa-info-circle"></i> Đang tải dữ liệu...</h2>
      <p>Vui lòng kiểm tra lại kết nối hoặc tải lại trang.</p>
    </div>
  `;
}