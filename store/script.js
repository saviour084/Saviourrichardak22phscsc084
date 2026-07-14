let cart = [];

const productGrid = document.getElementById('productGrid');
const cartList = document.getElementById('cartList');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutForm = document.getElementById('checkoutForm');
const confirmOrderBtn = document.getElementById('confirmOrderBtn');

productGrid.addEventListener('click', function (e) {
  if (e.target.classList.contains('add-btn')) {
    const name = e.target.getAttribute('data-name');
    const price = parseInt(e.target.getAttribute('data-price'));
    cart.push({ name: name, price: price });
    renderCart();
  }
});

function renderCart() {
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach(function (item, index) {
    total += item.price;
    const li = document.createElement('li');
    li.innerHTML = item.name + ' - ₦' + item.price.toLocaleString() +
      ' <button onclick="removeItem(' + index + ')">Remove</button>';
    cartList.appendChild(li);
  });

  cartTotal.textContent = total.toLocaleString();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

checkoutBtn.addEventListener('click', function () {
  if (cart.length === 0) {
    alert('Your cart is empty. Add a product first.');
    return;
  }
  checkoutForm.classList.remove('hidden');
  checkoutForm.scrollIntoView({ behavior: 'smooth' });
});

confirmOrderBtn.addEventListener('click', function () {
  const name = document.getElementById('custName').value;
  const phone = document.getElementById('custPhone').value;
  const address = document.getElementById('custAddress').value;

  if (!name || !phone || !address) {
    alert('Please fill in all fields.');
    return;
  }

  let orderSummary = 'Order for ' + name + '%0APhone: ' + phone +
    '%0AAddress: ' + address + '%0A%0AItems:%0A';

  cart.forEach(function (item) {
    orderSummary += item.name + ' - ₦' + item.price.toLocaleString() + '%0A';
  });

  orderSummary += '%0ATotal: ₦' + cartTotal.textContent;

  const whatsappNumber = '2349161718660'; // replace with your real WhatsApp number
  const url = 'https://wa.me/' + whatsappNumber + '?text=' + orderSummary;
  window.open(url, '_blank');
});