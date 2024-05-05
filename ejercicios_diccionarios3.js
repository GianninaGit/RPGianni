/* 1365. How Many Numbers Are Smaller Than the Current Number
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
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

function cantidadDeNumsMenorAlCurrent(arrayOfNums) {
    let listaNueva = [];
    let cacheDiccionario = {};

    for (let i = 0; i < arrayOfNums.length; i++) {

    
        if (cacheDiccionario[arrayOfNums[i]] != undefined) {
            listaNueva.push(cacheDiccionario[arrayOfNums[i]])
        } else {
            
            let contador = 0;

            for (let j = 0; j < arrayOfNums.length; j++) { 
                if (arrayOfNums[j] < arrayOfNums[i]) {
                    contador += 1;
                }
            }
            cacheDiccionario[arrayOfNums[i]] = contador;
            listaNueva.push(contador);    
        }
        
    }
    return listaNueva;
}

let arrayOfNums = [8,1,2,2,3]; // [6,5,4,8];
console.log("How many numbers are smaller than the current number:")
console.log(cantidadDeNumsMenorAlCurrent(arrayOfNums));

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

--------- ESTRATEGIA -----------
1. Iterar sobre los dos arrays recibidos y construir dos diccionarios registrando 
clave/valor -> elem/cantDeApariciones
2. Iterar sobre la clave de cada diccionario para ver si está presente en el otro diccionario.
3. Si está presente, aumentar un contador.
4. Armar el output con el resultado de ambos contadores.
*/

function commonElements(array1, array2) {
    let output = [0, 0];
    let diccionario1 = {};
    let diccionario2 = {};
    
    //1:
    for (let i = 0; i < array1.length; i++) {
        let currentkey1 = array1[i];
        diccionario1[currentkey1] = (diccionario1[currentkey1] || 0) + 1;
    }
    console.log(diccionario1)

    for (let j = 0; j < array2.length; j++) {
        let currentKey2 = array2[j];
        diccionario2[currentKey2] = (diccionario2[currentKey2] || 0) + 1;
    }
    console.log(diccionario2)

    //2:
    for (let key1 in diccionario1) {
        if (diccionario2[key1] != undefined) {
            //3:
            output[0] += diccionario1[key1];
        }
    }
    for (let key2 in diccionario2) {
        if (diccionario1[key2] != undefined) {
            //3:
            output[1] += diccionario2[key2];
        }
    }
    return output;
}

let array1 = [3,4,2,3] //[4,3,2,3,1];
let array2 = [1,5] //[2,2,5,2,3,6];
console.log("Find common elements between two arrays:")
console.log(commonElements(array1, array2))

/* 804. Unique Morse Code Words
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

    'a' maps to ".-",
    'b' maps to "-...",
    'c' maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

    For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.

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

--------------------ESTRATEGIA--------------------
1. Creo un diccionario que tenga clave/valor -> letra/morse.
2. Iterar sobre cada palabra recibida y convertirla a morse.
3. Si la palabra en morse es nuevaa, la guardo en un diccionario nuevo.
Si ya existe, no la tengo en cuenta.
4. Cuento el total de palabras en morse y retorno ese número.
*/

function palabrasMorse(words) {
    let cantidad = 0;
    let dictDePalabrasEnMorse = {};

    //1:
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
    };

    //2:
    for (let i = 0; i < words.length; i++) { // i = 0 ---- words[i] = "gin"
        
        let palabra = words[i];
        
        let palabraEnMorse = '';

        for (let j = 0; j < palabra.length; j++) {
            
            let letra = palabra[j]

            palabraEnMorse = palabraEnMorse + alfabetoMorse[letra]
            
            
        }


        dictDePalabrasEnMorse[palabraEnMorse] = 1;
        
        console.log(palabra, ": ", palabraEnMorse);
    }
    cantidad = Object.keys(dictDePalabrasEnMorse).length;

    return cantidad;
}

let words = ["a"] //["gin","zen","gig","msg"]
console.log("Unique Morse Code Words:");
console.log(palabrasMorse(words));


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
Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
Output: "the five boxing wizards jump quickly"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in 
"eljuxhpwnyrdgtqkviszcfmabo".
---------------------------------ESTRATEGIA------------------------------------
1) Crear un diccionario vacío y un output
2) Iterar sobre key y asignar cada key a una letra del abecedario
3) Iterar sobre el secret message y usar cada letra como key del diccionario, 
y usar su valor para completar el output

*/


function decodeMessage (cipherKey, secretMessage) {
    let abecedario = "abcdefghijklmnopqrstuvwxyz";
    let diccionario = {};
    let output = "";
    let abcIndice = 0;

    for (let i = 0; i < cipherKey.length; i++) {

        let keyDeCipherKey = cipherKey[i];

        if ((diccionario[keyDeCipherKey] == undefined && keyDeCipherKey != ' ')) {
            
            diccionario[keyDeCipherKey] = abecedario[abcIndice];
            //y avanzo el abecedario
            abcIndice += 1;    
            }
        }
    
    for (let i = 0; i < secretMessage.length; i++) {
        
        let letraSecreta = secretMessage[i];
        
        if (letraSecreta in diccionario) {
            output = output + diccionario[letraSecreta];
        } else {
            output = output + " ";
        }
    }
    
    return output;
}

let cipherKey = "eljuxhpwnyrdgtqkviszcfmabo" //"the quick brown fox jumps over the lazy dog";
let secretMessage = "zwx hnfx lqantp mnoeius ycgk vcnjrdb" //"vkbs bs t suepuv";
console.log("Decode the Message:")
console.log(decodeMessage(cipherKey, secretMessage))


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
-----------------ESTRATEGIA---------------
1) Creo un registro con el valor de cada posición
*/

function paresPosibles(nums) {
    let goodPairs = 0;
    let registro = {};
    
    //1)
    for (let i = 0; i < nums.length; i++) {
        
        let currentNumber = nums[i];
        registro[i] = currentNumber
        
    }

    let keys = Object.keys(registro);

    for (let key in keys) {
        for (let j in keys) {
            if (key < j && registro[key] == registro[j]) {
                goodPairs += 1
            }
        }
    }
    
    return goodPairs;
}

let nums = [1,2,3] //[1,1,1,1] //[1,2,3,1,1,3];
console.log("Number of Good Pairs: ", paresPosibles(nums));
