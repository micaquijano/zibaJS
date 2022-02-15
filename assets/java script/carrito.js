class Carrito {
  productos = [];
  agregarProducto(producto) {
    let productoEncontrado = this.productos.findIndex(
      (p) => p.id === producto.id
    );
    if (productoEncontrado !== -1) {
      this.productos.splice(productoEncontrado, 1, producto);
    } else {
      this.productos.push(producto);
    }
  }
  quitarProducto(producto) {
    this.productos.slice(producto);
  }
}

const carrito = new Carrito();

function getCarritoHtml(carrito) {
  let html = `<table class="table">
                <thead>
                  <tr>
                    <th>#Id</th>
                    <th>Producto</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>`;
  carrito.productos.forEach((producto) => {
    html += `<tr>
                <th>${producto.id}</th>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
              </tr>`;
  });
  html += `</tbody>
          </table>`;
  return html;
}

function getCarritoInfo(carrito) {
  const carritoHtml = getCarritoHtml(carrito);

  return ` 
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ${carritoHtml}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Finalizar compra</button>
        </div>
      </div>
  </div>`;
}

$(document).on("ready", function () {
  const modal = getCarritoInfo(carrito);
  $("#modalCarrito").html(modal);
});
