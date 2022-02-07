class cliente {
  constructor(nombre, telefono, direccion) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
  }
}

$("#enviarInfo").on("click", function () {
  const name = $("#name").val();
  const phone = $("#phone").val();
  const adress = $("#adress").val();
  let nuevoCliente = new cliente(name, phone, adress);
  mostrarCliente(nuevoCliente);
});

function mostrarCliente(cliente) {
  $("#customer").html(
    `<div>Gracias <b>${cliente.nombre}</b> sus datos fueron ingresados y en instantes recibira informacion en <b>${cliente.telefono}</b></div>`
  );
}
