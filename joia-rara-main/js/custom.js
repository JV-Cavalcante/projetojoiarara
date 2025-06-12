// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})



document.addEventListener('DOMContentLoaded', function() {
  // Carrinho (armazenado no localStorage)
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Botões "Adicionar ao Carrinho"
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
      const product = {
        name: this.getAttribute('data-product'),
        price: parseFloat(this.getAttribute('data-price')),
        image: this.getAttribute('data-image'),
        quantity: 1
      };
      
      // Verifica se o produto já está no carrinho
      const existingItem = cart.find(item => item.name === product.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push(product);
      }
      
      // Atualiza o localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
      
      // Feedback visual
      this.innerHTML = '<i class="fa fa-check"></i> Adicionado!';
      setTimeout(() => {
        this.innerHTML = '<i class="fa fa-shopping-cart"></i> Adicionar';
      }, 1500);
    });
  });
  
  // Link do carrinho no menu
  document.querySelector('.fa-shopping-bag').closest('a').href = 'cart/index.html';
});

