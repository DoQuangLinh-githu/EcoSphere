// =============================================
// RENDERER MÔI TRƯỜNG - Phong cách xanh lá
// =============================================

function createEnvCard(card) {
  const formattedContent = (card.content || '').replace(/\n/g, '<br>');
  return `
    <div class="env-card">
      <div class="env-card-icon"><i class="${card.icon}"></i></div>
      <div class="env-card-body">
        <h3 class="env-card-title">${card.title}</h3>
        <p class="env-card-text">${formattedContent}</p>
        ${card.badge ? `<span class="env-badge">${card.badge}</span>` : ''}
      </div>
    </div>
  `;
}

// ===== HÀM HIỂN THỊ CLIMATE SMART CITY =====
function renderClimateSmartCity(data) {
  if (!data) return '';
  
  return `
    <div class="climate-smart-city-card">
      <h3 class="climate-title">${data.title}</h3>
      <p class="climate-description">${data.description}</p>
      
      <div class="climate-info-grid">
        <div class="climate-info-box">
          <h4>🎯 Sứ mệnh</h4>
          <p>${data.mission}</p>
        </div>
        <div class="climate-info-box">
          <h4>🔭 Tầm nhìn</h4>
          <p>${data.vision}</p>
        </div>
      </div>
      
      <div class="climate-sectors">
        <h4>5 Lĩnh vực đánh giá chính</h4>
        <ul>
          ${data.sectors.map(s => `<li>${s}</li>`).join('')}
        </ul>
        <p class="climate-note">Mỗi tiêu chí được chuẩn hóa với công thức tính toán, thang điểm từ 1-5, giúp việc theo dõi và đánh giá trở nên khoa học và minh bạch.</p>
      </div>
      
      <div class="climate-features">
        <h4>Tính năng nổi bật</h4>
        <ul>
          ${data.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>
      
      <div class="climate-cta">
        <a href="${data.externalLink}" target="_blank" rel="noopener noreferrer" class="btn-visit-climate">
          <i class="fas fa-external-link-alt"></i> Truy cập nền tảng Climate Smart City
        </a>
      </div>
    </div>
  `;
}

function renderEnvCards(cards) {
  if (!cards || cards.length === 0) return '<p class="env-empty">Đang cập nhật nội dung...</p>';
  return `<div class="env-grid">${cards.map(card => createEnvCard(card)).join('')}</div>`;
}

function renderEnvironmentContent(subTab) {
  if (typeof environmentData === 'undefined') {
    console.warn('environmentData chưa được tải');
    return;
  }
  
  const data = environmentData[subTab];
  const container = document.getElementById('dynamic-content');
  if (!container || !data) {
    container.innerHTML = '<p class="env-empty">Nội dung đang được cập nhật...</p>';
    return;
  }
  
  let title = '';
  switch(subTab) {
    case 'gisai': 
      title = '🗺️ GIS & CSDL (AI)'; 
      break;
    case 'modeling': 
      title = '📊 Mô hình hóa'; 
      break;
    case 'renewable': 
      title = '☀️ Năng lượng tái tạo'; 
      break;
    case 'climate': 
      title = '🌡️ Khí nhà kính & BĐKH'; 
      break;
    default: 
      title = '🌿 Môi trường';
  }
  
  // Cập nhật hero với style environment
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.innerHTML = `
      <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
        <div>
          <h1><i class="fas fa-globe-asia"></i> IDSEA · Môi trường</h1>
          <p>Dữ liệu và phân tích về môi trường và biến đổi khí hậu</p>
        </div>
      </div>
    `;
    hero.className = 'hero hero-environment';
  }
  
  // Hiển thị Climate Smart City (Chỉ ở mục GISAI)
  const climateSection = (subTab === 'gisai' && data.climateSmartCity) 
    ? renderClimateSmartCity(data.climateSmartCity) 
    : '';
  
  container.innerHTML = `
    <div class="env-section">
      <h2 class="env-section-title"><i class="fas fa-leaf"></i> ${title}</h2>
      ${climateSection}
      ${renderEnvCards(data.cards)}
      ${data.highlight ? `
        <div class="env-highlight">
          <i class="fas fa-chart-network"></i> 
          <strong>${data.highlight}</strong>
        </div>
      ` : ''}
    </div>
  `;
}