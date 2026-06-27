// =============================================
// RENDERER XÃ HỘI - Phong cách xanh dương, hiện đại
// =============================================

function createSocCard(card) {
  const formattedContent = (card.content || '').replace(/\n/g, '<br>');
  return `
    <div class="soc-card">
      <div class="soc-card-header">
        <span class="soc-card-icon"><i class="${card.icon}"></i></span>
        <h3 class="soc-card-title">${card.title}</h3>
      </div>
      <div class="soc-card-body">
        <p class="soc-card-text">${formattedContent}</p>
        ${card.badge ? `<span class="soc-badge">${card.badge}</span>` : ''}
      </div>
    </div>
  `;
}

function renderSocCards(cards) {
  if (!cards || cards.length === 0) return '<p class="soc-empty">Đang cập nhật nội dung...</p>';
  return `<div class="soc-grid">${cards.map(card => createSocCard(card)).join('')}</div>`;
}

function renderSocietyContent() {
  if (typeof societyData === 'undefined') {
    console.warn('societyData chưa được tải');
    return;
  }
  
  const container = document.getElementById('dynamic-content');
  if (!container) return;
  
  updateHero('EcoSphere · Xã hội', 'Khám phá các vấn đề xã hội và phát triển bền vững', null, 'society');
  
  container.innerHTML = `
    <div class="soc-section">
      <h2 class="soc-section-title"><i class="fas fa-users"></i> ${societyData.title}</h2>
      ${renderSocCards(societyData.cards)}
      <div class="soc-highlight">
        <i class="fas fa-chart-line"></i> 
        <strong>${societyData.highlight || ''}</strong>
      </div>
    </div>
  `;
}