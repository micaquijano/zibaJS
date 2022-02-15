$.ajax({
    type: "GET",
    url: "./assets/java script/bombachas.json",
  })
  .done(function (data) {
    let productosHtml = "";
    data.forEach((producto) => {
      productosHtml += getProductoHtml(producto);
    });
    $("#productos").html(productosHtml);
  });
