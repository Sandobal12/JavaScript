                                                        // CLASE 0

// let edad = 45;
// let nombre = "Andres"; 
// let apellido = 'Ruiz';
// const CURSO = 'JavaScript';
// CURSO = 'React'; > no se puede cambiar el valor 'JavaScript' por 'React' ya que "CONST" no lo permite

// nombreBonitoGrande > CamelCase
// nombre_bonito_grande > SnakeCase
// NombreBonitoGrande > PascalCase

// let numeroUno = 5;
// let numeroDos = 10;
// let resultadoSuma = numeroUno + numeroDos;
// let resultadoResta = numeroDos - numeroUno;
// console.log(resultadoSuma);
// console.log(resultadoResta);

// let saludo = 'Hola';
// let nombre = 'Juan';
// let saludoCompleto = saludo + + nombre;
// console.log(saludoCompleto);

// let nombre = prompt('Ingrese su nombre');
// let mensaje = 'Hola ' + nombre;
// alert(mensaje);
// alert(`Hola ${nombre}!`);

// let entrada = prompt ('Dime cuándo naciste y te diré tu edad');
// let salida = 2023 - entrada;
// alert (`Tu edad es ${salida}`);

// let edad = parseInt(prompt('Ingresa tu edad')); > parseInt conviente el prompt en NUMERO de lo contrario el prompt siempre se tomara como STRING

                                                        // CLASE 1                                                                              

/* 
                Estructura del condicional IF

if (condicion){
    Codigo a ejecutar en caso de que la condicion sea verdadera o falsa
}
if(true){
    console.log('entramos');
}

if(1){
    console.log('entramos')
}

let lista = [];

if(lista){
    console.log('Entramos');
}

= > asignacion (A te digo que es igual a B) 
== > pregunta (A es igual a B?) Comparacion pero solo mirando el valor del elemento
=== > Comparacion mirando tanto el valor del elemento como el tipo de dato

let numero = 5;

if(numero === 5){
    console.log('El numero es el 5');
}

                Estructura del IF Else

if(condicion){
    codigo a ejecutar cuando la condicion es verdadera
}else{
    condigo a ejecutar cuando la condicion es falsa
}

let color = 'rojo';

if(color === 'rojo'){
    console.log('El color es rojo');
}else{
    console.log('El color no es rojo');
}

console.log('Finalizando')

                Estructura del IF Else IF

if(condicion1){
    Codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
    Codigo a ejecutar cuando la condicion2 es verdadera
}else if(condicion3){
    Codigo a ejecutar cuando la condicion3 es verdadera
}else{
    Codigo a ejecutar cuando ninguna de las anteriores condiciones es verdadera
}

let edad = parseInt(prompt('Ingrese su edad'));

if(edad <= 0){
    alert('Edad incorrecta');
}else if(edad < 14){
    alert('No puede pasar')
}else if(edad < 18){
    alert('Puede entrar con un adulto);
}else{
    alert('Puede pasar');
}

        ----isNaN---- 
let edad = parseInt(prompt('Ingrese su edad'));

if (!isNaN(edad)){
    if(edad <= 0)
    alert('Edad incorrecta');
}else if(edad < 14){
    alert('No puede pasar')
}else if(edad < 18){
    alert('Puede entrar con un adulto);
}else{
    alert('Puede pasar');
}

! > Voltea el valor, lo contrario (!true = false)
!! > Le devuelve el valor (!!true = true)

*/

/*                Operadores logicos

condicion1 && condicion2 es verdadera cuando TODAS las condiciones son verdaderas de lo contrario es falsa

condicion1 || condicion2 es verdadera cuando al menos UNA condicion es verdadera de lo contrario es falsa
let nombre = prompt('Ingrese su nombre');

if (nombre === 'pepito' || nombre === 'juan'){
    alert('Hola pepito');
}else{
    alert('No eres pepito')
}

if (nombre !='' && nombre === 'Pepito'){
    alert('Hola Pepito')
}else{
    alert('Usuario incorreto');
}

*/

                    // EJERCICIO EN CLASE
/* alert('Prohibida la venta a menores de 18 años')
let nombre = prompt('Ingrese su nombre');
let nacimiento = prompt('¿En qué año naciste?');
let edad = parseInt(prompt('¿Qué edad tienes?'));
let calculo = 2023 - nacimiento;

if (edad != calculo || edad <= 0){
    alert('Edad incorrecta, vuelva a comenzar');
}else if(edad === calculo && calculo < 18){
    alert(`No puede seguir comprando ${nombre}`)
}else if(edad === calculo && calculo >= 18){
    alert(`Puedes continuar con tu compra ${nombre}`)
} */

        // Estructura del bucle o clico FOR
/* 
for(desde; hasta; actualizacion){
    codigo a repetir
}

//  i++ === i = i + 1
//  i-- === i = i - 1

for(let i = 0; i <= 10; i++){
    console.log('Repeticion', i);
}

let numero = parseInt(prompt('Ingrese un numero'));

for(let i = 1; i <= 10; i++){
    let resultado = numero * i;
    alert(`${numero} X ${i} = ${resultado}`)
}


for(let turno = 1; turno <= 7; turno++){
    let nombre = prompt('Ingrese su nombre');
    let mensaje =  `Turno #${turno} 
                     Nombre:${nombre}`;
    alert(mensaje)
}
for (let i = 1; i <= 10; i++){
    if( i === 5){
        break;
    }
    console.log('Iteracion', i);
}     
for (let i = 1; i <= 10; i++){
    if( i === 5){
        continue;
    }
    console.log('Iteracion', i);
}     
*/
  
                // Estructura del cilco WHILE
                
/* 
while(condicion){
    codigo a repetir siempre que la condicion sea verdadera
}

let repetir = true;

while(repetir){
    console.log(('Hola'));
}

let usuario = prompt('Ingrese su usuario');

while(usuario != 'andres'){
    alert('Usuario incorrecto');
    usuario = prompt('Ingrese su usuario')
}

alert('Bienvenido Andres');

let entrada = prompt('Ingrese un dato');

while(entrada != 'ESC'){
    alert(`Ingresaste ${entrada}`);
}

let repetir = false;

do{
    console.log('Entramos');
}while(repetir);
                    ----DoWhile primero actua luego piensa / While piensa y luego actua----
*/

                // Estructura del SWITCH

