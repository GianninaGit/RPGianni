function sumarTodos(listaDeNumeros) {
    //retorna la suma de todos los números de la lista
    //[1,2,3,4,5] => 1+2+3+4+5 => 15
    let sumatoria = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        sumatoria = listaDeNumeros[i] + sumatoria;
    }
    return sumatoria;
}
let listaDeNumeros = [6,1,6,8,8,10,99,0,0,1,15,2,4,5,5,2,6];
console.log(`listaDeNumeros: [${listaDeNumeros.join(', ')}]`);
console.log(`sumarTodos: ${sumarTodos(listaDeNumeros)}`);

function hayNumeroPar(listaDeNumeros) {
    //retorna true si al menos un numero de la lista es par, en caso contrario retorna false - ANY
    for (let i = 0; i < listaDeNumeros.length; i++) {
        if (listaDeNumeros[i]%2 == 0) {
            return true;
        }
    }
    return false;
}
//let listaDeNumeros = [6,8,2,4];  
console.log(`hayNumeroPar: ${hayNumeroPar(listaDeNumeros)}`);

function sonTodosPares(listaDeNumeros) {
    //retorna true si todos los números son pares, o false en caso contrario - ALL 
    for (let i = 0; i < listaDeNumeros.length; i++) {
        if (listaDeNumeros[i]%2 != 0) {
            return false
        }
    }
    return true
}
//let listaDeNumeros = [6,8,2,4];  
console.log(`sonTodosPares: ${sonTodosPares(listaDeNumeros)}`);

function filtrarMenos(listaDeNumeros, numero) {
    //retorna todos los números de la lista original que sean menores al número recibido en argumento
    let listaNueva = [];
    for (let i = 0; i < listaDeNumeros.length; i++) {
        if (listaDeNumeros[i] < numero) {
            listaNueva.push(listaDeNumeros[i]);
            //listaNueva = listaNueva + ", " +listaDeNumeros[i] 
        }
    }
    return listaNueva;
}
//let listaDeNumeros = [6,8,2,4];
let numero = 8;
console.log(`número: ${numero}`);
console.log(`filtrarMenos: [${filtrarMenos(listaDeNumeros, numero).join(', ')}]`);

function incrementar(listaDeNumeros) {
    //retorna una lista de numeros donde cada número es incrementado en uno
    let listaNueva = [];
    for (let i = 0; i < listaDeNumeros.length; i++) {
        let numeroIncrementado = listaDeNumeros[i] + 1;
        listaNueva.push(numeroIncrementado);
    }
    return listaNueva;
}
//let listaDeNumeros = [6,8,2,4];
console.log(`incrementar: [${incrementar(listaDeNumeros).join(', ')}]`);

function sinRepetidos(listaDeNumeros) {
    //retorna la misma lista pero sin números repetidos, respetando el orden de la lista original
    let listaNueva = [];
    for (let i = 0; i < listaDeNumeros.length; i++) {
        let contador = 0;
        for (let j = 0; j < listaDeNumeros.length; j++) {
            if (listaDeNumeros[i] == listaDeNumeros[j]) {
                contador = contador + 1;    
            }            
        }   
        if (contador == 1) {
            listaNueva.push(listaDeNumeros[i]);
        }
    }
    return listaNueva;
}

function sinRepetidos2(listaDeNumeros) {
    //retorna la misma lista pero sin números repetidos, respetando el orden de la lista original
    let listaNueva = [];
    for (let i = 0; i < listaDeNumeros.length; i++) {
        let elem = listaDeNumeros[i];

        let seRepitio = false;
        for (let j = i + 1; j < listaDeNumeros.length; j++) { // <- En lo que resta de la lista, checkeo si se repite el número
            if (elem == listaDeNumeros[j]) {
                seRepitio = true;
            }            
        }
        
        if(!seRepitio) {
            listaNueva.push(elem);
        }

    }
    return listaNueva;
}
//let listaDeNumeros = [6, 6, 8, 2, 4, 5, 5, 2, 6] => [8,4]
console.log(`sinRepetidos2: [${sinRepetidos2(listaDeNumeros).join(', ')}]`);

