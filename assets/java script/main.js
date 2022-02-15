/* var brelettes = require('../datos/brelettes.json');
var conjuntos = require('../datos/brelettes.json');
var bombachas = require('../datos/bombachas.json'); */

var todosLosProductos = [];
/* brelettes.forEach(b => todosLosProductos.push(b))
conjuntos.forEach(c => todosLosProductos.push(c))
bombachas.forEach(b => todosLosProductos.push(b)) */

function agregarProductoACarrito(id) {
  console.log(id);
  const producto = todosLosProductos.find(producto => producto.id === id);
  carrito.agregarProducto(producto);
}

//ajax que obtiene el header
$.ajax({
  type: "GET",
  url: "./header.html",
}).done(function (data) {
  $("#header").html(data);
});
//ajax que obtiene el footer
$.ajax({
  type: "GET",
  url: "./footer.html",
}).done(function (data) {
  $("#footer").html(data);
});

function obtenerProductos(_url) {
  $.ajax({
    type: "GET",
    url: _url,
  }).done(function (data) {
    let productosHtml = "";
    data.forEach((producto) => {
      productosHtml += getProductoHtml(producto);
    });
    $("#productos").html(productosHtml);
  });
}

/* class Producto {
  id;
  nombre;
  img;
  precio;
  constructor(_precio, _id, _nombre, _img) {
    this.id = _id;
    this.nombre = _nombre;
    this.img = _img;
    this.precio = _precio;
  }
} */


function obtenerProductos(_url) {
  $.ajax({
    type: "GET",
    url: _url,
  }).done(function (data) {
    let productosHtml = "";
    data.forEach((producto) => {
      productosHtml += getProductoHtml(producto);
    });
    $("#productos").html(productosHtml);
  });
}




function getProductoHtml(producto) {
  return `<div class="card img-with-zoom col-4 m-0 p-0">
  <img src="${producto.img}" class="card-img-top"/>
  <div class="card-body">
    <div class="card-title d-flex justify-content-around">
      <h1 class="me-auto">${producto.precio}</h1>
      <span class="badge bg-secondary fs-4 fit-height">${producto.id}</span>
    </div>
    <span class="card-text">${producto.nombre}</span>
    <a target="_blank" class="text-white"
      href="https://wa.me/+5491126721843?text=Hola,%20quisiera%20más%20info%20de%20el%20producto%20%23${producto.id}">
      <img src="./assets/imagenes/whatsapp.png" class="wsp-icono"/>
    </a>
    <button
    type="button"
    onClick="agregarProductoACarrito(${producto.id}); $event.stopPropagation()"
    class="btn btn-primary"
  >Comprar</button>
  </div>
</div>`;
}
