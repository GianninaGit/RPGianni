function sumarTodos(listaDeNumeros) {
    //retorna la suma de todos los números de la lista
    //[1,2,3,4,5] => 1+2+3+4+5 => 15
    let suma = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        suma += listaDeNumeros[i];
        
    }
    return suma;
}
console.log("Sumar todos: ", sumarTodos([1,2,3,4,5]));

function hayNumeroPar(listaDeNumeros) {
    /*retorna true si al menos un numero de la lista es par, en caso contrario 
    retorna false - ANY */
    for (let i = 0; i < listaDeNumeros.length; i++) {
        let num = listaDeNumeros[i];
        if (num % 2 == 0) {
            return true;
        }
    }
    return false;
}
console.log("Hay número par: ", hayNumeroPar([1,2,3,5]));
console.log("Hay número par: ", hayNumeroPar([1,3,5]));

function sonTodosPares(listaDeNumeros) {
    //retorna true si todos los números son pares, o false en caso contrario - ALL 
    for (let i = 0; i < listaDeNumeros.length; i++) {
        let num = listaDeNumeros[i];
        if (num % 2 != 0) {
            return false;
        }
    }
    return true;
}
console.log("Son todos pares: ", sonTodosPares([1,2,3,5]));
console.log("Son todos pares: ", sonTodosPares([2,4,6]));

function filtrarMenos(listaDeNumeros, numero) {
    //retorna todos los números de la lista original que sean menores al número recibido en argumento
}