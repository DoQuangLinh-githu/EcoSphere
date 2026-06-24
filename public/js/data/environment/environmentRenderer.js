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
  if (!container || !data) return;
  
  let title = '';
  switch(subTab) {
    case 'climate': title = '🌡️ Biến đổi khí hậu'; break;
    case 'ghg': title = '💨 Khí nhà kính'; break;
    case 'modeling': title = '📊 Mô hình hóa'; break;
    case 'gisdb': title = '🗺️ Cơ sở dữ liệu & GIS'; break;
    default: title = '🌿 Môi trường';
  }
  
  // Cập nhật hero với style environment
  updateHero('EcoSphere · Môi trường', 'Hệ thống kiến thức về Biến đổi khí hậu, Khí nhà kính, Mô hình hóa & GIS', null, 'environment');
  
  container.innerHTML = `
    <div class="env-section">
      <h2 class="env-section-title"><i class="fas fa-leaf"></i> ${title}</h2>
      ${renderEnvCards(data.cards)}
      <div class="env-highlight">
        <i class="fas fa-chart-network"></i> 
        <strong>${data.highlight || ''}</strong>
      </div>
    </div>
  `;
}