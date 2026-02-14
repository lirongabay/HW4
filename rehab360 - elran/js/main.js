// Global JS (shared)
// Handles UI-only buttons/links by showing a small toast message.

(function () {
  let toastEl = null;
  let toastTimer = null;

  function ensureToast() {
    if (toastEl) return toastEl;
    toastEl = document.createElement('div');
    toastEl.className = 'toast';
    toastEl.setAttribute('role', 'status');
    toastEl.setAttribute('aria-live', 'polite');
    document.body.appendChild(toastEl);
    return toastEl;
  }

  function showToast(message) {
    const el = ensureToast();
    el.textContent = message;
    el.classList.add('toast--show');

    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      el.classList.remove('toast--show');
    }, 2200);
  }

  // 1) Click support for elements marked as UI-only
  document.addEventListener('click', function (e) {
    const target = e.target.closest('[data-ui-only]');
    if (!target) return;

    // Prevent navigation for buttons that look like links.
    if (target.tagName === 'A') e.preventDefault();

    const msg = target.getAttribute('data-tooltip') || 'Not implemented yet.';
    showToast(msg);
  });

  // 2) Allow pages to trigger toast via a custom event
  window.addEventListener('rehab360:toast', function (e) {
    const msg = e.detail && e.detail.message ? e.detail.message : 'Not implemented yet.';
    showToast(msg);
  });
})();
