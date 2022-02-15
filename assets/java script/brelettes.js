$.ajax({
    type: "GET",
    url: "./assets/datos/brelettes.json",
  })
  .done(function (data) {
    let productosHtml = "";
    data.forEach((producto) => {
      productosHtml += getProductoHtml(producto);
    });
    $("#productos").html(productosHtml);
  });
