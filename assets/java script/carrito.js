
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
  