(function() {
  const cartInfo = document.getElementById('cart-info')
  const cart = document.getElementById('cart')

  cartInfo.addEventListener('click', function(e) {
    cart.classList.toggle('show-cart')
  })
})();

(function() {
  const cartBtns = document.querySelectorAll('.store-item-icon')

  cartBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      if(e.target.parentElement.classList.contains('store-item-icon')) {
        let fullPath = e.target.parentElement.previousElementSibling.src;
        let pathPosition = fullPath.indexOf('img') + 3;
        let imgPath = fullPath.slice(pathPosition);

        const item = {};
        item.img = `img-cart${imgPath}`;

        let itemName = e.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
        item.name = itemName;

        let itemPrice = e.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
        item.price = Number(itemPrice.slice(1).trim());

        // console.log(item)

        const cartItem = document.createElement('div');
        cartItem.classList.add(`cart-item`,
          `d-flex`,
          `justify-content-between`,
          `text-capitalize`,
          `my-3`
        );

        cartItem.innerHTML = `
          <img src=${item.img} class="img-fluid rounded-circle" id="item-img" alt="">
          <div class="item-text">
            <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
            <span>$</span>
            <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
          </div>
          <a href="#" id='cart-item-remove' class="cart-item-remove">
            <i class="fas fa-trash"></i>
          </a>
        `

        const cart = document.getElementById('cart');
        const total = document.querySelector('.cart-total-container');

        cart.insertBefore(cartItem, total);
        alert('item added to cart');

        showTotal();
      }
    });
  });

  function showTotal() {
    const total = [];
    const items = document.querySelectorAll('.cart-item-price');

    items.forEach(function(item) {
      total.push(parseFloat(item.textContent));
    })

    let totalMoney = total.reduce((total,item) => total + item, 0).toFixed(2);

    document.getElementById('cart-total').textContent = totalMoney;
    document.getElementById('item-count').textContent = total.length;
    document.querySelector('.item-total').textContent = totalMoney;
  }
})();