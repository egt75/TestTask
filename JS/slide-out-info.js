document.getElementById('newsletterToggle').addEventListener('click', function() {
  const container = document.querySelector('.accordion-container');
  const toggleButton = this;
  
  toggleButton.classList.toggle('rotated');
  
  if (container.style.maxHeight) {
    container.style.maxHeight = null;
  } else {
    const contents = document.querySelectorAll('.accordion-content');
    let totalHeight = 0;
    contents.forEach(content => {
      totalHeight += content.offsetHeight;
    });
    container.style.maxHeight = totalHeight + 'px';
  }
});
