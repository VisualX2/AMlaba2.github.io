
async function getDataCatalog() {
    let products = await fetch("https://my-json-server.typicode.com/VisualX2/OKRLABA4/products").then(response => response.json());
    products = JSON.stringify(products);
    sessionStorage.setItem("productList", products);
  }