const aux_Carrito = localStorage.getItem("productosDelCarrito")
var productosDelCarrito = aux_Carrito ? JSON.parse(aux_Carrito) : [];

function agregarProductoACarrito(id) {
  const producto = productosActuales.find((producto) => producto.id === id);
  console.log(productos, producto);
  agregarProducto(producto);
  localStorage.setItem(
    "productosDelCarrito",
    JSON.stringify(productosDelCarrito)
  );
  actualizarInfoCarrito()
}

function agregarProducto(producto) {
  let productoEncontrado = productosDelCarrito.findIndex(
    (p) => p.id === producto.id
  );
  if (productoEncontrado !== -1) {
    productosDelCarrito.splice(productoEncontrado, 1, producto);
  } else {
    productosDelCarrito.push(producto);
  }
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

var productosActuales = [];
function obtenerProductos(_url) {
  $.ajax({
    type: "GET",
    url: _url,
  }).done(function (data) {
    productosActuales = data;
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
    onClick="agregarProductoACarrito(${producto.id})"
    class="btn btn-primary"
  >Comprar</button>
  </div>
</div>`;
}
