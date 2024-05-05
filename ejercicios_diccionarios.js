/* 1365. How Many Numbers Are Smaller Than the Current Number
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
Return the answer in an array.

 

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]

*/

function listaDeNumerosMenoresAlCurrentNumber(lista1DeNumeros) {
    const cache = {} //para almacenar los resultados calculados.
    let listaNueva = []; //resultado final a entregar.
    //let cantidadDeChequeos = 0; //cuenta la cant

    /* 1er for: itera sobre lista de numeros recibida.
    Para cada elem (currentKey) de la lista, 
    verifica si su valor ya existe en el diccionario (cache).
    Si el valor ya existe en cache, 
    lo agrega a lista nueva (la lista a entregar)*/
    for (let i = 0; i < lista1DeNumeros.length; i++) {
        let currentKey = lista1DeNumeros[i];
        // -->
        if(cache[currentKey] != undefined) {
            listaNueva.push(cache[currentKey]);
        } else {

            /*Si el valor de la currentKey no está en el diccionario
             */
            let contador = 0;    
            //console.log("Entre al FOR");
            for (let j = 0; j < lista1DeNumeros.length; j++) {
                //cantidadDeChequeos += 1;
                if (lista1DeNumeros[j] < currentKey) {
                    contador += 1;
                }        
            }
            cache[currentKey] = contador;
            listaNueva.push(contador);
        }
        console.log(cache)
    }
    //console.log("CHEQUEOS CACHE: ", cantidadDeChequeos);
    return listaNueva;
}
console.log("Lista 1:")
console.log(listaDeNumerosMenoresAlCurrentNumber([6,5,4,8]))


function listaDeNumerosMenoresAlCurrentNumber2(nums) {
    const repeticiones = {}

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]; 
        repeticiones[n] = (repeticiones[n] || 0) + 1;
    }

    let cantidadDeChequeos = 0;
    let listaNueva = [];
    for (let i = 0; i < nums.length; i++) {
        let currentKey = nums[i];
        let contador = 0;
        for(let k in repeticiones) {
            cantidadDeChequeos += 1;
            if(k != currentKey && k < currentKey) {
                contador += repeticiones[k];
            }
        }
        listaNueva.push(contador);
    }
    console.log("CHECKEOS CON REPETICIONES: ", cantidadDeChequeos)
    return listaNueva;
}

let lista1DeNumeros = [8,1,2,2,2,3,3,7,8]; // -> [4,0,1,1,3]

console.log(`lista De Numeros Menores Al CurrentNumber: [${listaDeNumerosMenoresAlCurrentNumber(lista1DeNumeros).join(', ')}]`);
console.log("-------------------------------------------\n\n")

console.log(`lista De Numeros Menores Al CurrentNumber: [${listaDeNumerosMenoresAlCurrentNumber2(lista1DeNumeros).join(', ')}]`);
console.log("-------------------------------------------\n\n")
function diccionarioDeNumerosMenoresAlCurrentNumber(lista1DeNumeros) {
    let diccionarioNuevo = {};
    for (let i = 0; i < lista1DeNumeros.length; i++) {
        let currentKey = lista1DeNumeros[i];
        let contador = 0;    
        for (let j = 0; j < lista1DeNumeros.length; j++) {
            if (lista1DeNumeros[j] < currentKey) {
                contador += 1;
            }        
        }
        diccionarioNuevo[currentKey] = contador;
    }
    return diccionarioNuevo;
}
/* lista = [8,1,2,2,3];
diccionarioNuevo = {
    8: 4,
    1: 0,
    2: 1,
    2: 1,
    3: 3
}
lista = [6,5,4,8]
diccionario = {
    6: 2,
    5: 1,
    4; 0,
    8: 3
}
*/
console.log(`diccionario De Numeros Menores Al CurrentNumber: `);
console.log(diccionarioDeNumerosMenoresAlCurrentNumber(lista1DeNumeros));

