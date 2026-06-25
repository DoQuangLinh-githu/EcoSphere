// =============================================
// APP.JS - IDSEA (Dữ liệu & Phân tích)
// =============================================

// URL của web QOF
const QOF_URL = 'http://localhost:3000';

function initApp() {
    console.log('🏢 IDSEA - Dữ liệu & Phân tích đã khởi động!');
    
    // Render footer
    if (typeof renderFooter === 'function') {
        renderFooter();
    }
    
    // ===== 1. XỬ LÝ MENU CHÍNH =====
    const navItems = document.querySelectorAll('.nav-item.has-submenu');
    navItems.forEach(item => {
        const header = item.querySelector('.nav-header');
        if (header) {
            header.addEventListener('click', function(e) {
                e.stopPropagation();
                // Đóng các menu khác
                navItems.forEach(other => {
                    if (other !== item) {
                        other.classList.remove('open');
                    }
                });
                item.classList.toggle('open');
            });
        }
    });
    
    // ===== 2. XỬ LÝ MÔI TRƯỜNG =====
    const envItems = document.querySelectorAll('#submenu-environment li');
    envItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const subId = this.dataset.sub;
            if (subId && typeof renderEnvironmentContent === 'function') {
                renderEnvironmentContent(subId);
                envItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // ===== 3. XỬ LÝ XÃ HỘI =====
    const societyItems = document.querySelectorAll('#submenu-society li');
    societyItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            if (typeof renderSocietyContent === 'function') {
                renderSocietyContent();
                societyItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // ===== 4. XỬ LÝ CÔNG NGHỆ CAO =====
    const highTechItem = document.querySelector('#submenu-agriculture li[data-sub-agri="high-tech"]');
    if (highTechItem) {
        highTechItem.addEventListener('click', function(e) {
            e.stopPropagation();
            if (typeof renderHighTechContent === 'function') {
                renderHighTechContent();
                document.querySelectorAll('#submenu-agriculture li').forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            }
        });
    }
    
    // ===== 5. MẶC ĐỊNH: MỞ MENU MÔI TRƯỜNG =====
    const envMenu = document.querySelector('.nav-header[data-menu="environment"]');
    if (envMenu) {
        const parent = envMenu.closest('.nav-item');
        if (parent) {
            parent.classList.add('open');
        }
    }
    
    // ===== 6. HIỂN THỊ NỘI DUNG MẶC ĐỊNH =====
    // Mặc định hiển thị GIS & CSDL (AI)
    if (typeof renderEnvironmentContent === 'function') {
        const firstItem = document.querySelector('#submenu-environment li[data-sub="gisai"]');
        if (firstItem) {
            firstItem.classList.add('active');
        }
        renderEnvironmentContent('gisai');
    }
}

// ===== HÀM RENDER MÔI TRƯỜNG =====
function renderEnvironmentContent(type) {
    const container = document.getElementById('dynamic-content');
    if (!container) return;
    
    // Cập nhật Hero
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
    
    const envContent = {
        'gisai': {
            title: '🗺️ GIS & CSDL (AI)',
            icon: 'fas fa-map',
            description: 'Hệ thống thông tin địa lý, cơ sở dữ liệu và trí tuệ nhân tạo',
            cards: [
                { title: 'GIS', content: 'Hệ thống thông tin địa lý, dữ liệu không gian và bản đồ tương tác' },
                { title: 'CSDL', content: 'Cơ sở dữ liệu môi trường tích hợp, quản lý và truy xuất dữ liệu' },
                { title: 'AI & Machine Learning', content: 'Ứng dụng trí tuệ nhân tạo trong phân tích dữ liệu môi trường' },
                { title: 'Phân tích không gian', content: 'Công cụ phân tích không gian và thống kê địa lý' }
            ]
        },
        'modeling': {
            title: '📈 Mô hình hóa',
            icon: 'fas fa-chart-bar',
            description: 'Mô hình dự báo và phân tích môi trường',
            cards: [
                { title: 'Dự báo khí hậu', content: 'Mô hình dự báo biến đổi khí hậu và thời tiết' },
                { title: 'Phát thải', content: 'Mô hình dự báo phát thải khí nhà kính' },
                { title: 'Tác động môi trường', content: 'Mô hình đánh giá tác động môi trường' },
                { title: 'Mô phỏng', content: 'Mô phỏng các kịch bản môi trường khác nhau' }
            ]
        },
        'renewable': {
            title: '☀️ Năng lượng tái tạo',
            icon: 'fas fa-solar-panel',
            description: 'Dữ liệu và phân tích về năng lượng tái tạo',
            cards: [
                { title: 'Năng lượng mặt trời', content: 'Dữ liệu về sản xuất và tiềm năng năng lượng mặt trời' },
                { title: 'Năng lượng gió', content: 'Dữ liệu về sản xuất và tiềm năng năng lượng gió' },
                { title: 'Thủy điện', content: 'Dữ liệu về sản xuất và tiềm năng thủy điện' },
                { title: 'Sinh khối', content: 'Dữ liệu về sản xuất và tiềm năng năng lượng sinh khối' }
            ]
        },
        'climate': {
            title: '🌡️ Khí nhà kính & BĐKH',
            icon: 'fas fa-temperature-high',
            description: 'Dữ liệu về khí nhà kính và biến đổi khí hậu',
            cards: [
                { title: 'CO2', content: 'Dữ liệu phát thải CO2 từ công nghiệp và giao thông' },
                { title: 'CH4', content: 'Dữ liệu phát thải CH4 từ nông nghiệp và chất thải' },
                { title: 'N2O', content: 'Dữ liệu phát thải N2O từ hoạt động nông nghiệp' },
                { title: 'Biến đổi khí hậu', content: 'Dữ liệu nhiệt độ, lượng mưa, mực nước biển dâng' }
            ]
        }
    };
    
    const data = envContent[type];
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

// ===== HÀM RENDER XÃ HỘI =====
function renderSocietyContent() {
    const container = document.getElementById('dynamic-content');
    if (!container) return;
    
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
                <div>
                    <h1><i class="fas fa-hand-holding-heart"></i> IDSEA · Xã hội</h1>
                    <p>Dữ liệu và phân tích về phát triển bền vững</p>
                </div>
            </div>
        `;
        hero.className = 'hero hero-society';
    }
    
    container.innerHTML = `
        <div class="data-section">
            <div class="data-header">
                <i class="fas fa-globe-asia" style="font-size: 2rem; color: #1b4d3c;"></i>
                <h1 style="font-size: 1.8rem; font-weight: 700; color: #1b4d3c; margin: 0;">👥 Phát triển bền vững</h1>
            </div>
            <p style="color: #5a7a62; margin-bottom: 2rem;">Dữ liệu về các chỉ số phát triển bền vững</p>
            <div class="info-grid">
                <div class="feature-card">
                    <h3><i class="fas fa-chart-line" style="color: #1b4d3c;"></i> Chỉ số HDI</h3>
                    <p>Chỉ số phát triển con người theo từng quốc gia</p>
                </div>
                <div class="feature-card">
                    <h3><i class="fas fa-graduation-cap" style="color: #1b4d3c;"></i> Giáo dục</h3>
                    <p>Tỷ lệ biết chữ, số năm đi học trung bình</p>
                </div>
                <div class="feature-card">
                    <h3><i class="fas fa-heartbeat" style="color: #1b4d3c;"></i> Y tế</h3>
                    <p>Tuổi thọ trung bình, tỷ lệ tử vong trẻ em</p>
                </div>
                <div class="feature-card">
                    <h3><i class="fas fa-chart-pie" style="color: #1b4d3c;"></i> Bình đẳng</h3>
                    <p>Chỉ số bình đẳng giới, phân phối thu nhập</p>
                </div>
            </div>
        </div>
    `;
}

// ===== HÀM RENDER CÔNG NGHỆ CAO =====
function renderHighTechContent() {
    const container = document.getElementById('dynamic-content');
    if (!container) return;
    
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
                <div>
                    <h1><i class="fas fa-microchip"></i> IDSEA · Công nghệ cao</h1>
                    <p>Ứng dụng công nghệ trong nông nghiệp</p>
                </div>
            </div>
        `;
        hero.className = 'hero hero-agriculture';
    }
    
    if (typeof agricultureData !== 'undefined' && agricultureData.highTech) {
        const cards = agricultureData.highTech.cards || [];
        const highlight = agricultureData.highTech.highlight || '';
        
        container.innerHTML = `
            <div class="agri-section">
                <h2 class="agri-section-title"><i class="fas fa-microchip"></i> Công nghệ cao trong nông nghiệp</h2>
                <div class="agri-list">
                    ${cards.map(card => `
                        <div class="agri-card">
                            <div class="agri-card-icon"><i class="${card.icon}"></i></div>
                            <div class="agri-card-content">
                                <h3 class="agri-card-title">${card.title}</h3>
                                <p class="agri-card-text">${card.content}</p>
                                ${card.badge ? `<span class="agri-badge">${card.badge}</span>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
                ${highlight ? `
                    <div class="agri-highlight">
                        <i class="fas fa-chart-line"></i> 
                        <strong>${highlight}</strong>
                    </div>
                ` : ''}
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="agri-section">
                <h2 class="agri-section-title"><i class="fas fa-microchip"></i> Công nghệ cao trong nông nghiệp</h2>
                <div class="agri-list">
                    <div class="agri-card">
                        <div class="agri-card-icon"><i class="fas fa-microchip"></i></div>
                        <div class="agri-card-content">
                            <h3 class="agri-card-title">IoT & Cảm biến</h3>
                            <p class="agri-card-text">Mạng lưới cảm biến đất, khí tượng, độ ẩm. Truyền dữ liệu thời gian thực giúp điều khiển tưới tiêu chính xác.</p>
                            <span class="agri-badge">Smart Agri</span>
                        </div>
                    </div>
                    <div class="agri-card">
                        <div class="agri-card-icon"><i class="fas fa-drone"></i></div>
                        <div class="agri-card-content">
                            <h3 class="agri-card-title">Drone & Viễn thám</h3>
                            <p class="agri-card-text">Giám sát sức khỏe cây trồng, phát hiện sâu bệnh sớm, bản đồ sinh khối. Tích hợp GIS phân tích không gian.</p>
                            <span class="agri-badge">Ảnh đa phổ</span>
                        </div>
                    </div>
                    <div class="agri-card">
                        <div class="agri-card-icon"><i class="fas fa-robot"></i></div>
                        <div class="agri-card-content">
                            <h3 class="agri-card-title">Robot & Tự động hóa</h3>
                            <p class="agri-card-text">Thu hoạch tự động, gieo hạt chính xác, nhà màng thông minh. Giảm nhân công, tăng hiệu suất.</p>
                            <span class="agri-badge">Nông nghiệp 4.0</span>
                        </div>
                    </div>
                </div>
                <div class="agri-highlight">
                    <i class="fas fa-chart-line"></i> 
                    <strong>Công nghệ cao kết hợp mô hình hóa khí hậu và GIS giúp giảm phát thải khí nhà kính, tối ưu đầu vào phân bón, nước tưới.</strong>
                </div>
            </div>
        `;
    }
}

// Khởi động khi DOM sẵn sàng
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}