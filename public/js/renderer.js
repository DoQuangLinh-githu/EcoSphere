// =============================================
// RENDERER CHÍNH - Chỉ điều phối các renderer con
// =============================================

// ===== HERO CHUNG =====
function updateHero(title, subtitle, logo = null, style = 'default') {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  
  // Xóa class cũ
  hero.className = 'hero';
  
  // Thêm class theo style
  if (style === 'environment') hero.classList.add('hero-environment');
  else if (style === 'society') hero.classList.add('hero-society');
  else if (style === 'agriculture') hero.classList.add('hero-agriculture');
  
  if (logo) {
    hero.innerHTML = `
      <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
        <img src="${logo}" alt="Logo" style="width: 70px; height: 70px; object-fit: contain; border-radius: 15px; background: white; padding: 5px;">
        <div>
          <h1><i class="fas fa-charging-station"></i> ${title}</h1>
          <p>${subtitle}</p>
        </div>
      </div>
    `;
  } else {
    hero.innerHTML = `
      <h1><i class="fas fa-charging-station"></i> ${title}</h1>
      <p>${subtitle}</p>
    `;
  }
}

// ===== FOOTER =====
function renderFooter() {
  const footer = document.querySelector('.footer-note');
  if (footer && typeof footerTags !== 'undefined') {
    footer.innerHTML = footerTags.map(tag => `<span><i class="fas fa-leaf"></i> ${tag}</span>`).join('');
  }
}

// =============================================
// LƯU Ý: Các hàm render của từng lĩnh vực
// được định nghĩa trong các file riêng:
// - environmentRenderer.js: renderEnvironmentContent()
// - societyRenderer.js: renderSocietyContent()
// - agricultureRenderer.js: renderHighTechContent(), renderProductionContent()
// =============================================