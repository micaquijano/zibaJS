$.ajax({
    type: "GET",
    url: "./assets/datos/conjuntos.json",
  })
  .done(function (data) {
    let productosHtml = "";
    data.forEach((producto) => {
      productosHtml += getProductoHtml(producto);
    });
    $("#productos").html(productosHtml);
  });
