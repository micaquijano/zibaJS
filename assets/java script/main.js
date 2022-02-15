$.ajax({
  type: "GET",
  url: "./header.html",
}).done(function (data) {
  $("#header").html(data);
});

$.ajax({
  type: "GET",
  url: "./footer.html",
}).done(function (data) {
  $("#footer").html(data);
});


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


function getProductoHtml(producto) {
  return `<div class="card img-with-zoom col-4 m-0">
<a
  target="_blank"
  class="text-white"
  href="https://wa.me/+5491126721843?text=Hola,%20quisiera%20más%20info%20de%20el%20producto%20%23${producto.id}"
>
  <img
    src="${producto.img}"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <div class="card-title d-flex justify-content-around">
      <h1 class="me-auto">${producto.precio}</h1>
      <span class="badge bg-secondary fs-4 fit-height">${producto.id}</span>
    </div>
    <span class="card-text">${producto.nombre}</span>
  </div>
</a>
</div>`;
}

