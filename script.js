document.addEventListener('DOMContentLoaded', () => {
  const scrollButton = document.getElementById('ToTitle');
  const titleInput = document.getElementById('noteTitle');

  if (scrollButton && titleInput) {
    scrollButton.addEventListener('click', () => {
      titleInput.focus();
      titleInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
});
