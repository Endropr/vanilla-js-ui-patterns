        function searchNews() {
        const query = document.getElementById('searchInput').value.toLowerCase();
        const cards = document.querySelectorAll('.news-card');
        cards.forEach(card => {
          const title = card.querySelector('.news-title').textContent.toLowerCase();
          if (title.includes(query)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      }

      function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const btn = document.getElementById('themeToggleBtn');
        btn.textContent = document.body.classList.contains('dark-theme') ? 'Светлая тема' : 'Тёмная тема';
      }
function closeWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    if (modal) { 
        modal.style.display = 'none';
    }
}

window.addEventListener('load', () => {
    const modal = document.getElementById('welcomeModal');
    if (modal) { 
        modal.style.display = 'flex';
    }
});