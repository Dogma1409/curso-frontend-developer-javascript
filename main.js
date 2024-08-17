const navRight = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

// Inicialmente ocultar los menús
desktopMenu.classList.add('inactive');
mobileMenu.classList.add('inactive');
productDetail.classList.add('inactive');

// Mostrar el menú de escritorio cuando el mouse esté sobre el menú
navRight.addEventListener('mouseenter', showDesktopMenu);
desktopMenu.addEventListener('mouseenter', showDesktopMenu);


// Ocultar el menú de escritorio cuando el mouse se aleje del menú
navRight.addEventListener('mouseleave', hideDesktopMenu);
desktopMenu.addEventListener('mouseleave', hideDesktopMenu);

function showDesktopMenu() {
    desktopMenu.classList.remove('inactive');
}

function hideDesktopMenu() {
    desktopMenu.classList.add('inactive');
}

// Mostrar el menú móvil cuando el mouse esté sobre el menú
burgerMenu.addEventListener('mouseenter', showMobileMenu);
mobileMenu.addEventListener('mouseenter', showMobileMenu);

// Ocultar el menú móvil cuando el mouse se aleje del menú
burgerMenu.addEventListener('mouseleave', hideMobileMenu);
mobileMenu.addEventListener('mouseleave', hideMobileMenu);

function showMobileMenu() {
    mobileMenu.classList.remove('inactive');
}

function hideMobileMenu() {
    mobileMenu.classList.add('inactive');
}

// Mostrar el carrito cuando el mouse este sobre el icono
shoppingCart.addEventListener('mouseenter', showProductDetail);
productDetail.addEventListener('mouseenter', showProductDetail);

// Ocultar el carritol cuando el mouse se aleje del icono
shoppingCart.addEventListener('mouseleave', hideProductDetail);
productDetail.addEventListener('mouseleave', hideProductDetail);

function showProductDetail() {
    productDetail.classList.remove('inactive');
}

function hideProductDetail() {
    productDetail.classList.add('inactive');
}

// Productos


const productList = [];

productList.push({
    name: 'Bike',
    price:  120,
    image: 'https://poseidonbogota.com/wp-content/uploads/2024/05/cristales.ruta_.1lite.jpg',
});
productList.push({
    name: 'PC',
    price:  180,
    image: 'https://www.mipcparquecentral.com/cdn/shop/files/ComputadorRyzen58000con22_720x.jpg?v=1712700998',
});
productList.push({
    name: 'T.V',
    price:  185,
    image: 'https://challengerco.vteximg.com.br/arquivos/ids/164573-1000-1000/7705191044323_01.jpg?v=638569169743600000',
});
productList.push({
    name: 'Wallet',
    price:  200,
    image: 'https://es.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-cartera-cl%C3%A9a-piel-mahina-carteras-y-peque%C3%B1a-marroquiner%C3%ADa--M11749_PM2_Front%20view.png?wid=1090&hei=1090',
});

productList.push({
    name: 'Phone',
    price:  500,
    image: 'https://m.media-amazon.com/images/I/61p1I5f5ApL.jpg',
});

for (product of productList ) {


// Crear el contenedor del producto
const productCard = document.createElement('div');
productCard.classList.add('product-card');

// Crear y agregar la imagen del producto
const productImg = document.createElement('img');
productImg.setAttribute('src', product.image);
productImg.setAttribute('alt', '');

// Crear el contenedor de la información del producto
const productInfo = document.createElement('div');
productInfo.classList.add('product-info');

// Crear el contenedor de los detalles del producto (precio y nombre)
const productInfodiv = document.createElement('div');

const productPrice = document.createElement('p');
productPrice.innerText = '$' + product.price;

const productName = document.createElement('p');
productName.innerText =  product.name;

// Agregar precio y nombre al contenedor de detalles
productInfodiv.appendChild(productPrice);
productInfodiv.appendChild(productName);

// Crear el contenedor de la figura (icono del carrito)
const productFigure = document.createElement('figure');

const productIcon = document.createElement('img');
productIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
productIcon.setAttribute('alt', '');

// Agregar el icono al contenedor de figura
productFigure.appendChild(productIcon);

// Agregar el contenedor de detalles y el icono al contenedor de información del producto
productInfo.appendChild(productInfodiv);
productInfo.appendChild(productFigure);

// Agregar la imagen y la información del producto al contenedor principal del producto
productCard.appendChild(productImg);
productCard.appendChild(productInfo);

// Finalmente, agregar el producto completo al contenedor de las tarjetas
cardsContainer.appendChild(productCard);
}
