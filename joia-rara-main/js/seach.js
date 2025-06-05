// assets/js/search.js
document.addEventListener('DOMContentLoaded', function() {
    const searchToggle = document.getElementById('searchToggle');
    const searchBox = document.getElementById('searchBox');
    
    if (searchToggle && searchBox) { // Verifica se os elementos existem
      searchToggle.addEventListener('click', function(e) {
        e.preventDefault();
        searchBox.classList.toggle('active');
        
        // Foca no input quando aberto
        if (searchBox.classList.contains('active')) {
          searchBox.querySelector('input').focus();
        }
      });
  
      // Fechar ao clicar fora (opcional)
      document.addEventListener('click', function(e) {
        if (!searchToggle.contains(e.target) && !searchBox.contains(e.target)) {
          searchBox.classList.remove('active');
        }
      });
    }
  });