//----------Crear un Array-------------

let frutas = ["Manzana", "Banana"];

console.log("Array: ", frutas)
console.log("1) Length: ", frutas.length); // 2

//----------Acceder a un elemento de Array mediante su índice-------------
let primero = frutas[0]; // Manzana
let ultimo = frutas[frutas.length - 1]; // Banana

console.log("2) Acceder a un elemento de Array mediante su índice [X]: ", primero, ultimo)

//----------Recorrer un Array-------------
frutas.forEach(function (elemento, indice, array) {
    console.log("3) Recorrer un Array: array.forEach()", elemento, indice);
});

//----------Añadir un elemento al final de un Array-------------
let nuevaLongitud1 = frutas.push("Naranja"); // Añade "Naranja" al final

console.log("4) Añadir un elemento al final de un Array: array.push(): ", nuevaLongitud1, frutas); // ["Manzana", "Banana", "Naranja"]

//----------Eliminar el último elemento de un Array-------------
let ultimoEliminar = frutas.pop(); // Elimina "Naranja" del final

console.log("5) Eliminar el último elemento de un Array array.pop(): ", ultimoEliminar, frutas); // ["Manzana", "Banana"]

//----------Añadir un elemento al principio de un Array-------------
let nuevaLongitud2 = frutas.unshift("Fresa"); // Añade "Fresa" al inicio

console.log("6) Añadir un elemento al principio de un Array: array.unshift('elemento a añadir'): ", nuevaLongitud2, frutas); // ["Fresa" ,"Manzana", "Banana"]

//----------Eliminar el primer elemento de un Array-------------
let primeroEliminar = frutas.shift(); // Elimina "Fresa" del inicio

console.log("7) Eliminar el primer elemento de un Array: array.shift(): ", primeroEliminar, frutas); // ["Manzana", "Banana"]

//----------Encontrar el índice de un elemento del Array-------------
frutas.push("Fresa"); // ["Manzana", "Banana", "Fresa"]

let position = frutas.indexOf("Banana"); // (pos) es la posición para abreviar -> 1
console.log("8) Encontrar el índice de un elemento del Array: array.indexOf('elemento a buscar'): ", position, frutas); // ["Manzana", "Banana"]

//----------Eliminar un único elemento mediante su posición-------------
/**
 * Eliminamos "Banana" del array pasándole dos parámetros: 
 * - la posición del primer elemento que se elimina y 
 * - el número de elementos que queremos eliminar. 
 * De esta forma, .splice(pos, 1) empieza en la posición que nos indica el valor de la variable pos y elimina 1 elemento. 
 * En este caso, como pos vale 1, elimina un elemento comenzando en la posición 1 del array, es decir "Banana".
 */
let elementoEliminado = frutas.splice(position, 1); // ["Manzana", "Fresa"]

console.log("9) Eliminar un único elemento mediante su posición: array.splice(posicion, cant de elemn a eliminar): ", position, frutas); // ["Manzana", "Banana"]

//----------Eliminar varios elementos a partir de una posición-------------
/**
 * Con .splice() no solo se puede eliminar elementos del array, 
 * si no que también podemos extraerlos guardándolo en un nuevo array. 
 * ¡Ojo! que al hacer esto estaríamos modificando el array de origen.
 */


let vegetales = ["Repollo", "Nabo", "Rábano", "Zanahoria"];

console.log("10) Eliminar varios elementos a partir de una posición: .splice(pos, numElementos)"); 
console.log("10) Array inicial: ", vegetales); // ["Repollo", "Nabo", "Rábano", "Zanahoria"]

let pos = 1, 
numElementos = 2;

let elementosEliminados = vegetales.splice(pos, numElementos);

console.log("10) Posición desde la cual empezar a eliminar: ", pos); // 1
console.log("10) Cantidad de eleme a eliminar: ", numElementos); // 2
console.log("10) Elementos eliminados: ", elementosEliminados); // ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"
console.log("10) Lo que actualmente tiene el array: ", vegetales); // ["Nabo", "Rábano"] Se ha modificado el array inicial.

//----------Copiar un Array-------------
let copiaArray = vegetales.slice(); // ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"

console.log("11) Copiar un Array array.slice(): ", copiaArray);

//----------.map()------------- Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que el original.
let array = [1,2,3,4,5,6,7]
console.log("Array original: ", array)

