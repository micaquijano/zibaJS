$.ajax({
    type: "POST",
    url: "./header.html",
    data: null,
  })
  .done(function (data) {
    $("#header").html(data);
  });

$.ajax({
    type: "POST",
    url: "./footer.html",
    data: null,
  })
  .done(function (data) {
    $("#footer").html(data);
  });
