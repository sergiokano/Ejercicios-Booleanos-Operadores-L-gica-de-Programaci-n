console.log("Hola Mundo");

// 1 . Booleanos ---------------------------------------------------------
console.log("1.Booleanos---------------");

// Dados 2 variables booleanas:
booleano1 = true;
booleano2 = false;

// // 1. Crear variable booleanoAnd cuyo valor sea la comparación booleana
// booleano1 AND booleano2
const booleanoAnd = booleano1 && booleano2;
console.log("1.1 - " + booleanoAnd);

// // 2. Crear variable booleanoOr cuyo valor sea la comparación booleana
// booleano1  OR booleano2
const booleanoOr = booleano1 || booleano2;
console.log("1.2 - " + booleanoOr);

// // 3. Crear variable booleanoNot cuyo valor sea la comparación booleana
// no booleano1
const booleanoNot = !booleano1;
console.log("1.3 - " + booleanoNot);

// // 4. Crear variable booleanoMix0 cuyo valor sea la comparación booleana
// (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
const booleanoMix0 = booleanoOr && (booleano1 || (!booleano1 && !booleano2));

// 2. Operadores ---------------------------------------------------------
console.log("2. Operadores---------------");

// Crear variable valorDivision cuyo valor sea la división de 17
// entre 3 y que solo muestre 2 decimales en el resultado
const valorDivision = 17 / 3;
console.log("2.1 - " + valorDivision.toFixed(2));

// Crear variable valorResto cuyo valor sea el resto de 17 entre 7
// % resolver con eso también
console.log("2.2");
const valorResto2 = 17 % 7;
console.log(valorResto2);

// 3. Lógica de programación ---------------------------------------------------------
console.log("3. Lógica de programación ---------------");

// Crea una variable A cuyo valor sea el número 9, después crea una
// variable B cuyo valor sea un string con el número 9, desarrolla la
// lógica para que cuando A == B muestre por consola “Son iguales”,
// ¿qué pasa si en vez de tener A == B, comprobamos que A === B?
console.log("3.1");
const A = 9;
const B = "9";
if (A == B) {
  console.log("Son Iguales");
} else {
  console.log("No Son Iguales");
}
if (A === B) {
  console.log("Son Iguales");
} else {
  console.log("No Son Iguales");
}
console.log(
  "Es distinto porque cuando comprobamos con == se refiere al valor final, a lo que representa sin tener en cuenta tipos, con === estamos teniendo en cuenta tipos, por tanto una palabra no es igual que un numero"
);

// Crea una variable mochila que sea un array de elementos, desarrolla
// la lógica para que sí mochila tiene más de 10 elementos muestre por
// consola el mensaje “No puedo cargar con tantas cosas”, sí mochila
// contiene entre 10 y 2 elementos se muestre por consola “Que bien voy
// con mi mochila” y si no muestre por consola “Creo q no necesito una mochila”
console.log("3.2");
const mochila = [
  "portatil",
  "raton",
  "estuche",
  "botella",
  "libreta",
  "crema solar",
  "cargador portatil",
  "cargador movil",
  "powerbank",
];

let elementos = mochila.length;
if (2 < elementos < 10) {
  console.log("Que bien voy con mi mochila");
} else {
  console.log("Creo que no necesito una mochila");
}

// Crear variable contarHasta10 con valor 0 e incrementar su valor con
// un bucle hasta que se verifique que contarHasta10 === 10
console.log("3.3");

let contarHasta10 = 0;

for (let i = 0; i <= 10; i++) {
  contarHasta10 = i;
}

console.log(contarHasta10 === 10);

// Crea una variable diaFestivo que sea de tipo boolean.
// Crea un ternario que si diaFestivo es true devuelve un console.log
// de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’
console.log("3.4");

const diaFestivo = true;
const queHagoHoy = !diaFestivo ? "Hoy trabajo" : "Hoy vacaciones";
console.log(queHagoHoy);

// Crea una variable arrayBucle tipo array vacía, rellénala con números
// del 4 al 18 utilizando un bucle
console.log("3.5");

const arrayBucle = [];
for (let i = 4; i <= 18; i++) {
  arrayBucle.push(i);
}
console.log(arrayBucle);

// Recorre la variable creada anteriormente arrayBucle ,suma todos
// sus elementos y guárdalos en una variable de nombre resultado
console.log("3.6");

let totalArrayBucle = 0;

for (const elementosArray of arrayBucle) {
  totalArrayBucle += elementosArray;
}
console.log(totalArrayBucle);

// Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’],
// recorrelo utilizando el bucle “for of” y muestra por consola todos sus
// elementos, después recórrelo utilizando el bucle “for in” mostrando también
// por consola todos sus elementos
console.log("3.7");

arraySofia = ["Con", "Sofia", "aprendiendo", "bucles"];
for (const lista of arraySofia) {
  console.log(lista);
}

for (const lista2 in arraySofia) {
  console.log(lista2);
}

// Crea un bucle utilizando “while” que itere 20 veces y muestre por consola
// “Patata” cada vez que el número de la iteración sea múltiplo de 3
console.log("3.8");

let i = 0;
while (i < 20) {
  if (i % 3 === 0) {
    console.log("Patata " + i);
  }
  i++;
}
