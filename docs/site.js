const previewDialog = document.querySelector('.image-dialog');
if (previewDialog && typeof previewDialog.showModal === 'function') {
  const image = previewDialog.querySelector('.dialog-image');
  const title = document.querySelector('#preview-dialog-title');
  document.querySelectorAll('[data-preview]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      image.src = link.href;
      image.alt = `${link.dataset.title} - illustrative promotional preview`;
      title.textContent = link.dataset.title;
      previewDialog.showModal();
    });
  });
  previewDialog.addEventListener('click', event => {
    const bounds = previewDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      previewDialog.close();
    }
  });
}
