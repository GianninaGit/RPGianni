/* 217. Contains Duplicate
Given an integer array nums, return true if any value appears at 
least twice in the array, and return false if every element is distinct.
Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
---------ESTRATEGIA----------
Creo diccionario vacío
Agrego valores pero si encuentro un valor repetido que ya existe en el registro
retorno true
Si completé recorrí todo el array y no encontré repeticiones en el registro
retorno false, no hay duplicados
*/
function containsDuplicate(array) {
    let existElement = {};

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (existElement[element]){
            return true;
        } else {
            existElement[element] = true;
        }
    }
    return false;
}
console.log("Contains duplicate 1: ", containsDuplicate([1,2,3,1]));
console.log("Contains duplicate 2: ", containsDuplicate([1,2,3,4]));
console.log("Contains duplicate 3: ", containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

/*242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or
 phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

------------ESTRATEGIA----------
1) si los largos son distintos, retornar false
2) recorrer palabra 1
armar diccionario letra/repeticiones
recorrer palabra 2
3) si la key no existe o si las repeticiones son distintas, return false
4) checkear si la letra2 (key) existe en el diccionario 1, checkear las repeticiones
*/
function anagrama2(palabra1, palabra2) {

    let diccionario1 = {};
    let diccionario2 = {};

    //1
    if (palabra1.length != palabra2.length) {
        return false;

    } else {
        //2
        for (let i = 0; i < palabra1.length; i++) {
            const letra1 = palabra1[i]; 
            if (diccionario1[letra1] == undefined) {
                diccionario1[letra1] = 1;
            } else {
                diccionario1[letra1] += 1;
            }
        }
        
        for (let i = 0; i < palabra2.length; i++) {
            const letra2 = palabra2[i];
            //3
            if (diccionario2[letra2] == undefined) {
                diccionario2[letra2] = 1;
            } else {
                diccionario2[letra2] += 1;
            }
        }
        
        for (let key in diccionario1) {
            if (diccionario1[key] != diccionario2[key]) {
                return false;
            }
        }
        return true;
    }
}
console.log("Valida anagram: ", anagrama2("anagram", "nagaram"))
console.log("Valida anagram: ", anagrama2("rat", "car"))
console.log("Valida anagram: ", anagrama2("aacc", "ccac"))


/*1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers 
such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the 
same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

---------------ESTRATEGIA 1 FUERZA BRUTA O(n2) ---------------------
1) Recorro lista recibida (nums)
2) Vuelvo a recorrer la lista en cada iteración del for anterior
Si la suma de nusm[i] + nums[j] es igual al target
Retorno los índices i, j -> los añado al índice = [] que retorno
*/

//FUERZA BRUTA: LO RESOLVÍ EN 10 MIN!!!
function twoSum1(nums, target) {

    let indices = [];

    //1
    for (let i = 0; i < nums.length; i++) {
        const item0 = nums[i];
        //2
        for (let j = i+1; j < nums.length; j++) {
            const item1 = nums[j];
            if (item0 + item1 == target) {
                indices[0] = i;
                indices[1] = j;
            }
        }
        
    }
    return indices;
}
console.log("Two sum1: ", twoSum1([2,7,11,15], 9)); //[0,1]
console.log("Two sum1: ", twoSum1([3,2,4], 6)); //[1,2]
console.log("Two sum1: ", twoSum1([3,3], 6)); //[0,1]
console.log("Two sum1: ", twoSum1([2,1,5,3], 4)); //[1,3]

/*---------------ESTRATEGIA 2 EFICIENTE-----------------
1) Creo un diccionario vacío y un par de índices a retornar
2) Itero sobre la lista recibida
3) Relleno el diccionario con clave/valor = num/index
4) Reviso si en mi diccionario existe el valor que necesito (lo llamaré incógnito) 
target - num[i] = incógnito
5) Si en mi diccionario existe el valor incógnito, retorno num[i] y el índice de incógnito

*/

function twoSum2(nums, target) {

    let diccionario = {};
    let indices = [];

    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]; //3

        if (diccionario[item] == undefined) {
            diccionario[item] = [i];
        } else {
            diccionario[item].push(i); //3:0 - num:[index]
        }
    }

    nums.sort((a, b) => a - b);

    let i = 0;
    let t = nums.length - 1;

    while(nums[i] + nums[t] != target && t > 0 ) {
        if (nums[i] + nums[t] > target) {
            t--;
        } else {
            i++;
        }
    }
    
    indices[0] = diccionario[nums[i]].pop();
    indices[1] = diccionario[nums[t]].pop();

    return indices;
}