/* 
switch(valor){
    case valor1:
        codigo a ejecutar;
        brak;

    case valor2:
    codigo a ejecutar en caso de que valor sea igual a valor1
 quebrar;
  .
  .
  .
 predeterminado:
    codigo a ejecutar en caso de que el valor no coincida con ninguno de los anteriores valores
 quebrar;
}

let nombre = prompt("Ingrese el nombre" );

while(nombre != "ESC"){
  switch(nombre){
    caso "ANA":
      alert("Hola Ana");
      quebrar;

    caso "JUAN":
      alert("Hola Juan");
      quebrar;

    Valor predeterminado:
      for(let i = 0;  <  3;  Yo++){
        alert("Quién eres???");
      }
      quebrar;
  }

  nombre = prompt("Ingrese el nombre" );
}
*/

                // EJERCICIO EN CLASE

/* 
alert('¿Qué tabla quiere conocer?');

let tabla = prompt('Tenemos las tablas del 1 al 10, elija');

while(tabla != 'ESC'){
    switch(tabla){
        case '1':
            for(let i = 1; i <= 10; i++){
                let resultado = tabla * i;
                alert(`${tabla} X ${i} = ${resultado}`)
            }
    }
    switch(tabla){
        case '2':
            for(let i = 1; i <= 10; i++){
                let resultado = tabla * i;
                alert(`${tabla} X ${i} = ${resultado}`)
            }
    }
    switch(tabla){
        case '3':
            for(let i = 1; i <= 10; i++){
                let resultado = tabla * i;
                alert(`${tabla} X ${i} = ${resultado}`)
            }
    }
    switch(tabla){
        case '4':
            for(let i = 1; i <= 10; i++){
                let resultado = tabla * i;
                alert(`${tabla} X ${i} = ${resultado}`)
            }
    }
    switch(tabla){
        case '5':
            for(let i = 1; i <= 10; i++){
                let resultado = tabla * i;
                alert(`${tabla} X ${i} = ${resultado}`)
            }
    }
    switch(tabla){
        case '6':
            for(let i = 1; i <= 10; i++){
                let resultado = tabla * i;
                alert(`${tabla} X ${i} = ${resultado}`)
            }
    }
    switch(tabla){
        case '7':
            for(let i = 1; i <= 10; i++){
                let resultado = tabla * i;
                alert(`${tabla} X ${i} = ${resultado}`)
            }
    }
    switch(tabla){
        case '8':
            for(let i = 1; i <= 10; i++){
                let resultado = tabla * i;
                alert(`${tabla} X ${i} = ${resultado}`)
            }
    }
    switch(tabla){
        case '9':
            for(let i = 1; i <= 10; i++){
                let resultado = tabla * i;
                alert(`${tabla} X ${i} = ${resultado}`)
            }
    }
    switch(tabla){
        case '10':
            for(let i = 1; i <= 10; i++){
                let resultado = tabla * i;
                alert(`${tabla} X ${i} = ${resultado}`)
            }
    }
}
 */


                                                        // CLASE 2

/* 
                Estructura de una funcion

function nombre(){
    codigo de la funcion
}
*/

// function saludar(){
//     console.log('Hola');
// }

// saludar();

// let nombre = prompt('Ingrese su nombre');
// let mensaje = `Hola ${nombre}`;
// alert(mensaje);

/* function pedirDato(){
    let nombre = prompt('Ingrese su nombre');
    let mensaje = `Hola ${nombre}`;
    alert(mensaje);
}
pedirDato(); */

/* 
                Estructura de una funcion con parametros

function nombre(param1, param2, ..., paramX){
    codigo de la funcion
}
*/

/* function saludar(nombre, saludo){
    let mensaje = `${saludo} ${nombre}`;
    alert(mensaje);
}

saludar('Kevin', 'Bienvenido'); */

/* function session(usuario){
    while(usuario != 'Andres'){
        alert('Usuario incorrecto');
        usuario = prompt('Ingrese su usuario');
    }
    alert('Bienvenido');
}

let usuario = prompt('Ingrese su usuario');
session(usuario); */


/* function sumar(numero1, numero2){
    return numero1 + numero2;
} 

let resultado = sumar(4, 5);

console.log(resultado);
*/
/* function saludar(){
 consola.log("Hola");
 consola.log("chao");
 devolución
}
saludar(); */

/* function calculadora(numeroUno, numeroDos, operacion){
    switch(operacion){
        case "sumar":
            return numeroUno + numeroDos;
            break;

        case "restar":
            return numeroUno - numeroDos;
            break;

        case "multiplicar":
            return numeroUno * numeroDos;
            break;

        case "dividir":
            return numeroUno / numeroDos;
            break;

            default:
                return "Operacion no identificada";
                break;
    }
}

let numeroUno = parseInt(prompt("Ingrese un número"));
let numeroDos = parseInt(prompt("Ingrese un segundo número"));
let operacion = prompt("Ingrese la operacion");

let resultado = calculadora(numeroUno, numeroDos, operacion);
let mensaje = `El resultado de la operacion es ${resultado}`;
alert(mensaje); */


/* function sumar(num1, num2){
    let resultado = num1 + num2;
    return resultado;
}

function restar (num1, num2){
    let resultado = num1 - num2;
    return resultado;
} */

//  const suma = function (a, b){return a + b};
//  const resta = function (a, b){return a - b};

//  suma(3, 4)

/* function sumar(a, b) {
    retorno (a = b);
    // }
    
    const suma = (a, b) => a +  b;
    const resta = (a, b) => a - b;
    const iva  = x => x * 0.21 ;
    
    let precioProducto = parseInt(prompt("Ingrese el precio del producto"));
    let descuento = parseInt(prompt("Ingrese el descuento" ));
    
    let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)
                    = resta(suma(1000, iva(1000)), 10)
                    = resta(suma(1000, 210), 10)
                    = resta(1210, 10)
                    = 1200
    let mensaje = 'El precio del producto es ${nuevoPrecio}';
    alert(mensaje);
} */

