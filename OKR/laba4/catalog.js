let base = JSON.parse(sessionStorage.getItem("productList"))||[]
let catalog = `
<h1>I am About Page.</h1>
<div class = "jumbotron">
<h1>Basic pizza</h1>
<div id = "first_category" style = "display: grid; grid-template-columns: repeat(4, 1fr); grid-column-gap: 10px;">
`
let first_category = base.filter(element => element.categoryId ==1)||[];
first_category.forEach (element => {
    catalog += `<div class = "card border-secondary mb-3" style = "width: 350px;">`

    catalog += "<div class = 'card-body'><h5 class = 'card-title'>" + element.productName + "</h5></div>";
    catalog += "<img src = '" + element.images[0] + "' class='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image cap' focusable='false' role='img' preserveAspectRatio='xMidYMid slice' viewBox='0 0 318 180' style='font-size:1.125rem;text-anchor:middle'>";
    catalog += "<div class = 'card-body'><p class='card-text'>" + element.productDescription + "</p></div>";
    catalog += "<div class = 'card-body'><h2>" + element.price + " грн.</h2><p>" + element.weight + " г.</p><h6></div>"
    catalog += "<button type='button' class='btn btn-danger' onclick='add_to_cart(" + element.id + ", " + countPizza + "," + finalPrice + ");'>В Корзину</button></div>"
        
});
async function getDataCatalog() {

        let products = await fetch("https://my-json-server.typicode.com/VisualX2/OKRLABA4/products").then(response => response.json());
        products = JSON.stringify(products);
        sessionStorage.pizzaList = products;
}

function createCatalog() {
    getDataCatalog();
    let catalogFetched = JSON.parse(sessionStorage.pizzaList)||[];
    let firstCategory = [];
    let secondCategory = [];
    let thirdCategory = [];
    let fourthCategory = [];
    let fifthCategory = [];
    console.log(catalogFetched);
    catalogFetched.forEach(element => {
        if (element.categoryId == 1) {
            firstCategory.push(element);
        }
        else if (element.categoryId == 2) {
            secondCategory.push(element);
        }
        else if (element.categoryId == 3) {
            thirdCategory.push(element);
        }
        else if (element.categoryId == 4) {
            fourthCategory.push(element);
        }
        else if (element.categoryId == 5) {
            fifthCategory.push(element);
        }
    });
    console.log(firstCategory);
    console.log(secondCategory);
    console.log(thirdCategory);
    console.log(fourthCategory);
    console.log(fifthCategory);
    generateCatalogPage(firstCategory, secondCategory, thirdCategory, fourthCategory, fifthCategory);
}

function generateCatalogPage(f, s, t, fo, fi) {
    generateCategory(f);
    generateCategory(s);
    generateCategory(t);
    generateCategory(fo);
    generateCategory(fi);
}
function generateCategory(f) {

    let bigUWU = document.createElement("div");
    bigUWU.setAttribute("class", "jumbotron");
    let evenBiggerUwU = document.createElement("div");

    if (f[0].categoryId == 1) {
        evenBiggerUwU.setAttribute("id", "first_category");
        evenBiggerUwU.setAttribute("style", "display: grid; grid-template-columns: repeat(4, 1fr); grid-column-gap: 10px;");
        bigUWU.innerHTML += "<h1>Basic pizza</h1>";
    }
    else if (f[0].categoryId == 2) {
        evenBiggerUwU.setAttribute("id", "second_category");
        evenBiggerUwU.setAttribute("style", "display: grid; grid-template-columns: repeat(4, 1fr); grid-column-gap: 10px;");
        bigUWU.innerHTML += "<h1>Classic pizza</h1>";
    }
    else if (f[0].categoryId == 3) {
        evenBiggerUwU.setAttribute("id", "third_category");
        evenBiggerUwU.setAttribute("style", "display: grid; grid-template-columns: repeat(4, 1fr); grid-column-gap: 10px;");
        bigUWU.innerHTML += "<h1>Delux pizza</h1>";
    }
    else if (f[0].categoryId == 4) {
        evenBiggerUwU.setAttribute("id", "fourth_category");
        evenBiggerUwU.setAttribute("style", "display: grid; grid-template-columns: repeat(4, 1fr); grid-column-gap: 10px;");
        bigUWU.innerHTML += "<h1>Snacks</h1>";
    }
    else if (f[0].categoryId == 5) {
        evenBiggerUwU.setAttribute("id", "fifth_category");
        evenBiggerUwU.setAttribute("style", "display: grid; grid-template-columns: repeat(4, 1fr); grid-column-gap: 10px;");
        bigUWU.innerHTML += "<h1>Drinks</h1>";
    }
    bigUWU.appendChild(evenBiggerUwU);


    f.forEach(element => {

        let card = document.createElement("div");
        card.setAttribute("class", "card border-secondary mb-3");
        card.setAttribute("style", "width: 350px;");
        let countPizza = 1;
        let finalPrice = element.price * countPizza;
        card.innerHTML += "<div class = 'card-body'><h5 class = 'card-title'>" + element.productName + "</h5></div>";
        card.innerHTML += "<img src = '" + element.images[0] + "' class='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image cap' focusable='false' role='img' preserveAspectRatio='xMidYMid slice' viewBox='0 0 318 180' style='font-size:1.125rem;text-anchor:middle'>";
        card.innerHTML += "<div class = 'card-body'><p class='card-text'>" + element.productDescription + "</p></div>";
        card.innerHTML += "<div class = 'card-body'><h2>" + element.price + " грн.</h2><p>" + element.weight + " г.</p><h6></div>"
        card.innerHTML += "<button type='button' class='btn btn-danger' onclick='add_to_cart(" + element.id + ", " + countPizza + "," + finalPrice + ");'>В Корзину</button>"
        evenBiggerUwU.appendChild(card);

    });
    let OwO = document.getElementById("owo");
    OwO.appendChild(bigUWU);
    catalog += "dick"
}
