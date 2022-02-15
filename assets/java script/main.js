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

class Producto {
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
}

const carrito = new Carrito();
/* configuro / doy de alta ... todos los productos */
const brellete1 = new Producto(
  1999,
  1,
  "Corset Alemania",
  "https://drive.google.com/file/d/1Nf2Co1erLc5EPPGAusXgxtPv2qm2dIqV/view?usp=sharing"
);
const brellete2 = new Producto(
  999,
  2,
  "Taiwan",
  "https://drive.google.com/file/d/1Nf2Co1erLc5EPPGAusXgxtPv2qm2dIqV/view?usp=sharing"
);
const brellete3 = new Producto(
  1100,
  3,
  "Japon",
  "https://drive.google.com/file/d/1Nf2Co1erLc5EPPGAusXgxtPv2qm2dIqV/view?usp=sharing"
);
const brellete4 = new Producto(
  1200,
  4,
  "Denver",
  "https://drive.google.com/file/d/183drjGjXYgfgXG3PhJ7rCs_8q2ZRgYm1/view?usp=sharing"
);
const brellete5 = new Producto(
  1300,
  5,
  "Rio",
  "https://drive.google.com/file/d/1yD1RE4UvcLlEkPI5fBcP-rM1Z9eKbAKC/view?usp=sharing"
);
const brellete6 = new Producto(
  900,
  6,
  "Monaco",
  "https://drive.google.com/file/d/1oanEu_lMiV466bxzI4CEm-JS9H-iSmna/view?usp=sharing"
);