// let nombre = "Luis";
// sea edad = 30;
// let direccion = "AV";

/* 
estructura de un objeto
{clave1: valor1, clave2: valor2, ..., claven: valorn}
*/

// const persona1 = {
// nombre: "Luis",
// edad: 30,
// direccion: "AV",
// };

// consola.log(persona1.nombre);
// consola.log(persona1.edad);
// consola.log(persona1.direccion);

// let clave = "nombre"
// consola.log(persona1[clave]);
// consola.log(persona1["edad"]);
// consola.log(persona1["direccion"]);

// function Persona(nombrePersona, edad, direccion){
// this.nombre = nombrePersona;
// this.edad = edad;
// this.direccion = direccion;
// }

// const persona1 = new Persona("Luis", 30, "AV");
// const persona2 = new Persona("Marina", 30, "AV");
// consola.log(persona1.edad);
// consola.log(persona2.nombre);

// function Producto(nombre, imagen, precio){
// this.nombre = nombre;
// this.precio = precio;
// this.imagen = imagen;
// }

// const producto1 = new Producto("Monitor Huawei...", "http:asdf,ljkhbsfd", 649197);

// function Producto(info){
// this.nombre = info.nombre;
// this.precio = info.precio;
// this.imagen = info.imagen;
// this.vendido = false;
// }

// let imagen = prompt("Ingrese el link de la imagen");
// let precio = parseInt(prompt("Ingrese el precio del producto"));
// let nombre = prompt("Ingrese el nombre del producto");

// const producto1 = new Producto(
//   {
// imagen: imagen,
// precio: precio,
// nombre: nombre,
//   }
// );
// consola.log(producto1);

// function Persona(nombre, edad, direccion){
// this.nombre = nombre;
// this.edad = edad;
// this.direccion = direccion;
// this.hablar = function(){console.log("Hola soy", this.nombre);}
// }

// const persona1 = new Persona("andres", 26, "AV");
// const persona2 = new Persona("camila", 26, "AV");

// function Persona(nombre, edad, direccion){
// this.nombre = nombre;
// this.edad = edad;
// this.direccion = direccion;
// }

// const persona1 = new Persona("andres", 26, "AV");

// for(const clave in persona1){
// consola.log("clave", clave);
// consola.log("valor", persona1[clave]);
// }

// CLASES
// class Persona {
// constructor(nombre, edad, direccion) {
// this.nombre = nombre;
// this.edad = edad;
// this.direccion = direccion;
//   }

// hablar(){
// consola.log("Hola soy", this.nombre);
//   }
// }

// const persona1 = new Persona("andres", 26, "AV");
// consola.log(persona1);
// persona1.hablar();

/* class Producto{
  constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }
  vender(){
 this.vendido = verdadero;
  }
}
const producto1 = new Producto("Monitor", 1000);
const producto2 = new Producto("Computador", 1000);
consola.log(producto1.vendido);
producto1.vender();
consola.log(producto1.vendido);
consola.log(producto2.vendido); */


// clase Producto{
//   constructor(nombre, precio, cantidad){
//     esto.  nombre = nombre;
//     esto.  precio = precio;
//     esto.  cantidad = cantidad;
//   }

//   Vendedor(){
//     esto. cantidad -= 1;  //this.cantidad = this.cantidad - 1
//   }
// }

// const producto1 = new Producto("Monitor", 1000, 5);
// consola. log(producto1);
// producto1. Vendedor();
// consola. log(producto1);



                                                        // CLASE 3

/* 
                Estructura de un arreglo ("array")

    [elemento1, elemento2, ..., elementoN]
 */


// const arregloVacio = [];
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
// const nombres = ['Juan', 'Camila', 'Marta'];
// const valores = [true, false, true, true];
// const variados = [1, 'Juan', false];


                            // REVISAR
/* // const nombres = ['Juan', 'Camila', 'Marta'];
// console.log(nombres[1]);
// console.log(nombres[3]);
// console.log(nombres[2]);


// const numeros = [1, 4, 3, 6, 8, 2, 4];
// let resultado = numeros[0] + numeros[5];
// console.log(resultado);
 */



// const nombres = ['Juan', 'Camila', 'Marta'];

// // POCO PRACTICO
// for(let index = 0; index < 4; index++){

// }

// //  MAS DINAMICO
// for(let index = 0; index < nombres.length; index++){
//     console.log(nombres[index]);
// }


/* const nombres = ['Juan', 'Camila', 'Marta'];
nombres.push('Lina');   //Agrega al final del arreglo un nuevo elemento
console.log(nombres);



nombres.unshift('Facundo');  // Agrega al inicio del arreglo un nuevo elemento
console.log(nombres); */


/* const nombres = ['Juan', 'Camila', 'Marta'];
nombres.pop();   // Quita el ultimo elemento del arreglo
console.log(nombres);


nombres.shift();   // Quita el primero elemento del arreglo
console.log(nombres); */

/* const nombres = ['Juan', 'Camila', 'Marta'];
nombres.splice(1, 2);  // Quita una X canitidad de elementos desde la posicion que elijas (posicion, cantidad a eliminar)
console.log(nombres); */


/* const nombres = ['Juan', 'Camila', 'Marta'];
console.log(nombres.join(' '));   // Une todos los elementos en un string */


/* const nombres = ['Juan', 'Camila', 'Marta'];
const mascotas = ['Firu', 'Max', 'Maze'];
const varios = nombres.concat(mascotas);  // Genera un nuevo arreglo combinando los elementos de otros arreglos
console.log(varios); */


/* const nombres = ['Juan', 'Camila', 'Marta', 'Martina', 'Genesis'];
const copia = nombres.slice(1, 3);  // Crea una copia a partir de un rando (posicionar incial, posicion final)
console.log(copia); */