console.log("Two sum2 de [2,7,11,15]: ", twoSum2([2,7,11,15], 9)); //[0,1]
console.log("Two sum2: ", twoSum2([3,2,4], 6)); //[1,2]
console.log("Two sum2: ", twoSum2([3,3], 6)); // falla, da [1,1]
console.log("Two sum2: ", twoSum2([2,1,5,3], 4)); //[1,3]

function twoSum3(nums, target) {
    let diccionario = new Map();
    let indices = [];

    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]; //3

        if (diccionario.has(item)) {
            diccionario.get(item).push(i);
        } else {
            diccionario.set(item, [i]); //3:0 - num:[index]
        }
    }

    nums.sort((a, b) => a - b);

    let i = 0;
    let t = nums.length - 1;

    while(nums[i] + nums[t] != target && t > 0 ) {
        if (nums[i] + nums[t] > target) {
            t--;
        } else {
            i++;
        }
    }
    
    indices[0] = diccionario.get(nums[i]).pop();
    indices[1] = diccionario.get(nums[t]).pop();

    return indices;
};

console.log("Two sum3 de [2,7,11,15]: ", twoSum3([2,7,11,15], 9)); //[0,1]
console.log("Two sum3: ", twoSum3([3,2,4], 6)); //[1,2]
console.log("Two sum3: ", twoSum3([3,3], 6)); // falla, da [1,1]
console.log("Two sum3: ", twoSum3([2,1,5,3], 4)); //[1,3]

/*238. Product of Array Except Self

Given an integer array nums, return an array answer such 
that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/
// [1 2 3] x [5 6 7]

function productExceptSelf(nums){

    // hacer que funcione, indio, roadmap neetcode, documentacion y ejercicios javascript: objetos, cypress
    
    //AHORA FUNCIONA
    //O(n)
    let producto = nums[0] //1 de [1,2,3,4]
    let prefixes = [producto] //[1] de [1,2,3,4]

    for (let i = 1; i < nums.length; i++) {
        producto = producto * nums[i]
        prefixes[i] = producto
    }

    producto = nums[nums.length - 1] 
    let sufixes = [producto] 
    
    for (let i = nums.length - 1; i >= 0; i--) {
        sufixes[i] = producto 
        producto = producto * nums[i-1] 
    }

    let products = []

    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            products[i] = sufixes[i+1];
        }
        else if (i == nums.length - 1) {
            products[i] = prefixes[i-1];
        } else {
            products[i] = sufixes[i+1] * prefixes[i-1];
        }
    }
    return products;
}
console.log("Product of array except self: ", productExceptSelf([1,2,3,4])) //[24,12,8,6]
console.log("Product of array except self: ", productExceptSelf([-1,1,0,-3,3])) //[0,0,9,0,0]


//--------------EFICIENTE---- TIME COMPLEXITY linear O(n), y SPACE COMPLEXITY constante O(1) porque ya no usa arrays prefijo y sufijo!! --------------
function productExceptSelf2(nums){

    let output = [1];
    let prefixes = 1; 

    for (let i = 0; i < nums.length; i++) {
        output[i] = prefixes
        prefixes = prefixes * nums[i]
    }

    let postfix = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] = output[i] * postfix
        postfix =  postfix * nums[i]       
    }
    return output
}
console.log("Product of array except self 2: ", productExceptSelf2([1,2,3,4])) //[24,12,8,6]
console.log("Product of array except self 2: ", productExceptSelf2([-1,1,0,-3,3])) //[0,0,9,0,0]


/*125. Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into 
lowercase letters and removing all non-alphanumeric characters, it reads the 
same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/

function palindrome(string) {

    for (let i = 0; i < string.length; i++) {
        const letra = string[i];
        for (let j = string.length - 1; j >= 0; j--) {
            const letraInvertida = string[j];
            if (letra != "," && letra != ":" && letraInvertida != "," && letraInvertida != ":") {

                return letra == letraInvertida;
            }
        }
        
    }
}
console.log("Valid Palindrome: ", palindrome("A man, a plan, a canal: Panama")) //true
console.log("Valid Palindrome: ", palindrome("race a car")) //false
console.log("Valid Palindrome: ", palindrome(" ")) //true