/* ==========================================================================
   Contact Page — pre-fill requested service from query string
   ========================================================================== */

function initServicePrefill() {
  const params = new URLSearchParams(window.location.search);
  const service = params.get('service');
  if (!service) return;

  const select = document.getElementById('service-select');
  const notice = document.getElementById('form-notice');
  const noticeText = document.getElementById('form-notice-text');

  if (select) {
    const options = Array.from(select.options);
    const match = options.find(opt => opt.value === service);
    if (match) {
      select.value = service;
    }
  }

  if (notice && noticeText) {
    noticeText.textContent = service;
    notice.classList.add('is-active');
  }
}

function initSentNotice() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('sent') !== 'true') return;

  const banner = document.getElementById('form-sent');
  if (!banner) return;
  banner.classList.add('is-active');
  banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

document.addEventListener('DOMContentLoaded', () => {
  initServicePrefill();
  initSentNotice();
});