/* const nombres = ['Juan', 'Camila', 'Marta'];
console.log(nombres.indexOf('Camila'));   // Encuentra el indice o posicion del elemento, si no lo encuentra devuelve -1
 */


/* const nombres = ['Juan', 'Camila', 'Marta'];
nombres.reverse();   // Invierte el orden del arreglo
 */

/* const nombres = ['Juan', 'Camila', 'Marta'];
console.log(nombres.includes('Camila'));   // Me informa si el elemento esta dentro del arreglo
 */

/* const nombres = ['Juan', 'Camila', 'Marta'];
const nombre  = 'Camila';

for(let index = 0; index < nombres.length; index++){
    if(nombres[index] === nombre){
        indicador = true
    }
}

if(indicador){
consola.log(verdadero);
}else{
consola.log(false);
} */

/* const productos = ['Pastel', 'Cafe'];
let producto = prompt('Ingrese el producto a buscar');

if(producto.includes(producto)){
    alert(`Si hay ${producto}`)
}else{
    alert(`No se encuentra ${producto}`)
}
 */


/* const nombres = ['Juan', 'Camila', 'Marta'];

const eliminar = (nombre) => {
    let index = nombres.indexOf(nombre);

    if(index !== -1){
        nombres.splice(index, 1);
        console.log(nombres);
    }
}

eliminar('Camila'); */

/* const productos = [
    {id: 1, nombre: 'Pantalon', precio: 1000},
    {id: 2, nombre: 'Camisa', precio: 500},
    {id: 3, nombre: 'Zapato', precio: 1400},
    {id: 4, nombre: 'Buzo', precio: 800},
    {id: 5, nombre: 'Gorra', precio: 200},
];

for (let index = 0; index < productos.length; index++) {
    const element = productos[index];
    console.log(element.precio);
    
} 

Paso por valor
let nombre1 = "andres";
let nombre2 = nombre1;

nombre2 = "Camila";
consola.log(nombre1);

paso por referencia
let persona1 = {nombre: "andres", edad: 50};
let persona2 = persona1;

persona2.nombre = "camila";
consola.log(persona1);
*/


/* function mayorQue(n){
    return m => m > n;
}

let mayorQueCinco = mayorQue(5);  
console.log(mayorQueCinco(6));
console.log(mayorQueCinco(4)); */

/* function operaciones(op){
    if(op === "sumar"){
        return (a, b) => a + b;
    }
    if(op === "restar"){
        return (a, b) => a - b;
    }
    if(op === "dividir"){
        return (a, b) => a / b;
    }
    if(op === "multiplicar"){
        return (a, b) => a * b;
    }
    
}

let resta = operaciones("restar"); //(a, b) => a - b
console.log(resta(10, 6)); */

/* 
function recorrer(arreglo, funcion){
    for(const numero of arreglo){
        funcion(numero);
    }
}

recorrer([1,4,3,5,7,8], console.log); */

                // Metodos importantes
/* 
let numeros = [1,2,3,4,5,6,7]

numeros.forEach(numero => console.log(numero));  //recorre NUMERO y lo muestra (console.log)
numeros.forEach(numero => {
    console.log(numero)                     // Alternativa
});
 */

/* const productos = [
    {id: 1, nombre: 'Pantalon', precio: 1000},
    {id: 2, nombre: 'Camisa', precio: 500},
    {id: 3, nombre: 'Zapato', precio: 1400},
    {id: 4, nombre: 'Buzo', precio: 800},
    {id: 5, nombre: 'Gorra', precio: 200},
];

let producto = prompt('Ingrese el nombre del producto a buscar')
const resultado = productos.find(item => item.nombre === producto);
console.log(resultado);

let mensaje = `
Id: ${resultado.id}
Nombre: ${resultado.nombre}
Precio: $${resultado.precio}
`;

alert(mensaje); */

// const productos = [
//     { id: 1, nombre: "Pantalon", precio: 1000 },
//     { id: 2, nombre: "camisa", precio: 500 },
//     { id: 3, nombre: "zapato", precio: 700 },
//     { id: 4, nombre: "Gorra", precio: 1750 },
//     ];
    
//     console.log(productos.some(item => item.nombre === "manga"));//verifica si al menos un elemento cumple con la condicion dada
    
//     const productos = [
//     { id: 1, nombre: "Pantalon", precio: 1000 },
//     { id: 2, nombre: "camisa", precio: 500 },
//     { id: 3, nombre: "zapato", precio: 700 },
//     { id: 4, nombre: "Gorra", precio: 1750 },
//     ];
    
//     const nombres = productos.map(item => item.nombre);
//     const precios = productos.map(item => item.precio);
//     consola.log(nombres);
//     consola.log(precios);
    
