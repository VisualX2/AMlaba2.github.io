

const routes = {
  '#catalog' : catalog
  
};
getDataCatalog();
const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.hash];

function testABInt(string)
{
    var match = string.match(/ab[0-9]$/);
    return match ? match[0] : '';
}
window.onpopstate = () => {
  if(testABInt(window.location.hash)){
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