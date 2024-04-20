// Función que dado un string, dice cuantas veces aparece la letra a
function cuantasVecesApareceLetra(palabra) {
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        const letra = palabra[i];
        if (letra == "a" ) {
            contador +=1;
        }
        
    }
    return contador;
}

console.log(cuantasVecesApareceLetra("holaa"))

// Devolver la letra con el numero de repeticiones más alto, entre a y e
function letraConMasRepeticiones(palabra){
    let contadorA = 0;
    let contadorE = 0;
    for (let i = 0; i < palabra.length; i++) {
        const letra = palabra[i];
        if (letra == "a" ) {
            contadorA +=1;
        }
        if (letra == "e" ) {
            contadorE +=1;
        }
        
    }
    if (contadorA < contadorE) {
        return contadorE;
    }
    return contadorA;
}

console.log(letraConMasRepeticiones("arieeeeel alvarez"))

// Lo mismo pero entre A E y U

function letraConMasRepeticionesAEU(palabra){
    let repeticiones = {}

    for (let i = 0; i < palabra.length; i++) {
        const letra = palabra[i];
        repeticiones[letra] = (repeticiones[letra] || 0) + 1;
    }
    
    return numMasGrandeDeLista(Object.values(repeticiones))
}

// IMPORTANTE!!:
function DeRecuerdo() {
    const unDiccionario = { "a": 2, "b": 5}
    const keys = Object.keys(unDiccionario); // -->     ["a", "b"]
    const valores = Object.values(unDiccionario); // --> [2,5]

    //Asigno un valor nuevo:
    unDiccionario["a"] = 8;
    const unaKey = "b";
    unDiccionario[unaKey] = 1;  // --> { "a": 8, "b": 1 }

    // Forma de iterar 
    for (let i = 0; i < keys.length; i++) {
        const element = unDiccionario[keys[i]];
    }

    // Forma de iterar 
    for (key in keys) {
        const element = unDiccionario[key];
    }

    // Forma de iterar 
    for (key in unDiccionario) {
        const element = unDiccionario[key];
    }
}

console.log(letraConMasRepeticionesAEU("aeefff ooooooooooo"))

function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function numMasGrandeDeLista(listaNumeros) {
    let numeroMasGrande = listaNumeros[0];
    
    for (let i = 0; i < listaNumeros.length; i++) {
        numeroMasGrande = max(numeroMasGrande, listaNumeros[i]);
    }

    return numeroMasGrande;
}