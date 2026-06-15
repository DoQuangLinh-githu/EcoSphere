function initPrimaryTabs() {
  const primaryBtns = document.querySelectorAll('.primary-tab');
  const primaryPanes = {
    env: document.getElementById('primary-env'),
    society: document.getElementById('primary-society'),
    agri: document.getElementById('primary-agri')
  };
  
  function activatePrimary(tabId) {
    Object.values(primaryPanes).forEach(pane => pane?.classList.remove('active-primary-pane'));
    if (primaryPanes[tabId]) primaryPanes[tabId].classList.add('active-primary-pane');
    primaryBtns.forEach(btn => {
      btn.classList.remove('active-primary');
      if ((btn.dataset.primary === 'env' && tabId === 'env') ||
          (btn.dataset.primary === 'society' && tabId === 'society') ||
          (btn.dataset.primary === 'agri' && tabId === 'agri')) {
        btn.classList.add('active-primary');
      }
    });
  }
  
  primaryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.primary;
      if (val === 'env') activatePrimary('env');
      else if (val === 'society') activatePrimary('society');
      else if (val === 'agri') activatePrimary('agri');
    });
  });
}

function initSubEnvironmentTabs() {
  const subEnvBtns = document.querySelectorAll('#primary-env .sub-tab-btn');
  const subEnvPanes = {
    climate: document.getElementById('sub-climate'),
    ghg: document.getElementById('sub-ghg'),
    modeling: document.getElementById('sub-modeling'),
    gisdb: document.getElementById('sub-gisdb')
  };
  
  function activateSubEnv(subId) {
    Object.values(subEnvPanes).forEach(pane => pane?.classList.remove('active-sub-pane'));
    if (subEnvPanes[subId]) subEnvPanes[subId].classList.add('active-sub-pane');
    subEnvBtns.forEach(btn => {
      btn.classList.remove('active-sub');
      if (btn.dataset.sub === subId) btn.classList.add('active-sub');
    });
  }
  
  subEnvBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const subVal = btn.dataset.sub;
      if (subVal === 'climate') activateSubEnv('climate');
      else if (subVal === 'ghg') activateSubEnv('ghg');
      else if (subVal === 'modeling') activateSubEnv('modeling');
      else if (subVal === 'gisdb') activateSubEnv('gisdb');
    });
  });
}

function initSubAgricultureTabs() {
  const subAgriBtns = document.querySelectorAll('#primary-agri .sub-tab-btn');
  const subAgriPanes = {
    'high-tech': document.getElementById('sub-hightech'),
    'production': document.getElementById('sub-production')
  };
  
  function activateSubAgri(subId) {
    Object.values(subAgriPanes).forEach(pane => pane?.classList.remove('active-sub-pane'));
    if (subAgriPanes[subId]) subAgriPanes[subId].classList.add('active-sub-pane');
    subAgriBtns.forEach(btn => {
      btn.classList.remove('active-sub');
      if (btn.dataset.subAgri === subId) btn.classList.add('active-sub');
    });
  }
  
  subAgriBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const subVal = btn.dataset.subAgri;
      if (subVal === 'high-tech') activateSubAgri('high-tech');
      else if (subVal === 'production') activateSubAgri('production');
    });
  });
}

function initApp() {
  console.log('🚀 App đã khởi động!');
  renderEnvironment();
  renderSociety();
  renderAgriculture();
  renderFooter();
  initPrimaryTabs();
  initSubEnvironmentTabs();
  initSubAgricultureTabs();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}