/* 2956. Find Common Elements Between Two Arrays
You are given two 0-indexed integer arrays nums1 and nums2 of sizes n and m, respectively.

Consider calculating the following values:

    The number of indices i such that 0 <= i < n and nums1[i] occurs at least once in nums2.
    The number of indices i such that 0 <= i < m and nums2[i] occurs at least once in nums1.

Return an integer array answer of size 2 containing the two values in the above order.

Example 1:

Input: nums1 = [4,3,2,3,1], nums2 = [2,2,5,2,3,6]
Output: [3,4]
Explanation: We calculate the values as follows:
- The elements at indices 1, 2, and 3 in nums1 occur at least once in nums2. So the first value is 3.
- The elements at indices 0, 1, 3, and 4 in nums2 occur at least once in nums1. So the second value is 4.

Example 2:

Input: nums1 = [3,4,2,3], nums2 = [1,5]
Output: [0,0]
Explanation: There are no common elements between the two arrays, so the two values will be 0.
*/
function findCommonElements(array1, array2) {
    let cantidadDeIndicesCompartidos = [0, 0];
    for (let i  = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                cantidadDeIndicesCompartidos[0] +=1 
                break;
            }
        }
    }
    for (let j  = 0; j < array2.length; j++) {
        for (let i = 0; i < array1.length; i++) {
            if (array2[j] == array1[i]) {
                cantidadDeIndicesCompartidos[1] +=1 
                break;
            }
        }
    }

    return cantidadDeIndicesCompartidos;
}
let array1 = [4,3,2,3,1];
let array2 = [2,2,5,2,3,6];

//console.log(`Find Common Elements: [${findCommonElements(array1, array2).join(', ')}]`);
console.log(findCommonElements(array1, array2));


/* 804. Unique Morse Code Words
International Morse Code defines a standard encoding where each letter is mapped to a series of dots 
and dashes, as follows:

    'a' maps to ".-",
    'b' maps to "-...",
    'c' maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.",
"--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

Given an array of strings words where each word can be written as a concatenation of the Morse code 
of each letter.

    For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", 
    and "-...". We will call such a concatenation the transformation of a word.

Return the number of different transformations among all words we have.

Example 1:

Input: words = ["gin","zen","gig","msg"]
Output: 2
Explanation: The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.".

Example 2:

Input: words = ["a"]
Output: 1
*/

let alfabetoMorse = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--.."
}

function cantidadDeCodigosMorseUnicos(arrayOfStrings) {
    let cantidadDeCodigos = 0;
    
    let palabrasEnMorse = {};
    for (let palabra = 0; palabra < arrayOfStrings.length; palabra++) {
        let palabraIterada = arrayOfStrings[palabra];
        console.log(`palabra iterada en abc: ${palabraIterada}`);
        let unaPalabraEnMorse = "";

        for (let letra = 0; letra < palabraIterada.length; letra++) {
            let keyIterada = palabraIterada[letra];
            console.log(`key iterada: ${keyIterada}`);

            let valorLetraEnMorse = alfabetoMorse[keyIterada];
            //console.log(`valor letra en morse: ${valorLetraEnMorse}`);
            unaPalabraEnMorse += valorLetraEnMorse;
        }        
        console.log(`palabra iterada en morse: ${unaPalabraEnMorse}`);
        palabrasEnMorse[palabraIterada] = unaPalabraEnMorse;

    }
    console.log(palabrasEnMorse);

    
    let diccionarioDePalabrasEnMorse = Object.keys(palabrasEnMorse);

    console.log(diccionarioDePalabrasEnMorse)
    return cantidadDeCodigos;

} 

let words = ["gin","zen","gig","msg"];
console.log(`Cantidad de códigos morse únicos: `);
console.log(cantidadDeCodigosMorseUnicos(words));


/* 2325. Decode the Message
You are given the strings key and message, which represent a cipher 
key and a secret message, respectively. The steps to decode message are as follows:
    Use the first appearance of all 26 lowercase English letters in key as 
    the order of the substitution table.
    Align the substitution table with the regular English alphabet.
    Each letter in message is then substituted using the table.
    Spaces ' ' are transformed to themselves.

    For example, given key = "happy boy" (actual key would have at least one 
        instance of each letter in the alphabet), we have the partial substitution 
        table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e',
         'o' -> 'f').
Return the decoded message.

Example 1:
Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t 
suepuv"
Output: "this is a secret"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "the quick brown 
fox jumps over the lazy dog".

Example 2:
Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk
 vcnjrdb"
Output: "the five boxing wizards jump quickly"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in 
"eljuxhpwnyrdgtqkviszcfmabo".
*/


/*1512. Number of Good Pairs
 
Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:
Input: nums = [1,2,3]
Output: 0
*/