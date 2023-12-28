const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoCompra = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardContainer = document.querySelector(".cards-container");


menuEmail.addEventListener('click', ToggleDesktopMenu);
menuBurger.addEventListener('click', ToggleMobileMenu);
carritoCompra.addEventListener('click', ToggleCarritoCompra);


function ToggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");


}


function ToggleMobileMenu() {
    const carritoclosed = carritoCompra.classList.contains("inactive");
    
if (!carritoclosed) {
    aside.classList.add("inactive");

}

    mobileMenu.classList.toggle("inactive");

}

function ToggleCarritoCompra() {
    const mobileClosed = mobileMenu.classList.contains("inactive");
    
    if (!mobileClosed) {
        mobileMenu.classList.add("inactive");
    }

  aside.classList.toggle("inactive");
    


}

const productList = [];

productList.push({ 
    name: 'bici',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({ 
    name: 'tele',
    precio: 320,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({ 
    name: 'compu',
    precio: 450,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

for (const product of productList){

 /*<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>*/


      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
 
      const imagen = document.createElement ("img");
      imagen.setAttribute("src",product.imagen);

      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");

      const productDiv = document.createElement("div");

      const productPrecio = document.createElement("p");
      productPrecio.innerText = "$" + product.precio;

      const productName = document.createElement("p");
      productName.innerText = product.name;

      productDiv.appendChild(productPrecio); 
      productDiv.appendChild(productName);

      const productInfoFigure = document.createElement("Figure");
      const productImgCard = document.createElement("img");
      productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

      productInfoFigure.appendChild(productImgCard); 

      productInfo.appendChild(productDiv); 
      productInfo.appendChild(productInfoFigure); 

      productCard.appendChild(imagen);
      productCard.appendChild(productInfo); 
      cardContainer.appendChild(productCard);
 }