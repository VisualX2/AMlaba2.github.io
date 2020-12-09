

const routes = {
  '#catalog' : catalog
  
};
window.onload = getDataCatalog();
const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.hash];

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

async function getDataCatalog() {
  let products = await fetch("https://my-json-server.typicode.com/VisualX2/OKRLABA4/products").then(response => response.json());
  products = JSON.stringify(products);
  sessionStorage.setItem("productList", products);
}

function pageDetailed(lel){
  lel = lel.replace(/\D/g,'');
  let base = JSON.parse(sessionStorage.getItem("productList"))||[];
  let needed = base[lel - 1];
  let uwu;
  uwu += `<div style = "display: grid; grid-template-columns: repeat(2, 1fr); grid-column-gap: 10px;"><img src = '` + needed.images + `' class='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image cap' focusable='false' role='img' preserveAspectRatio='xMidYMid slice' viewBox='0 0 318 180' style='font-size:1.125rem;text-anchor:middle'></div>`;
  return uwu;
}