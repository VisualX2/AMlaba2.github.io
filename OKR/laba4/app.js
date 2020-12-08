

const routes = {
  '#catalog' : catalog
  
};
getDataCatalog();
const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.hash];


window.onpopstate = () => {
  if(window.location.hash.endsWith(/[0-9]$/)){
    rootDiv.innerHTML = "DICK";
  }
  else{
    rootDiv.innerHTML = routes[window.location.hash];
  }
}

async function getDataCatalog() {
  let products = await fetch("https://my-json-server.typicode.com/VisualX2/OKRLABA4/products").then(response => response.json());
  products = JSON.stringify(products);
  sessionStorage.setItem("productList", products);
}