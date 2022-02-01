let datos = prompt("Hola! Por favor ingrese su nombre y apellido");
console.log("Bienvenido ${bienvenida} a la tienda de lenceria Ziba");
let miArray = []
    class modeloZiba {
        constructor(modelo, color, precio, talle) {
            this.modelo = modelo;
            this.color = color;
            this.precio = precio;
            this.talle = talle;
        }
        modeloElegido() {
            alert(`usted elijio el modelo: ${this.modelo} \nEl precio es: ${this.precio}
             \nEl talle es: ${this.talle}`);
        }
    }
    const modelo1 = new modelo("grecia", "Rojo", "$1500", 90);
    miArray.push(modelo1);
    const modelo2 = new modelo("malasia", "Blanco", "$1700", 100);
    miArray.push(modelo2);

    console.log(modelo1);
    modelo1.modeloElegido();
    console.log(modelo2);
    modelo2.modeloElegido();
    console.log(miArray);


    