$.ajax({
    type: "GET",
    url: "./assets/java script/conjuntos.json",
  })
  .done(function (data) {
    data.forEach((producto) => {
      productosHtml += getProductoHtml(producto);
    });
    $("#productos").html(productosHtml);
  });