let mapArray = array.map(element => element + 10)
console.log(".map(): ",  mapArray)

//----------.filter()------------- Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.
let filterArray = array.filter(element => element == 3 || element == 7)
console.log(".filter(): ", filterArray)

//----------.forEach()------------- Permite iterar el contenido de un array. 
//Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.
let forEachArray = array.forEach((element, i) => {
    console.log(`El elemento ${element} se encuentra en el índice ${i} del array`)
})

//----------.find()------------- Recorre el array y retorna la primera coincidencia del elemento que se busca.
let findArray = array.find(element => element > 3)
console.log(".find(): ", findArray)


//----------.sort()------------- Ordena los elementos del array y retorna el arreglo ordenado. L
//os elementos se ordenarán en orden ascendente (de la A a la Z) por defecto.
console.log(".sort() por defecto ascendente: ", array.sort())

let descArray = array.sort((a, b) => a > b ? -1 : 1)
console.log(".sort() descendiente: ", descArray)

let alfabeth = ['g', 'd', 'c', 'o', 'd', 'e', 'v']
console.log(".sort() por defecto ascendente en strings: ", alfabeth.sort())

let ascendenteString = alfabeth.sort((a, b) => a > b ? 1 : -1)
console.log(".sort() ascendente en strings: ", ascendenteString)

let descendenteString = alfabeth.sort((a, b) => a > b ? -1 : 1)
console.log(".sort() descendente en strings: ", descendenteString)

//----------.some()------------- Itera el array y retorna un booleano si como mínimo uno de los elementos presentes en el array pasa una condición determinada. 
//Recibe un callback que se encargara de preguntar aquello que queremos dentro del array.

let isSomeNumGreaterThanFour = array.some(element => element > 4)
console.log(".some() algún elemento es mayor a 4: ", isSomeNumGreaterThanFour)

let isSomeNumLessThanZero = array.some(element => element < 0)
console.log(".some() algún elemento es menor a 0: ", isSomeNumLessThanZero)

//----------.every()------------- Es similar al some(), ya que itera el array y retorna un booleano. 
//Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada.

let areAllNumsGreaterThanFour = array.every(element => element > 4)
console.log(".every() todos los elementos son mayores a 4: ", areAllNumsGreaterThanFour)

let areAllNumsLessThanTen = array.every(element => element < 10)
console.log(".every() todos los elementos son menores a 10: ", areAllNumsLessThanTen)

//----------.concat()------------- Se utiliza para unir dos o más arrays. 
//Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
let array1 = ['a', 'b']
let array2 = ['x', 'y', 'z']
let concatArray = array2.concat(array1)

console.log(".concat(): ", concatArray)

//----------.includes()------------- Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.
console.log(".includes(2): ", array.includes(2))

//----------.join()------------- Une todos los elementos de un array en una cadena. 
//Podemos pasarle como parámetro el carácter de separación que debe agregar entre los elementos.
let array3 = [1,2,3,4,5,6,7]

console.log(".join('-'): ", array3.join('-'))
console.log(".join(''): ", array3.join(''))
console.log(".join(): ", array3.join())

//----------.reduce()------------- Aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor.
let reduceArray = array3.reduce((acumulador, current) => acumulador + current)

console.log(".reduce(): ", reduceArray)

//----------.indexOf()------------- Retorna el primer índice (en caso de que se repita el elem en varias posiciones del array, por ej) 
//en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
console.log(".indexOf(): ", array3.indexOf()) //-1
console.log(".indexOf(0): ", array3.indexOf(1)) // 0

//----------.findIndex()------------- Retorna el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. 
//En caso contrario devuelve -1.
let findIndexArray = array3.findIndex(element => element == 6)
console.log(".findIndex(6): ", findIndexArray)

//----------.fill()------------- Cambia todos los elementos de un array por un valor estático, 
//desde el índice de inicio hasta el índice final. Retorna el array modificado.
//array.fill(valor a poner, posición inicial, posición final)
let array4 = [1,2,3,4,5]
console.log("array4 antes de ser modificado: ", array4)

array4.fill('a', 1)
console.log(".fill('a', 1): Llenar con valor 'a' desde la posción 1 al final: ", array4)
array4.fill('b', 2, 4)
console.log(".fill('b', 1, 3): Llenar con valor 'a' desde la posción 1 a 3: ", array4)