//     const preciosActualizados = productos.map(item => {
//     return {
//     Identificación: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21
    //   };
    // });
    
    // consola.log(preciosActualizados);
    
    // const numeros = [1, 2, 4, 3, 5, 6, 9];
    
    // const total = numeros.reduce((acum, item) => acum + item, 0);
    // consola.log(total);
    
    // const productos = [
    // { id: 1, nombre: "Pantalon", precio: 1000 },
    // { id: 2, nombre: "camisa", precio: 500 },
    // { id: 3, nombre: "zapato", precio: 700 },
    // { id: 4, nombre: "Gorra", precio: 1750 },
    // // ];
    
    // const total = productos.reduce((acum, item) => acum + item.precio, 0);// reduce el arreglo a un solo valor
    // consola.log(total);
    
    // const numeros = [40, 1, 5, 200];
    
    // consola.log(numeros.sort((a, b) => a - b)); menor a mayor
    // consola.log(numeros.sort((a, b) => b - a)); Alcalde A Menor
    
    // const items = [
    // { nombre: "Pikachu", precio: 21 },
    // { nombre: "Charmander", precio: 37 },
    // { nombre: "Pidgey", precio: 45 },
    // { nombre: "Squirtle", precio: 60 },
    // // ];
    
    // console.log(items.sort((a, b) => {
    // if (a.name > b.name) {
    // retorno -1;
    // //   }
    // if (a.name < b.name) {
    // retorno 1;
    // //   }
    // // a es igual a b
    // retorno 0;
    // // }));
    
    // Matemática
    // consola.log(Math.E);
    // consola.log(Math.PI);
    // consola.log(Matemáticas.max(3, 7, 5, 4, 88, 999, 765, 3));
    // consola.log(Math.min(3, 7, 5, 4, 88, 999, 765, 3));
    // consola.log(Math.ceil(3.24));
    // consola.log(Math.floor(3.7));
    // consola.log(Math.round(3.14));
    // consola.log(Math.round(3.7));
    // consola.log(Math.sqrt(9));
    // consola.log(Math.round(Math.random() * 10));
    
    // Fecha
    // consola.log(Fecha());
    // consola.log(nueva fecha(2023, 1, 4));
    
    // const casiNavidad = nueva Fecha(2023, 11, 24, 23, 59, 59);
    // consola.log(casiNavidad);
    
    //   const hoy = nueva fecha("4 de febrero de 2023");
    //   consola.log(hoy.toDateString());
    //   consola.log(hoy.toLocaleString());
    //   consola.log(hoy.toLocaleDateString());
    //   consola.log(hoy.toTimeString());
    //   consola.log(hoy.getFullYear());
    //   consola.log(hoy.getMonth());
    //   consola.log(hoy.getDay());
    
    //   const navidad = nueva fecha("25 de diciembre de 2023");
    //   const hoy = nueva Fecha("4 de febrero de 2023");
    
    //   consola. log(navidad - hoy);
    //   const milisegundosPorDia = 86400000;
      
    //   consola. log((navidad - hoy) / milisegundosPorDia);



/* const productos = [
    {id: 1, nombre: 'Pantalon', precio: 1000},
    {id: 2, nombre: 'Camisa', precio: 500},
    {id: 3, nombre: 'Zapato', precio: 1400},
    {id: 4, nombre: 'Buzo', precio: 800},
    {id: 5, nombre: 'Gorra', precio: 200},
];

const preciosActualizados = productos.map(item => {
    return {
        id: item.id,
        Nombre: item.nombre,
        Precio: item.precio - item.precio * 0.21,
    };
});

console.log(preciosActualizados); */

/* const productos = [
    {id: 1, nombre: 'Pantalon', precio: 1000},
    {id: 2, nombre: 'Camisa', precio: 500},
    {id: 3, nombre: 'Zapato', precio: 1400},
    {id: 4, nombre: 'Buzo', precio: 800},
    {id: 5, nombre: 'Gorra', precio: 200},
];

const total = productos.reduce((acum, item) => acum + item.precio, 0);  // Reduce el arreglo a un solo valor, el primer parametro guarda un valor y el segundo recorre los elementos del objeto
console.log(total); */


/* const numeros = [40, 1, 5, 200];

console.log(numeros.sort((a, b) => a - b)); // Retorna de mayor a menor
console.log(numeros.sort((a, b) => b - a));  // Retorna de mayor a menor
 */

// console.log(Math.round(Math.random(1) * 10));   // numeros aleatorios entre 1 y 10



                                                        // CLASE 4

// console.log(document);
// let div = document.getElementById("application");
// console.log(div.innerText);
// console.log(div.innerHTML);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerText);
// console.log(parrafo.innerHTML);

// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

// let containers = document.getElementsByTagName("div");
// console.log(containers[0].innerHTML);
// console.log(containers[1].innerHTML);
// console.log(containers[2].innerHTML);

// let perritos = document.getElementsByClassName("perritos");

// for(const li of perritos){
//   console.log(li.innerHTML);
// }

// let saludo = document.getElementById("saludo");
// saludo.innerHTML = "<h1>Hola Coder</h1>";

// let seccion = prompt("INgrese la seccion deseada");
// let saludo = document.getElementById("saludo");

// if (seccion === "carrito") {
//   saludo.innerHTML = "<h1>Bienvenido al carrito</h1>";
//   saludo.className = "verde";
// } else if (seccion === "favoritos") {
//   saludo.innerHTML = "<h1>Bienvenido a favoritos</h1>";
//   saludo.className = "amarillo";
// } else {
//   saludo.innerHTML = "<h1>Bienvenido a mi super pagina</h1>";
//   saludo.className = "azul";
//   // saludo.classList.add(nombre-clase);
// }

//CREACIÓN DE NODOS
// let container = document.getElementById("container");
// let parrafo = document.createElement("p"); //creacion de la etiqueta (primer paso)
// parrafo.innerHTML = "<h2>Hola a todos</h2>"; //Agregado de contenido (segundo paso)
// document.body.append(parrafo); //asignacion del padre
// // container.append(parrafo);

//ELIMINAR ELEMENTOS
// let container = document.getElementById("container");
// container.remove();
// let producto = prompt("INgrese el nombre del producto");
// let container = document.getElementById("container");
// let productos = ["zapato", "pantalon", "camisa", "gorra"];
// productos.push(producto);

// productos.forEach(item => {
//   let li = document.createElement("li");
//   li.innerHTML = item;
//   container.append(li);
// });

// let nombre = prompt("Ingrese el nombre del producto");
// let precio = prompt("Ingrese el precio del producto");

// let container = document.getElementById("container");
// let productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 1550 },
//   { id: 3, nombre: "gorra", precio: 800 },
//   { id: 4, nombre: "zapato", precio: 150 },
// ];

// let objeto = {
//   id: productos.length + 1,
//   nombre,
//   precio
// };
// productos.push(objeto);

// productos.forEach(item => {
//   let producto = document.createElement("div");
//   producto.innerHTML = `
//     <h2>Id: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//   `;

//   container.append(producto);
// });


// let boton = document.getElementById("boton");

// let evento = prompt("Ingrese el evento");
// boton.addEventListener(evento, () => console.log("Fuego!!!"));

// boton.onclick = () => console.log("Fuego!!!");
// const saludar = (nombre) => {
//   alert(`Hola ${nombre}`);
// };

// boton.addEventListener("click", () => saludar("camila"));

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("click", () => console.log("click"));
// boton.addEventListener("dblclick", () => console.log("dblclick"));

