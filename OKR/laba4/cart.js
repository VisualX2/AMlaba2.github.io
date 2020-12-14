
let cart = `
<div class="card border-primary mb-3" style="max-width: 20rem;">
  <div class="card-header">Header</div>
  <div class="order-display__order">
`

function build_cart(){
    let base = JSON.parse(sessionStorage.getItem("productList"))||[];
    let arrayNum = JSON.parse(localStorage.getItem("cart"))||[];
    let currentArray = [];
    base.forEach (element => {
        if (arrayNum[element.id - 1] !== "0"){
            currentArray = base[arrayNum.indexOf(element)];
            cart += `<div class=".order__main-info"><div class="order__logo"><img src="`+element.images+`" alt=""></div>
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
        </div>`;
        }
        

    });
}
