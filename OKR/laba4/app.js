const routes = {
  '#catalog' : catalog
  
};

const rootDiv = document.getElementById('root');

if(testABInt(window.location.hash)){
  rootDiv.innerHTML = pageDetailed(window.location.hash);
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
  if(testABInt(window.location.hash)){
    rootDiv.innerHTML = pageDetailed(window.location.hash);
  }
  else{
    rootDiv.innerHTML = routes[window.location.hash];
  }
}

function pageDetailed(lel){
  lel = lel.replace(/\D/g,'');
  let base = JSON.parse(sessionStorage.getItem("productList"))||[];
  let needed = base[lel - 1];
  let uwu;
  uwu += `<div style = "display: grid; grid-template-columns: repeat(2, 1fr); grid-column-gap: 10px;"><div><img src = '` + needed.images + `' class='d-block user-select-none' style = "margin-left: 10px; min-width: 400px;"  aria-label='Placeholder: Image cap' focusable='false' role='img' preserveAspectRatio='xMidYMid slice' viewBox='0 0 318 180' style='font-size:1.125rem;text-anchor:middle'></div><div><h1>` +needed.productName + `</h1><p>`+ needed.productDescription +`</p><h4>` + needed.weight + ` гр</h4><h3>` + needed.price + ` грн</h3><button type='button' class='btn btn-danger' onclick='add_to_cart(` + needed.id +  `);'>В Корзину</button></div></div>`;
  return uwu;
}

function add_to_cart(id){
  let base = JSON.parse(sessionStorage.getItem("productList"))||[];
  let arrayNum = [];
  base.forEach(element => {
    arrayNum.push(0);
  });

  
  if (localStorage.getItem("cart") != null) {
    arrayNum = JSON.parse(localStorage.getItem("cart"))||[];
  }
  
  arrayNum[id - 1] += 1;
  localStorage.setItem("cart", arrayNum);
  updateCartCount();
}
function updateCartCount(){
  base = JSON.parse(localStorage.getItem("cart"))||[];
  let count = base.reduce((a,b) => a+b, 0);
  document.getElementById('cart-count').innerHTML = count;
}