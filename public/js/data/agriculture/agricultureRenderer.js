// =============================================
// RENDERER NÔNG NGHIỆP
// =============================================

function createAgriCard(card) {
    const formattedContent = (card.content || '').replace(/\n/g, '<br>');
    
    let imageHtml = '';
    if (card.image) {
        imageHtml = `
            <div class="agri-card-image-wrapper">
                <img src="${card.image}" alt="${card.title}" class="agri-card-image">
                <div class="agri-card-image-caption">📄 Nguồn: Báo cáo kết quả thử nghiệm VietLabs</div>
            </div>
        `;
    } else if (card.images && card.images.length > 0) {
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
                <div class="agri-card-image-caption">📄 Nguồn: Báo cáo kết quả thử nghiệm VietLabs</div>
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

// ===== CHỈ GIỮ LẠI HÀM RENDER CÔNG NGHỆ CAO =====
function renderHighTechContent() {
    if (typeof agricultureData === 'undefined' || !agricultureData.highTech) {
        console.warn('agricultureData.highTech chưa được tải');
        return;
    }
    
    const container = document.getElementById('dynamic-content');
    if (!container) return;
    
    // Cập nhật Hero
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.innerHTML = `
            <h1><i class="fas fa-charging-station"></i> EcoSphere · Công nghệ cao</h1>
            <p>Ứng dụng công nghệ trong nông nghiệp hiện đại</p>
        `;
        hero.className = 'hero';
    }
    
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

// ❌ ĐÃ XÓA: renderProductionContent() - vì đã chuyển hướng sang QOF