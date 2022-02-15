$(document)
  .on("ready")
  .ajax({
    type: "GET",
    url: "./assets/java script/brelettes.json",
  })
  .done(function (data) {
    data.forEach((producto) => {
      productosHtml += getProductoHtml(producto);
    });
    $("#productos").html(productosHtml);
  });