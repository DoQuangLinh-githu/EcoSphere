function createCard(card) {
  return `
    <div class="feature-card">
      <h3 style="border-left-color: ${card.borderColor};"><i class="${card.icon}"></i> ${card.title}</h3>
      <p>${card.content}</p>
      ${card.badge ? `<div class="badge-sm"><i class="fas fa-tag"></i> ${card.badge}</div>` : ''}
    </div>
  `;
}

function renderCards(cards) {
  return `<div class="info-grid">${cards.map(card => createCard(card)).join('')}</div>`;
}

function renderEnvironment() {
  const subtabs = ['climate', 'ghg', 'modeling', 'gisdb'];
  subtabs.forEach(tab => {
    const data = environmentData[tab];
    const container = document.getElementById(`sub-${tab}`);
    if (container && data) {
      container.innerHTML = `${renderCards(data.cards)}<div class="highlight-block"><i class="fas fa-chart-network"></i> <strong>${data.highlight}</strong></div>`;
    }
  });
}

function renderSociety() {
  const container = document.getElementById('primary-society');
  if (container) {
    container.innerHTML = `
      <h2 style="display: flex; gap: 0.8rem; margin-bottom: 1rem;">
        <i class="${societyData.icon}" style="color:${societyData.iconColor};"></i> 
        ${societyData.title}
      </h2>
      ${renderCards(societyData.cards)}
      <div class="highlight-block"><i class="fas fa-chart-line"></i> <strong>Liên kết xã hội - môi trường:</strong> ${societyData.highlight}</div>
    `;
  }
}

function renderAgriculture() {
  const highTechContainer = document.getElementById('sub-hightech');
  const productionContainer = document.getElementById('sub-production');
  
  if (highTechContainer) {
    highTechContainer.innerHTML = `${renderCards(agricultureData.highTech.cards)}<div class="highlight-block"><i class="fas fa-chart-line"></i> <strong>Lợi ích kép:</strong> ${agricultureData.highTech.highlight}</div>`;
  }
  
  if (productionContainer) {
    productionContainer.innerHTML = `${renderCards(agricultureData.production.cards)}<div class="highlight-block"><i class="fas fa-charging-station"></i> <strong>Sản xuất nông nghiệp thích ứng:</strong> ${agricultureData.production.highlight}</div>`;
  }
}

function renderFooter() {
  const footer = document.querySelector('.footer-note');
  if (footer) {
    footer.innerHTML = `
      ${footerTags.map(tag => `<span><i class="fas fa-leaf"></i> ${tag}</span>`).join('')}
      <div style="width:100%; margin-top: 0.5rem;">
        <p>⭐ Giao diện tab lồng ghép – trực quan, dễ dàng khám phá từng chủ đề chuyên sâu ⭐</p>
      </div>
    `;
  }
}