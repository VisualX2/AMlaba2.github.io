const routes = {
  '#catalog' : catalog,
  '#actions' : actions,
  '': main,
  '#':main
};
window.onload = updateCartCount();
const rootDiv = document.getElementById('root');

if(testABInt(window.location.hash) && window.location.hash.split("/")[0] === "#catalog"){
  rootDiv.innerHTML = pageDetailed(window.location.hash);
}
else if(testABInt(window.location.hash) && window.location.hash.split("/")[0] === "#actions"){
  rootDiv.innerHTML = pageDetailedAction(window.location.hash);
}
else if (window.location.hash === "#cart"){
  rootDiv.innerHTML = build_cart();
}
else{
  rootDiv.innerHTML = routes[window.location.hash];
}
function testABInt(string)
{
    var match = string.match(/[0-9]$/);
    return match ? match[0] : '';
}
window.onpopstate = () => {
  if(testABInt(window.location.hash) && window.location.hash.split("/")[0] === "#catalog"){
    rootDiv.innerHTML = pageDetailed(window.location.hash);
  }
  else if(testABInt(window.location.hash) && window.location.hash.split("/")[0] === "#actions"){
    rootDiv.innerHTML = pageDetailedAction(window.location.hash);
  }
  else if (window.location.hash === "#cart"){
    rootDiv.innerHTML = build_cart();
  }
  else{
    rootDiv.innerHTML = routes[window.location.hash];
  }
}
async function setData(order){

  return await fetch(`https://my-json-server.typicode.com/VisualX2/OKRLABA4/offers`,{
      method: 'POST',
      body: JSON.stringify(order)
  }).then(response => {
      if(response.ok){
        console.log("yay")
          return response.json()}
      else{
          window.location.hash = "error"
      }
  })
  }


function pageDetailed(lel){
  lel = lel.replace(/\D/g,'');
  let base = JSON.parse(sessionStorage.getItem("productList"))||[];
  let needed = base[lel - 1];
  let uwu;
  uwu += `<div style = "display: grid; grid-template-columns: repeat(2, 1fr); grid-column-gap: 10px;"><div><img src = '` + needed.images + `' class='d-block user-select-none' style = "margin-left: 10px; min-width: 400px;"  aria-label='Placeholder: Image cap' focusable='false' role='img' preserveAspectRatio='xMidYMid slice' viewBox='0 0 318 180' style='font-size:1.125rem;text-anchor:middle'></div><div><h1>` +needed.productName + `</h1><p>`+ needed.productDescription +`</p><h4>` + needed.weight + ` гр</h4><h3>` + needed.price + ` грн</h3><button type='button' class='btn btn-danger' onclick='add_to_cart(` + needed.id +  `);'>В Корзину</button></div></div>`;
  return uwu;
}
function pageDetailedAction(lel){
  lel = lel.replace(/\D/g,'');
  let base = JSON.parse(sessionStorage.getItem("actionList"))||[];
  let needed = base[lel - 1];
  let uwu;
  uwu += `<div style = "display: grid; grid-template-columns: repeat(2, 1fr); grid-column-gap: 10px;"><div><img src = '` + needed.images + `' class='d-block user-select-none' style = "margin-left: 10px; min-width: 400px;"  aria-label='Placeholder: Image cap' focusable='false' role='img' preserveAspectRatio='xMidYMid slice' viewBox='0 0 318 180' style='font-size:1.125rem;text-anchor:middle'></div><div><h1>` +needed.actionName + `</h1><p>`+ needed.actionDescription +`</p></div></div>`;
  return uwu;
}

