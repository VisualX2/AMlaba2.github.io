let base = JSON.parse(sessionStorage.getItem("productList"))||[];
let catalog = `
<h1>I am About Page.</h1>
<div class = "jumbotron">
<h1>Basic pizza</h1>
<div id = "first_category" style = "display: grid; grid-template-columns: repeat(4, 1fr); grid-column-gap: 10px;">
`
build_category(base.filter(element => element.categoryId ==1)||[]);
function build_category(uwu){
    uwu.forEach (element => {
        catalog += `<div class = "card border-secondary mb-3" style = "width: 350px;">`
    
        catalog += "<div class = 'card-body'><h5 class = 'card-title'>" + element.productName + "</h5></div>";
        catalog += `<img src = '` + element.images + `' onclick="return location.href = '#catalog/`+ element.id +`'" class='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image cap' focusable='false' role='img' preserveAspectRatio='xMidYMid slice' viewBox='0 0 318 180' style='font-size:1.125rem;text-anchor:middle'>`;
        catalog += "<div class = 'card-body'><p class='card-text'>" + element.productDescription + "</p></div>";
        catalog += "<div class = 'card-body'><h2>" + element.price + " грн.</h2><p>" + element.weight + " г.</p><h6></div>"
        catalog += "<button type='button' class='btn btn-danger' onclick='add_to_cart(" + element.id +  "_pizza);'>В Корзину</button></div>"
            
    });
}
catalog += `</div>
<h1>Classic pizza</h1>
<div id = "second_category" style = "display: grid; grid-template-columns: repeat(4, 1fr); grid-column-gap: 10px;">
`
build_category(base.filter(element => element.categoryId ==2)||[]);
catalog += `</div>
<h1>Delux pizza</h1>
<div id = "third_category" style = "display: grid; grid-template-columns: repeat(4, 1fr); grid-column-gap: 10px;">
`
build_category(base.filter(element => element.categoryId ==3)||[]);
catalog += `</div>
<h1>Snacks</h1>
<div id = "fourth_category" style = "display: grid; grid-template-columns: repeat(4, 1fr); grid-column-gap: 10px;">
`
build_category(base.filter(element => element.categoryId ==4)||[]);
catalog += `</div>
<h1>Drinks</h1>
<div id = "fifth_category" style = "display: grid; grid-template-columns: repeat(4, 1fr); grid-column-gap: 10px;">
`
build_category(base.filter(element => element.categoryId ==5)||[]);