function sinRepetidos3(listaDeNumeros) {
    //retorna la misma lista pero sin números repetidos, respetando el orden de la lista original
    
    
    // Armo tabla/diccionario de repeticiones
    let repeticiones = {}
    for (let i = 0; i < listaDeNumeros.length; i++) {
        let elem = listaDeNumeros[i];
        if (containsKey(repeticiones, elem)) {
            repeticiones[elem] = repeticiones[elem] + 1;
        } else {
            repeticiones[elem] = 0;
        }
    }

    // ----- se construye la listaresultante
    let listaNueva = [];
    for (let i = 0; i < listaDeNumeros.length; i++) {
        const key = listaDeNumeros[i];
        if(repeticiones[key] == 0) {
            listaNueva.push(key);
        }
    }
    

    return listaNueva;

}

function containsKey(unDiccionario, unaKey) {
    return unDiccionario[unaKey] != null;
}
//let listaDeNumeros = [6, 6, 8, 2, 4, 5, 5, 2, 6] => [8,4]
console.log(`sinRepetidos3: [${sinRepetidos3(listaDeNumeros).join(', ')}]`);


function revertir(listaDeNumeros) {
    //retorna la misma lista pero en orden inverso
    let listaNueva = [];
    for (let i = listaDeNumeros.length - 1; i >= 0; i--) {
        listaNueva.push(listaDeNumeros[i]);
    }
    return listaNueva;
}

console.log(`revertir: [${revertir(listaDeNumeros).join(', ')}]`);

function fusionar(listaNum1, listaNum2) {
    //retorna una lista que es el resultante de sumar los números en el mismo índice 
    // 1,2,3 y 3,2,1 => 4,4,4
    let listaMasLarga = [];
    let listaMasCorta = [];
    let listaNueva = [];
    let tope = listaNum1.length;
    if(listaNum2.length < tope) {
        tope = listaNum2.length
    }
    
    for (let i = 0; i < tope; i++) {
        let sumatoria = listaNum1[i] + listaNum2[i];
        listaNueva.push(sumatoria);
    }


    return listaNueva;
}

let listaNum1 = [1,2,3,5];
let listaNum2 = [3,2,1];
console.log(`fusionar: [${fusionar(listaNum1, listaNum2).join(', ')}]`);

function esCapicua(palabra) {
    //retorna true si la palabra es capicua
    for (let i = 0; i < palabra.length / 2; i++) {
        let comienzo = palabra[i];
        let final = palabra[palabra.length-1-i];
        if(comienzo != final) {
            return false
        }
    }
    return true
}
let palabra = "12731";
console.log(`${palabra} esCapicua: ${esCapicua(palabra)}`);

function recorrido(listaDeIndices) {
    //retorna una lista de números que es el resultado de navegar por los ínidices de la lista que recibe, si hay un número negativo, se termina.
    //si junté/imprimí más de 20 números, se termina
    // 2,5,4,1,3,-1 => imprimo/o devoler una lista con estos elementos: 2 - 4 - 3 - 1 - 5 
    let listaNueva = [];
    for (let i = listaDeIndices[0]; listaNueva.length < 20; i = listaDeIndices[i]) {
        //console.log(i);
        if (i < 0) {
            return listaNueva;
        }
        listaNueva.push(i);
    }
    return listaNueva;
}                   //0,1, 2,3, 4, 5, 6, 7. 8,9,10,11,12,13,14,15,16,17,18,19, 20,21
let listaDeIndices = [2,13,8,14,10,19,13,11,5,7,4, 16, 9,15, 18,11,3, 0,17,6, 21, 20 ];
console.log(`recorrido: [${recorrido(listaDeIndices).join(', ')}]`);