function add_to_cart(id){
  let base = JSON.parse(sessionStorage.getItem("productList"))||[];
  let arrayNum = [];
  if (localStorage.getItem("cart") === null) {
  base.forEach(element => {
    arrayNum.push(0);
  });
  }
  else {
  
  
    arrayNum = JSON.parse(localStorage.getItem("cart"))||[];
  }
  
  arrayNum[id - 1] += 1;
  localStorage.setItem("cart", JSON.stringify(arrayNum));
  updateCartCount();
}
function updateCartCount(){
  let base = [];
  base = JSON.parse(localStorage.getItem("cart"))||[];
  let count = base.reduce((a,b) => a+b, 0);
  document.getElementById('cart-count').innerHTML = count;
}
function build_cart(){
  let cart = `
  <div class="cart">
  <div class="card border-primary mb-3">
    <div class="card-header">Header</div>
    <div class="order-display__order">
  `
  let base = JSON.parse(sessionStorage.getItem("productList"))||[];
  let arrayNum = JSON.parse(localStorage.getItem("cart"))||[];
  let currentArray = [];
  base.forEach (element => {
      if (arrayNum[element.id - 1] !== 0){
          currentArray = base[arrayNum.indexOf(element)];
          cart += `<div class="order__main-info"><div class="order__logo"><img src="`+element.images+`" width="150px" alt=""></div>
          <div class="order__description">
          <div class="order__information">
          
          <h3>`+ element.productName +`</h3>
          
          <p>` + element.productDescription + `</p>
          <div class="order__size">
              Стандарт
          </div>
          </div>
          <div class="order__buy" id="pizzas.5">
              <div class="order__price">`+ element.price +`</div>
              <div class="order__amount-plus-minus">
              <div class="order__amount-minus" onclick = "decrease(`+ element.id +`)">-</div>
              <div class="order__amount">`+arrayNum[element.id - 1]+`
              </div>
              <div class="order__amount-plus"onclick = "increase(`+ element.id +`)">+</div>
              </div>
          </div>
      </div></div>`;
      }
      
      
  });
  cart += `</div></div><div><form class="order__registration-blank">
      <h2>Оформление заказа</h2>
      <div class="form_cart">

          <input type="text" class="form-control" id="name" placeholder="Имя" required="" pattern="([A-Za-z]|[А-Яа-я]|[ ]){2,20}">
          <input type="text" class="form-control" id="number" placeholder="Телефон (пр. 0964772430)" required="" pattern="[0]{1}[0-9]{9}">
          <input type="text" class="form-control" id="email" placeholder="E-mail (example@gmail.com)" required="" pattern="([A-Za-z]|[0-9]){4,20}[@]{1}[a-z]{3,10}[.]{1}[a-z]{2,5}">

    

          <input type="text" class="form-control" id="city" placeholder="Город" required="" pattern="([A-Za-z]|[А-Яа-я]|[А-Яа-а]|[ ]){4,20}">
          <input type="text" class="form-control" id="street" placeholder="Улица" required="" pattern="([A-Za-z]|[А-Яа-я]|[1-9]|[ ]){4,20}">
          <input type="text" class="form-control" id="house" placeholder="Дом" required="" pattern="[1-9]{1,3}">
          <input type="text" class="form-control" id="flat" placeholder="Квартира (необяз.)" pattern="[1-9]{1,4}">
              <input type="text" class="form-control" id="entrance" placeholder="Подъезд (необяз.)" pattern="[1-9]{1,2}">

      
              <input type="text" class="form-control" id="date" placeholder="Дата (дд.мм)" required="" pattern="[0-9]{2}[.]{1}[0-9]{2}">
              <input type="text" class="form-control" id="time" placeholder="Время (чч:мм)" required="" pattern="[0-9]{2}[:]{1}[0-9]{2}">

      </div>
      <div class="_payment">
          <h2 class="pay-title">Оплата</h2>
          <select class="custom-select" id = "payment_select">
          <option>Наличные</option>
          <option>Карта</option>
          </select>
      </div>
      <div ><button type="submit" class="btn btn-danger" onclick = "SendOrder()">Заказать</button></div>

  </form></div></div>`
  return cart;
}

function increase(id){
  let arrayNum = JSON.parse(localStorage.getItem("cart"))||[];
  arrayNum[id - 1] += 1;
  localStorage.setItem("cart", JSON.stringify(arrayNum));
  updateCartCount();
  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = build_cart();
  
}
function decrease(id){
  let arrayNum = JSON.parse(localStorage.getItem("cart"))||[];
  arrayNum[id - 1] -= 1;
  localStorage.setItem("cart", JSON.stringify(arrayNum));
  updateCartCount();
  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = build_cart();
}
function SendOrder(){
  let order = {
    cart:localStorage.getItem("cart"),
    name:document.getElementById("name").value,
    number:document.getElementById("number").value,
    email:document.getElementById("email").value,
    city:document.getElementById("city").value,
    street:document.getElementById("street").value,
    house:document.getElementById("house").value,
    flat:document.getElementById("flat").value,
    entrance:document.getElementById("entrance").value,
    date:document.getElementById("date").value,
    time:document.getElementById("time").value,
    payment_select:document.getElementById("payment_select").value
  };
  setData(order);
  window.location.hash = "#order"
  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = orderCreated(order);
  localStorage.clear();
}

function orderCreated(order){
  let cart = `
  <div class="cart">
  <div class="card border-primary mb-3">
    <div class="card-header">Header</div>
    <div class="order-display__order">
  `
  let base = JSON.parse(sessionStorage.getItem("productList"))||[];
  let arrayNum = JSON.parse(localStorage.getItem("cart"))||[];
  let currentArray = [];
  base.forEach (element => {
      if (arrayNum[element.id - 1] !== 0){
          currentArray = base[arrayNum.indexOf(element)];
          cart += `<div class="order__main-info"><div class="order__logo"><img src="`+element.images+`" width="150px" alt=""></div>
          <div class="order__description">
          <div class="order__information">
          
          <h3>`+ element.productName +`</h3>
          
          <p>` + element.productDescription + `</p>
          <div class="order__size">
              Стандарт
          </div>
          </div>
          <div class="order__buy" id="pizzas.5">
              <div class="order__price">`+ element.price +`</div>
              <div class="order__amount-plus-minus">
              <div class="order__amount">`+arrayNum[element.id - 1]+`
              </div>
              </div>
          </div>
      </div></div>`;
      }
      
      
  });
  cart += `</div></div><div>
  <p>Cart:`+order.cart+`</p>
  <p>Name:`+order.name+`</p>
  <p>Number:`+order.number+`</p>
  <p>Email:`+order.email+`</p>
  <p>City:`+order.city+`</p>
  <p>Street:`+order.street+`</p>
  <p>House:`+order.house+`</p>
  <p>Flat:`+order.flat+`</p>
  <p>Entrance:`+order.entrance+`</p>
  <p>Date:`+order.date+`</p>
  <p>Time:`+order.time+`</p>
  <p>Payment:`+order.payment_select+`</p>
  </div></div>`
  return cart;
}
