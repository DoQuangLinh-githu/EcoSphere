// =============================================
// DATA RENDERER - IDSEA (Dữ liệu & Phân tích)
// =============================================

function renderDataContent(type) {
    const container = document.getElementById('dynamic-content');
    if (!container) return;
    
    // Cập nhật Hero
    updateHeroData(
        'IDSEA · Dữ liệu & Phân tích',
        'Hệ thống dữ liệu tích hợp: Môi trường · Xã hội · Nông nghiệp',
        'fas fa-building'
    );
    
    const dataContent = {
        'data-environment': {
            title: '📊 Dữ liệu môi trường',
            icon: 'fas fa-leaf',
            description: 'Dữ liệu về biến đổi khí hậu, khí nhà kính, mô hình hóa và GIS',
            cards: [
                { title: 'Biến đổi khí hậu', content: 'Dữ liệu nhiệt độ, lượng mưa, mực nước biển dâng...' },
                { title: 'Khí nhà kính', content: 'Dữ liệu phát thải CO2, CH4, N2O từ các nguồn khác nhau' },
                { title: 'Mô hình hóa', content: 'Mô hình dự báo khí hậu, mô hình phát thải khí nhà kính' },
                { title: 'GIS & CSDL', content: 'Hệ thống thông tin địa lý, cơ sở dữ liệu không gian' }
            ]
        },
        'data-society': {
            title: '📊 Dữ liệu xã hội',
            icon: 'fas fa-users',
            description: 'Dữ liệu về phát triển bền vững và các chỉ số xã hội',
            cards: [
                { title: 'Phát triển bền vững', content: 'Chỉ số phát triển con người (HDI), tỷ lệ nghèo đói...' },
                { title: 'Giáo dục', content: 'Dữ liệu về tỷ lệ biết chữ, số năm đi học...' },
                { title: 'Y tế', content: 'Dữ liệu về tuổi thọ, tỷ lệ tử vong trẻ em...' }
            ]
        },
        'data-agriculture': {
            title: '📊 Dữ liệu nông nghiệp',
            icon: 'fas fa-seedling',
            description: 'Dữ liệu về sản xuất, năng suất và công nghệ nông nghiệp',
            cards: [
                { title: 'Sản xuất nông nghiệp', content: 'Dữ liệu sản lượng, diện tích canh tác...' },
                { title: 'Công nghệ cao', content: 'Dữ liệu ứng dụng IoT, drone, robot trong nông nghiệp' },
                { title: 'Năng suất', content: 'Dữ liệu năng suất cây trồng, vật nuôi...' }
            ]
        }
    };
    
    const data = dataContent[type];
    if (data) {
        container.innerHTML = `
            <div class="data-section">
                <div class="data-header">
                    <i class="${data.icon}" style="font-size: 2rem; color: #1b4d3c;"></i>
                    <h1 style="font-size: 1.8rem; font-weight: 700; color: #1b4d3c; margin: 0;">${data.title}</h1>
                </div>
                <p style="color: #5a7a62; margin-bottom: 2rem;">${data.description}</p>
                <div class="info-grid">
                    ${data.cards.map(card => `
                        <div class="feature-card">
                            <h3><i class="fas fa-database" style="color: #1b4d3c;"></i> ${card.title}</h3>
                            <p>${card.content}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}