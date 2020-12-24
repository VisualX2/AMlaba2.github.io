async function getDataCatalog() {
    let products = await fetch("https://my-json-server.typicode.com/VisualX2/OKRLABA4/products").then(response => response.json());
    products = JSON.stringify(products);
    sessionStorage.setItem("productList", products);
    let actions = await fetch("https://my-json-server.typicode.com/VisualX2/OKRLABA4/actions").then(response => response.json());
    actions = JSON.stringify(actions);
    sessionStorage.setItem("actionList", actions);
    window.location.reload();
}
async function getDataCatalog_WR() {
    let products = await fetch("https://my-json-server.typicode.com/VisualX2/OKRLABA4/products").then(response => response.json());
    products = JSON.stringify(products);
    sessionStorage.setItem("productList", products);
    let actions = await fetch("https://my-json-server.typicode.com/VisualX2/OKRLABA4/actions").then(response => response.json());
    actions = JSON.stringify(actions);
    sessionStorage.setItem("actionList", actions);
}
export function loadPage(){
if(sessionStorage.getItem("productList") === null || sessionStorage.getItem("actionList") === null ){
    getDataCatalog();
    
} 
else{
  getDataCatalog_WR();
}
}
export function load_cart()
{
  if(localStorage.getItem("cart") !== null){
      document.location.href = '#cart'
  }
}