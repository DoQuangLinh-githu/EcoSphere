// =============================================
// APP.JS - IDSEA (Dữ liệu & Phân tích)
// =============================================

const QOF_URL = 'https://qof-hazel.vercel.app/';

function initApp() {
    console.log('🏢 IDSEA - Dữ liệu & Phân tích đã khởi động!');
    console.log('🔗 Liên kết QOF:', QOF_URL);
    
    // Render footer
    if (typeof renderFooter === 'function') {
        renderFooter();
    }
    
    // ===== 1. XỬ LÝ MENU MOBILE (NÚT 3 GẠCH) =====
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    if (menuToggle && sidebar && overlay) {
        function toggleMenu() {
            sidebar.classList.toggle('mobile-open');
            overlay.classList.toggle('active');
            body.classList.toggle('menu-open');
        }

        function closeMenu() {
            sidebar.classList.remove('mobile-open');
            overlay.classList.remove('active');
            body.classList.remove('menu-open');
        }

        menuToggle.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', closeMenu);

        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && sidebar.classList.contains('mobile-open')) {
                closeMenu();
            }
        });

        // Đóng menu khi bấm vào bất kỳ mục nào trong sidebar
        document.querySelectorAll('.sidebar a, .sidebar li').forEach(function(el) {
            el.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    setTimeout(closeMenu, 300);
                }
            });
        });
    }

    // ===== 2. XỬ LÝ MENU CHÍNH (MỞ/ĐÓNG) =====
    const navItems = document.querySelectorAll('.nav-item.has-submenu');
    navItems.forEach(item => {
        const header = item.querySelector('.nav-header');
        if (header) {
            header.addEventListener('click', function(e) {
                e.stopPropagation();
                navItems.forEach(other => {
                    if (other !== item) {
                        other.classList.remove('open');
                    }
                });
                item.classList.toggle('open');
            });
        }
    });

    // ===== 3. XỬ LÝ MÔI TRƯỜNG =====
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

    // ===== 4. XỬ LÝ XÃ HỘI =====
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

    // ===== 5. XỬ LÝ CÔNG NGHỆ CAO =====
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

    // ===== 6. MẶC ĐỊNH: MỞ MENU MÔI TRƯỜNG & HIỂN THỊ GISAI =====
    const envMenu = document.querySelector('.nav-header[data-menu="environment"]');
    if (envMenu) {
        const parent = envMenu.closest('.nav-item');
        if (parent) {
            parent.classList.add('open');
        }
    }

    if (typeof renderEnvironmentContent === 'function') {
        const firstItem = document.querySelector('#submenu-environment li[data-sub="gisai"]');
        if (firstItem) {
            firstItem.classList.add('active');
        }
        renderEnvironmentContent('gisai'); // Hiển thị GIS & Climate Smart City
    }
}

// Khởi động khi DOM sẵn sàng
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}