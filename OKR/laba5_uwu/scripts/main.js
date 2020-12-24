export function generateMain() {
    let basema = JSON.parse(sessionStorage.getItem("productList")) || [];
    let baseacma = JSON.parse(sessionStorage.getItem("actionList")) || [];
    let main = `
<h1>MAIN</h1>
<div class = "jumbotron">
<h1>Actions</h1>
<div id = "actions" class = "pizzas_category">
`
    baseacma.forEach(element => {
        main += `<div class = "card border-secondary mb-3" style = "width: 350px;">`

        main += "<div class = 'card-body'><h5 class = 'card-title'>" + element.actionName + "</h5></div>";
        main += `<img src = '` + element.images + `' onclick="return location.href = '#actions/` + element.id + `'" class='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image cap' focusable='false' role='img' preserveAspectRatio='xMidYMid slice' viewBox='0 0 318 180' style='font-size:1.125rem;text-anchor:middle'>`;
        main += "<div class = 'card-body'><p class='card-text'>" + element.actionDescription + "</p></div>";
        main += `<button type='button' class='btn btn-danger' onclick="return location.href = '#actions/` + element.id + `'">Details</button></div>`

    });

    main += `</div>
<h1>Best pizza</h1>
<div id = "best_pizza" class = "pizzas_category">
`
main += build_category_main(basema.filter(element => element.recommended == true) || []);
    return main;
}
export function build_category_main(uwu) {
    let main = " ";
    uwu.forEach(element => {
        main += `<div class = "card border-secondary mb-3" style = "width: 350px;">`

        main += "<div class = 'card-body'><h5 class = 'card-title'>" + element.productName + "</h5></div>";
        main += `<img src = '` + element.images + `' onclick="return location.href = '#catalog/` + element.id + `'" class='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image cap' focusable='false' role='img' preserveAspectRatio='xMidYMid slice' viewBox='0 0 318 180' style='font-size:1.125rem;text-anchor:middle'>`;
        main += "<div class = 'card-body'><p class='card-text'>" + element.productDescription + "</p></div>";
        main += "<div class = 'card-body'><h2>" + element.price + " грн.</h2><p>" + element.weight + " г.</p><h6></div>"
        main += "<button type='button' class='btn btn-danger btn-add-to-cart' tovarNum='" + element.id + "'>В Корзину</button></div>"

    });
    return main;
}