// let saludo = document.getElementById("saludo");

// boton.addEventListener("click", () => {
//   saludo.className = "verde";
// });
// boton.addEventListener("mouseout", () => {
//   saludo.className = "rojo";
// });
// boton.addEventListener("mouseover", () => {
//   saludo.className = "amarillo";
// });
// boton.addEventListener("mousedown", () => {
//   saludo.className = "azul";
// });

// let nombre = document.getElementById("nombre");
// nombre.addEventListener("keyup", () => console.log("keyup"));
// nombre.addEventListener("keydown", () => console.log("keydown"));
// nombre.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });

// let saludo = document.getElementById("saludo");

// nombre.addEventListener("keydown", (e) => {
//   if (e.key === "a") {
//     saludo.className = "amarillo";
//   } else if (e.key === "s") {
//     saludo.className = "azul";
//   } else if (e.key === "d") {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "verde";
//   }
// });

// document.body.addEventListener("keydown", (e) => {
//   alert(e.key);
// })

// nombre.addEventListener("change", () => console.log("change"));

// let saludo = document.getElementById("saludo");

// nombre.addEventListener("input", () => {
//   if (!nombre.value.includes("@")) {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "blanco";
//   }
// });

// let formulario = document.getElementById("formulario");

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let inputs = e.target.children;
//   let correo = inputs[0].value;

//   if (!correo.includes("@")) {
//     inputs[0].value = "";
//   }
// });


                                                        // CLASE 5

// localStorage.setItem("nombre", "andres"); //guarda la informacion en el storage
// localStorage.setItem("edad", 55);
// localStorage.setItem("valor", true);

// let nombre = localStorage.getItem("nombre"); //recupera la informacion del storage
// console.log(nombre);

// let edad = localStorage.getItem("edad");
// console.log(edad);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// let arreglo = [1, 2, 3, 4, 4];
// localStorage.setItem("arreglo", arreglo);

// let objeto = { nombre: "Camila", edad: 18 };
// localStorage.setItem("objeto", objeto);

// for(let i = 0; i < localStorage.length; i++){
//   let clave = localStorage.key(i);

//   console.log("clave", clave);
//   console.log("valor", localStorage.getItem(clave));
// }

// sessionStorage.setItem("nombre", "andres");

// localStorage.removeItem("nombre"); //elimina un solo elemento del storage
// localStorage.clear(); //Elimina todo el storage

// let objeto = { nombre: "Camila", edad: 18 };
// localStorage.setItem("objeto", JSON.stringify(objeto));

// let arreglo = [1, 2, 3, 4, 3, 2];
// localStorage.setItem("arreglo", JSON.stringify(arreglo));

// let objeto = localStorage.getItem("objeto");
// console.log(JSON.parse(objeto));

// let arreglo = localStorage.getItem("arreglo");
// console.log(JSON.parse(arreglo));

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 700 },
//   { id: 3, nombre: "media", precio: 850 },
//   { id: 4, nombre: "zapato", precio: 1200 },
// ];

// const guardar = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach((item) => {
//   guardar(item.id, JSON.stringify(item));
// });

// localStorage.setItem("carrito", JSON.stringify(productos));

// let boton = document.getElementById("boton");
// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if(usuarioStorage){
//   usuario = usuarioStorage;
//   alert(`Bienvenid@ ${usuario}`);
// }else{
//   usuario = prompt("Ingrese su nombre");
//   sessionStorage.setItem("usuario", usuario);
//   alert(`Eres nuevo, Bienvenido ${usuario}`);
// }

// // boton.addEventListener("click", () => {
// //   sessionStorage.removeItem("usuario");
// //   alert("sesión cerrada exitosamente");
// // })

// // const carrito = [
// //   { id: 1, nombre: "camisa", precio: 1000 },
// //   { id: 2, nombre: "pantalon", precio: 700 },
// //   { id: 3, nombre: "media", precio: 850 },
// //   { id: 4, nombre: "zapato", precio: 1200 },
// // ];

// // localStorage.setItem("carrito", JSON.stringify(carrito));
// // let carrito = [];
// let carritoStorage = localStorage.getItem("carrito");

// if(carritoStorage){
//   carrito = JSON.parse(carritoStorage);
// }else{
//   let div = document.createElement("div");
//   div.innerHTML = "<h1>No hay productos disponibles</h1>"
//   document.body.append(div);
// }

// carrito.forEach(item => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h1>Id: ${item.id}</h1>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//   `
//   document.body.append(div);
// });

/* 
condicionales
if else if
if(condicion1){
  codigo a ejecutar en caso de que la condicion1 sea verdadera
}else if(condicion2){
  codigo a ejecutar en caso de que la condicion2 sea verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones anteriores fueron verdaderas
}
*/

// if(""){
//   console.log("entramos");
// }

// let usuario = prompt("Ingrese el usuario");

// while(usuario != "mariano"){
//   alert("El usuario es incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenido");

// function saludar(nombre, apellido){
//   console.log(`Hola ${nombre} ${apellido}`);
// }

// saludar("Camila", "Gomez");

// const saludar = (nombre, apellido) => {
//   console.log(`Hola ${nombre} ${apellido}`);
// };

// const sumar = (num1, num2) => num1 + num2;
// const restar = (num1, num2) => num1 - num2;
// const multiplicar = (num1, num2) => num1 * num2;
// const dividir = (num1, num2) => num1 / num2;

// function Persona(nombre, edad){
//   this.nombre = nombre;
//   this.edad = edad;
//   this.hablar = function(){console.log(`Hola soy ${this.nombre}`);}
// }

// class Persona{
//   constructor(nombre, edad){
//     this.edad = edad;
//     this.nombre = nombre;
//     this.color = "amarillo";
//   }

//   hablar(){
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("andres", "velasquez");
// persona1.hablar();
// console.log(persona1.nombre);
// console.log(persona1.edad);

// class Persona {
//   constructor(info) {
//     this.edad = info.edad;
//     this.nombre = info.nombre;
//     this.color = "amarillo";
//   }

