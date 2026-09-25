//////////////////////////////////// ejercicio 1

let nombre_cliente = "Miguel Quintero";
let ciudad_cliente = "Bogotá";
let rappi_prime = true;

if (rappi_prime) {
    console.log("Hola " + nombre_cliente + ", tu pedido a domicilio en " + ciudad_cliente + ".");
} else {
    console.log("Hola " + nombre_cliente + ", tu pedido a domicilio en " + ciudad_cliente + " no está disponible.");
}


/////////////////////////////////////ejercicio 2
let productos = ["hamburguesa", "pizza", "sushi", "ensalada", "tacos"];

console.log(productos);

console.log(productos[0]);

productos.push("helado");

console.log(productos);

productos.pop();

console.log(productos);

productos.length

console.log(productos.length);


//ejercicio 3

let pedido = {
    cliente: nombre_cliente,
    ciudad: ciudad_cliente,
    productos: productos,
    estado: "En preparación"
};

console.log(pedido);
console.log(pedido.cliente);

pedido.estado = "En camino";

console.log(pedido);
console.log(pedido.productos[0]);


//////////////////////////////////// ejercicio 4 

const valor_producto = 15000;
const valor_domicilio = 5000;
const propina = 0.10;

let total = valor_producto + valor_domicilio;

console.log("El valor total del pedido es: " + total);

console.log("Total a pagar por el pedido de Camila:" + (total + (total * propina)));

let subtotal =  "20000"
let domicilio = 3500

console.log("El valor total del pedido es: " + subtotal + domicilio);

//esto pasa ya que el subtotal y el domicilio son strings, 
// por lo que se concatenan en lugar de sumarse. 
// Para obtener el valor total correcto,
//  es necesario convertirlos a números antes de sumarlos.

//asi seria la forma correcta de hacerlo:

const subtotal_num = 20000; 
var domicilio_num = 3500;

const total_correcto = subtotal_num + domicilio_num;

console.log("El valor total del pedido es: " + total_correcto);