
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

function obtenerTodosLosProductos() {
  if(todosLosProductos.length > 0) return
  const urls = [
    ["bombachas",
    "./assets/datos/bombachas.json"],
    ["brelettes",
    "./assets/datos/brelettes.json"],
    ["conjuntos",
    "./assets/datos/conjuntos.json"],
  ];
  urls.forEach(([key, url]) =>
    $.ajax({
      type: "GET",
      url: url,
    }).done(function (data) {
      data.forEach((producto) => todosLosProductos[key].push(producto));
    })
  );
}
var todosLosProductos = [];
obtenerTodosLosProductos();



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


function obtenerProductos(seccion) {
  let productosHtml = "";
  const productos = todosLosProductos[seccion];
  productos.forEach((producto) => {
    productosHtml += getProductoHtml(producto);
  });
  $("#productos").html(productosHtml);
}

function agregarProductoACarrito(id) {
  const productos = todosLosProductos.flat();
  const producto = productos.find((producto) => producto.id === id);
  console.log(productos, producto);
  carrito.agregarProducto(producto);
  console.log(carrito);
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
