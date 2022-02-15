$.ajax({
    type: "GET",
    url: "./assets/datos/bombachas.json",
  })
  .done(function (data) {
    let productosHtml = "";
    data.forEach((producto) => {
      productosHtml += getProductoHtml(producto);
    });
    $("#productos").html(productosHtml);
  });
