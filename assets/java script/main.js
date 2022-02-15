$.ajax({
    type: "GET",
    url: "./header.html",
  })
  .done(function (data) {
    $("#header").html(data);
  });

$.ajax({
    type: "GET",
    url: "./footer.html",
  })
  .done(function (data) {
    $("#footer").html(data);
  });
