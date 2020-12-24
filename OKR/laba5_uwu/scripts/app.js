import * as yay from "./getdata.js";
import * as genM from "./main.js";
import * as genC from "./catalog.js";
import * as genA from "./actions.js";
import * as genDP from "./detailedPizza.js";
import * as genDA from "./detailedAction.js";
import * as genCart from "./cart.js";
window.onload = () => {
  yay.loadPage();
  genCart.updateCartCount();
  route();
}
window.onpopstate = () => {
  genCart.updateCartCount();
  route();

}
document.querySelector('.button-cart').addEventListener('click', event => {
  window.location.href = "#cart";
})

function route() {
  const rootDiv = document.getElementById('root');
  if (testABInt(window.location.hash) && window.location.hash.split("/")[0] === "#catalog") {
    rootDiv.innerHTML = genDP.pageDetailed(window.location.hash);
    document.querySelectorAll('.btn-add-to-cart').forEach(item => {
      item.addEventListener('click', event => {
         genCart.add_to_cart(item.getAttribute("tovarNum")); 
      })
      
  })
  }
  else if (!testABInt(window.location.hash) && window.location.hash.split("/")[0] === "#catalog") {
    rootDiv.innerHTML = genC.generateCatalog();
    document.querySelectorAll('.btn-add-to-cart').forEach(item => {
      item.addEventListener('click', event => {
         genCart.add_to_cart(item.getAttribute("tovarNum")); 
      })
      
  })
  }
  else if (testABInt(window.location.hash) && window.location.hash.split("/")[0] === "#actions") {
    rootDiv.innerHTML = genDA.pageDetailedAction(window.location.hash);
  }
  else if (window.location.hash === "" || window.location.hash === "#") {
    rootDiv.innerHTML = genM.generateMain();
    document.querySelectorAll('.btn-add-to-cart').forEach(item => {
      item.addEventListener('click', event => {
         genCart.add_to_cart(item.getAttribute("tovarNum")); 
      })
      
  })
  }
  else if (!testABInt(window.location.hash) && window.location.hash.split("/")[0] === "#actions") {
    rootDiv.innerHTML = genA.generateActions();
  }
  else if (window.location.hash === "#cart") {
    rootDiv.innerHTML = genCart.build_cart();
  }
  else if (window.location.hash === "#cart") {
    if (localStorage.getItem("cart") === null) {
      window.location.hash = "#";
    }
    else {
      rootDiv.innerHTML = genCart.build_cart();
      
      const form = document.getElementsByTagName('form')[0];
      form.addEventListener('submit', function (event) {


        if (!form.checkValidity()) {

          event.preventDefault();
        }
        else {
          genCart.SendOrder();
        }
      });
    }
  }
}
function testABInt(string) {
  var match = string.match(/[0-9]$/);
  return match ? match[0] : '';
}






