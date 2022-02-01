class cliente{
    constructor (nombre,telefono,direccion){
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
 }
}

let boton = document.getElementById("enviarInfo");
boton.addEventListener("click", cargarCliente);

function cargarCliente(){
    let nombre = document.getElementById("name").value;
    let telefono = document.getElementById("phone").value;
    let direccion = document.getElementById("adress").value;
    let cliente1 = new cliente(nombre, telefono, direccion);
    console.log(cliente1);
    mostrarCliente(cliente1);
}
function mostrarCliente(cliente){
let mensaje = document.getElementById("customer");
console.log(mensaje);
mensaje.innerHTML = "";
let nuevoContenido = document.createElement("div");
nuevoContenido.innerHTML = `Gracias <b>${cliente.nombre}</b> sus datos fueron ingresados y en instantes recibira informacion en <b>${cliente.telefono}</b> `;
console.log(nuevoContenido);
mensaje.innerHTML = nuevoContenido.outerHTML;
}