//   hablar() {
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const perosna1 = new Persona({
//   nombre: "andres",
//   edad: 26,
// });

// let usuarios;

// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let inputs = e.target.children;
//   let nombre = inputs[0].value;
//   let edad = inputs[1].value;

//   let objeto = {
//     nombre,
//     edad,
//   };

//   let usuarioStorage = localStorage.getItem("usuarios");

//   if (usuarioStorage) {
//     usuarios = JSON.parse(usuarioStorage);
//   }else{
//     usuarios = [];
//   }

//   usuarios.push(objeto);
//   localStorage.setItem("usuarios", JSON.stringify(usuarios));
// });

// let boton = document.getElementById("boton");
// boton.addEventListener("click", () => {
//   let usuarios = JSON.parse(localStorage.getItem("usuarios"));

//   usuarios.forEach(item => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//       <h2>${item.nombre}</h2>
//       <h3>${item.edad}</h3>
//     `;

//     document.body.append(div);
//   });
// });

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 700 },
//   { id: 3, nombre: "media", precio: 850 },
//   { id: 4, nombre: "zapato", precio: 1200 },
// ];

// let nombre = "camisa";
// let arreglo = [];

// let encontrado = productos.find(item => item.nombre === nombre);
// arreglo.push(encontrado);
// localStorage.setItem("carrit", JSON.stringify(arreglo));

// const productos = [
//     { id: 1, nombre: "camisa", precio: 1000 },
//     { id: 2, nombre: "pantalon", precio: 700 },
//     { id: 3, nombre: "media", precio: 850 },
//     { id: 4, nombre: "zapato", precio: 1200 },
//   ];
  
//   const agregar = (id) => {
//     let encontrado = productos.find((item) => item.id === id);
//     console.log(encontrado);
//   };
  
//   productos.forEach((item) => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//       <h2>${item.id}</h2>
//       <p>${item.nombre}</p>
//       <b>$${item.precio}</b>
//       <button id="boton${item.id}">Agregar</button>
//     `;
  
//     document.body.append(div);
  
//     let boton = document.getElementById(`boton${item.id}`);
//     boton.addEventListener("click", () => agregar(item.id));
//   });


                                                        // CLASE 6

// let numero = 10;
// numero = numero + 1;
// numero += 1;
// numero++;

/* 
estructura del operador ternario
condicion ? codigo a ejecutar en caso de condicion verdadera : codigo a ejecutar en caso de condicion falsa;
*/

// let edad = 19;

// if(edad < 18){
//   console.log("No puedes entrar a la fiesta");
// }else{
//   console.log("Puedes entrar a la fiesta");
// }

// edad < 18 ? console.log("No puedes entrar a la fiesta") : console.log("Puedes entrar a la fiesta");

// let temperatura = 20;

// if(temperatura > 30){
//   console.log("Día caluroso");
// }else{
//   console.log("Dia agradable");
// }

// temperatura > 30 ? console.log("Día caluroso") : console.log("Dia agradable");

// let usuario = {
//   nombre: "juan",
//   edad: 19,
// };

// let permiso;

// if (usuario.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   console.log("Puedes entrar a la fiesta");
// } else {
//   console.log("no puedes entrar a la fiesta");
// }

// let usuario = {
//   nombre: "juan",
//   edad: 19,
// };

// let permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("Puedes entrar a la fiesta") : console.log("no puedes entrar a la fiesta"); // Operador ternario

/* 
operador1 && operador2 retorna operador2 si operador1 represnta algo verdadero, en caso contrario retorna operador1
operador1 || operador2 retorna operador2 si operador1 representa algo falso, en caso contrario retorna operador1
*/

// const carrito = [];

// if(carrito.length === 0){
//   console.log("El carrito esta vacio");
// }

// carrito.length === 0 && console.log("El carrito está vacio");

// const usuario = {
//   nombre: "andres",
//   edad: 15,
// };

// const registro = usuario.edad >= 18 && new Date();
// console.log(registro);

// console.log( 0 || "Falsy") //falsy
// console.log( 40 || "Falsy") //40
// console.log( null || "Falsy")  //falsy
// console.log( undefined || "Falsy") //falsy
// console.log( "Hola Mundo" || "Falsy") //hola mundo
// console.log( "" || "Falsy")  //falsy
// console.log( NaN || "Falsy")  //falsy
// console.log( true || "Falsy")  //true
// console.log( false || "Falsy") //falsy

// const usuario1 = {
//   nombre: "andres",
//   edad: 26,
// };
// const usuario2 = null;

// console.log(usuario1 || "El usuario no existe");
// console.log(usuario2 || "El usuario no existe");

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if(carritoStorage){
//   carrito = carritoStorage;
// }else{
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// console.log( 0 ?? "Nullish")  // 0
// console.log( 40 ?? "Nullish")  // 40
// console.log( null ?? "Nullish")  // Nullish
// console.log( undefined ?? "Nullish")  // Nullish
// console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
// console.log( "" ?? "Nullish")  // ""
// console.log( NaN ?? "Nullish")  // NaN
// console.log( true ?? "Nullish")  // true
// console.log( false ?? "Nullish")  // false

// const usuario = null;

// console.log(usuario.nombre || "El usuario no existe");
// console.log(usuario?.nombre || "El usuario no existe");

// const usuario = {
//   nombre: "andres",
//   telefonos: {
//     casa: "1234",
//     celular: "242134",
//   },
// };

// console.log(usuario?.telefonos?.casa || "la propiedad no existe");

// const usuario = {
//   nombre: "andres",
//   edad: 26,
// };

// let nombre = usuario.nombre;
// let edad = usuario.edad;

// let { nombre } = usuario;
// console.log(nombre);

// const usuario = {
//   nombre: "andres",
//   edad: 26,
//   telefono: {
//     celular: 1234234,
//     casa: 2342,
//     trabajo: 4356,
//   },
// };

// const {
//   nombre,
//   telefono: { trabajo },
// } = usuario;

// console.log(nombre, trabajo);

// const usuario = {
//   nombre: "andres",
//   edad: 12,
// };

// const {
//   nombre: namePerson,
//   edad
// } = usuario;

// console.log(namePerson);

// const description = ({ id, nombre }) => {
//   console.log(id, nombre);
// };

// description({ id: 1, nombre: "andres" });

// const nombres = ["andres", "camila", "sofia", "mariana"];
// const [, a, , b] = nombres;

// console.log(a, b);

// const persona = ["andres", "velasquez"];
// const [nombre, apellido] = persona;

// console.log(nombre, apellido);

// let numero1 = 1;
// let numero2 = numero1;

// numero2 = 5;
// console.log(numero1);

// let objeto1 = {nombre: "andres", edad: 3};
// let objeto2 = {...objeto1};

// objeto2.nombre = "camila";
// objeto2.edad = 45;
// console.log(objeto1);

// const nombres = ["andres", "camila", "sofia", "mariana"];
// console.log(...nombres);
// console.log(nombres.join(" "));

// const numeros = [4, 77, 92, 10, 3, -32, 54, 11];

// console.log(Math.max(...numeros));

// const usuario1 = {
//   nombre: "pepito",
//   edad: 45,
// };

// const usuario2 = {
//   ...usuario1,
//   nombre: "juan",
//   direccion: "AV",
// };

// console.log(usuario2);

// const ejemplo = (...numeros) => {
//   console.log(numeros);
// };

// ejemplo(1, 2, 3, 4);

// const correos = (...emails) => {
//     console.log(emails);
//     emails.forEach((email) => {
//       console.log(email);
//     });
//   };
  
//   correos("andres@gmail.com", "sofia@gmail.com");

//SWEET ALERT
// Swal.fire(
//   'Good job!',
//   'You clicked the button!',
//   'success'
// )

// let boton = document.getElementById("boton");
// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Error!",
//     text: "No puediste guardar los cambios?",
//     icon: "error",
//     confirmButtonText: "OK!",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Genial!",
//     text: "Haz clickeado el botón!",
//     icon: "success",
//     confirmButtonText: "Cool",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Error!",
//     text: "Error inesperado",
//     icon: "error",
//     confirmButtonText: " =( ",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     position: "bottom-end",
//     icon: "success",
//     title: "Your work has been saved",
//     showConfirmButton: false,
//     timer: 1500,
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Sweet!",
//     text: "Modal with a custom image.",
//     imageUrl: "https://unsplash.it/400/200",
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: "Custom image",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Está seguro de eliminar el producto?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Sí, seguro",
//     cancelButtonText: "No, no quiero",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       //codigo requerido
//       Swal.fire({
//         title: "Borrado!",
//         icon: "success",
//         text: "El archivo ha sido borrado",
//       });
//     }
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Ingrese un nombre",
//     input: "text",
//     showCancelButton: true,
//     confirmButtonText: "Look up",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         title: `${result.value}`,
//       });
//     }
//   });
// });

//TOASTIFY
// let boton = document.getElementById("boton");
// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//     style: {
//       background: "linear-gradient(to left, #00b09b, #96c92d)",
//     },
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//     className: "notificacion",
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//     onClick: () => {
//       Toastify({
//         text: "Clickeaste un Toast!",
//         duration: 1500,
//       }).showToast();
//     },
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Click aquí para ir a Coder!",
//     duration: 3000,
//     destination: "https://www.coderhouse.com",
//   }).showToast();
// });

//LUXON
// const DateTime = luxon.DateTime;
// const dt = DateTime.local(2023, 1, 25);
// console.log(dt.c);

// const now = DateTime.now();
// console.log(now.toString());
// console.log(now.year);
// console.log(now.month);
// console.log(now.day);
// console.log(now.second);
// console.log(now.weekday);
// console.log(now.zoneName);
// console.log(now.daysInMonth);

// console.log(now.toLocaleString());
// console.log(now.toLocaleString(DateTime.DATE_FULL));
// console.log(now.toLocaleString(DateTime.TIME_SIMPLE));
// console.log(now.setLocale("es").toLocaleString(DateTime.DATE_FULL));

// console.log(now.toLocaleString(DateTime.DATETIME_SHORT));

// const suma = now.plus({ hours: 5, minutes: 10 });
// console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));

// const resta = now.minus({ month: 1, days: 2 });
// console.log(resta.toLocaleString(DateTime.DATETIME_SHORT));

// const Interval = luxon.Interval;
// const now = DateTime.now();
// const navidad = DateTime.local(2023, 12, 25);

// const i = Interval.fromDateTimes(now, navidad);
// console.log(i.length("days"));
// console.log(i.length("hours"));
// console.log(i.length("minutes"));







//  windows.location = "pagina.html";  => Redirige a otra pagina;







// const eventoFuturo = (res) => {
//     return new Promise( (resolve, reject) => {
//         if (res === 'Pepito') {
//             resolve ('Hola, soy una promesa resuelta')
//         }else{
//             reject ('Hola, soy una promesa rechazada')
//         }
//     })
// }

// console.log(eventoFuturo('Coso'));


// const eventoFuturo = (res) => {
//     return new Promise( (resolve, reject) => {
//         setTimeout ( () => {
//             res ?
//             resolve('Hola, soy una promesa resuelta') :
//             reject('Hola, soy una promesa rechazada')
//         }, 2000)
//     })
// }

// console.log(eventoFuturo(true));

const listado = [
    {id:1, nombre: 'Producto 1', precio : 1500},
    {id:2, nombre: 'Producto 2', precio : 1200},
    {id:3, nombre: 'Producto 3', precio : 1300},
    {id:4, nombre: 'Producto 4', precio : 1100}
]

const pedirProducto = (prod) => {
    return new Promise ( (resolve, reject) => {
        setTimeout ( () => {
            prod ?
            resolve(listado) :
            reject('Ha ocurrido un error')
        }, 2000)
    })
}


pedirProducto()
    .then((loQueQuieraPoner) => {
    console.log(loQueQuieraPoner);
    })
    .catch((coso) => {
        console.log(coso);
    })
    .finally(() => {
         console.log('Fin del proceso');
    });















































































