// Xử lý menu sidebar
function initSidebarMenu() {
  // 1. Mở/đóng submenu cấp 1
  const navItems = document.querySelectorAll('.nav-item.has-submenu');
  navItems.forEach(item => {
    const header = item.querySelector('.nav-header');
    if (header) {
      header.addEventListener('click', (e) => {
        e.stopPropagation();
        item.classList.toggle('open');
      });
    }
  });
  
  // 2. Môi trường
  const envSubItems = document.querySelectorAll('#submenu-environment li');
  envSubItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const subId = item.dataset.sub;
      if (subId) {
        renderEnvironmentContent(subId);
        envSubItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      }
    });
  });
  
  // 3. Xã hội
  const societyHeader = document.querySelector('.nav-header[data-menu="society"]');
  if (societyHeader) {
    societyHeader.addEventListener('click', () => {
      renderSocietyContent();
    });
  }
  
  // 4. Công nghệ cao
  const highTechItem = document.querySelector('#submenu-agriculture li[data-sub-agri="high-tech"]');
  if (highTechItem) {
    highTechItem.addEventListener('click', () => {
      renderHighTechContent();
    });
  }
  
  // 5. Sản xuất nông nghiệp - click để hiển thị mặc định (Trang chủ)
  const productionParent = document.querySelector('.submenu li.has-submenu-vertical');
  if (productionParent) {
    const productionHeader = productionParent.querySelector('.submenu-header');
    if (productionHeader) {
      productionHeader.addEventListener('click', (e) => {
        e.stopPropagation();
        productionParent.classList.toggle('open');
        // Mặc định hiển thị Trang chủ khi mở lần đầu
        if (productionParent.classList.contains('open')) {
          renderProductionContent('trangChu');
        }
      });
    }
  }
  
  // 6. Các mục con trong Sản xuất nông nghiệp
  const productionItems = document.querySelectorAll('.submenu-vertical li');
  productionItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const pageId = item.dataset.production;
      if (pageId && typeof renderProductionContent === 'function') {
        renderProductionContent(pageId);
      }
    });
  });
}

// Khởi tạo nội dung mặc định
function initDefaultContent() {
  if (typeof environmentData !== 'undefined' && environmentData.climate) {
    renderEnvironmentContent('climate');
  }
}

function initApp() {
  console.log('🌍 EcoSphere - Hệ sinh thái tri thức đã khởi động!');
  renderFooter();
  initSidebarMenu();
  initDefaultContent();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}