//----------.push()------------- Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
console.log(".push(): ", array4.push('banana'))

//----------.pop()------------- Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
console.log(".pop(): ", array4.pop())

//----------.shift()------------- Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
console.log("array4 antes de ser modificado: ", array4)
console.log(".shift(): ", array4.shift())
console.log("array4 modificado: ", array4)

//----------.unshift()------------- Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
console.log("array4 antes de ser modificado: ", array4)
console.log(".unshift('c'): ", array4.unshift('c', 'd', 1))
console.log("array4 modificado: ", array4)

//----------.slice()------------- Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). 
//El array original no se modificará.
console.log("array4 original, no se modificará: ", array4)
let sliceArray = array4.slice(2, 4)
console.log(".slice(2,4): ", sliceArray)

//----------.reverse()------------- Invierte el orden de los elementos de un array. 
//El primer elemento pasa a ser el último y el último pasa a ser el primero. Modifica al array original
console.log("array4 antes de ser modificado: ", array4)
console.log(".reverse(): ", array4.reverse())
console.log("array4 modificado: ", array4)

//----------.splice()------------- Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
//array.splice(posicion, cantidad, valor)
let array5 = ['apple', 'orange', 'pear']
console.log("array5 antes de ser modificado: ", array5)
array5.splice(2, 0, 'banana')
console.log(".splice(2, 0, 'banana'): Agrega banana en la posición 2", array5)

//array5.splice(1, 2, 'banana')




//----------Eliminar un único elemento mediante su posición-------------
/**
 * Eliminamos "Banana" del array pasándole dos parámetros: 
 * - la posición del primer elemento que se elimina y 
 * - el número de elementos que queremos eliminar. 
 * De esta forma, .splice(pos, 1) empieza en la posición que nos indica el valor de la variable pos y elimina 1 elemento. 
 * En este caso, como pos vale 1, elimina un elemento comenzando en la posición 1 del array, es decir "Banana".
 */

let array6 = ['apple', 'orange', 'pear', 'manzana', 'banana']
console.log("array6 original: ", array6)
console.log(".splice('position 2, cant a eliminar 1): ", array6.splice(2, 1))
console.log("array6 modificado: ", array6)

let array7 = ['apple', 'orange', 'pear', 'manzana', 'banana']

console.log(".splice('position 2, cant a eliminar 2): ", array7.splice(2, 2))
console.log("array7 modificado: ", array7)


//----------Eliminar varios elementos a partir de una posición-------------
/**
 * Con .splice() no solo se puede eliminar elementos del array, 
 * si no que también podemos extraerlos guardándolo en un nuevo array. 
 * ¡Ojo! que al hacer esto estaríamos modificando el array de origen.
 */


let vegetales2 = ["Repollo", "Nabo", "Rábano", "Zanahoria"];

console.log("10) Eliminar varios elementos a partir de una posición: .splice(pos, numElementos)"); 
console.log("10) Array inicial: ", vegetales2); // ["Repollo", "Nabo", "Rábano", "Zanahoria"]

let pos2 = 1, 
numElementos2 = 2;

let elementosEliminados2 = vegetales2.splice(pos2, numElementos2);

console.log("10) Posición desde la cual empezar a eliminar: ", pos2); // 1
console.log("10) Cantidad de eleme a eliminar: ", numElementos2); // 2
console.log("10) Elementos eliminados: ", elementosEliminados2); // ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"
console.log("10) Lo que actualmente tiene el array: ", vegetales2); // ["Nabo", "Rábano"] Se ha modificado el array inicial.

//----------.lastIndexOf()------------- Busca un elemento en un array y devuelve su posición. 
//Comienza buscando por el final del array. Retorna -1 si el elemento no se encontrara.
console.log(".lastIndexOf('Repollo'): ", vegetales2.lastIndexOf("Repollo"))

//----------.flat()------------- Crea una nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.
//No modifica el array original.
let array8 = [1,2,3,4,5, ['a', 'b']]
console.log(".flat(): ", array8.flat())

//----------.isArray()------------- Determina si el valor pasado es un Array.
console.log(".isArray(array8): ", Array.isArray(array8))

//----------.from()------------- Crea una nueva instancia de Array a partir de un objeto iterable.
let abcString = "abc"
let fromString = Array.from(abcString)

console.log(".from(): ", fromString)
console.log("string original no se modifica: ", abcString)