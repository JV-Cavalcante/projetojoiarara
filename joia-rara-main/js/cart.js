// GERENCIA O CARRINHO
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ATUALIZA O CARRINHO NA PÁGINA
function updateCartDisplay() {
  const cartItemsEl = document.getElementById('cartItems');
  if (!cartItemsEl) return;

  let html = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    html += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h4>${item.name}</h4>
          <p>R$ ${item.price.toFixed(2)}</p>
          <div class="quantity-control">
            <button onclick="changeQuantity(${index}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${index}, 1)">+</button>
          </div>
        </div>
        <button onclick="removeItem(${index})">
          <i class="fa fa-trash"></i>
        </button>
      </div>
    `;
  });

  cartItemsEl.innerHTML = html || '<p>Seu carrinho está vazio</p>';
  document.getElementById('cartTotal').textContent = total.toFixed(2);
}

// FUNÇÕES AUXILIARES
function changeQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity < 1) cart.splice(index, 1);
  saveCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
  updateCartCounter();
}

// ATUALIZA CONTADOR NO MENU
function updateCartCounter() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-counter').forEach(el => {
    el.textContent = totalItems;
  });
}

// BOTÕES "ADICIONAR AO CARRINHO"
document.addEventListener('DOMContentLoaded', function() {
  updateCartDisplay();
  updateCartCounter();

  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function() {
      const product = {
        name: this.getAttribute('data-product'),
        price: parseFloat(this.getAttribute('data-price')),
        image: this.getAttribute('data-image'),
        quantity: 1
      };

      const existing = cart.find(item => item.name === product.name);
      if (existing) existing.quantity++;
      else cart.push(product);

      saveCart();
      this.innerHTML = '<i class="fa fa-check"></i> Adicionado!';
      setTimeout(() => {
        this.innerHTML = '<i class="fa fa-shopping-cart"></i> Adicionar';
      }, 2000);
    });
  });
});