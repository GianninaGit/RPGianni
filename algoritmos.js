/* 1) FIBONACCI SEQUENCE -----------------------------------------------------------------------------------------------------------------------------------------
 * Give a number n, find the first n elements of the Fibonacci sequence.
 * In mathematics, the FS is a sequence in which each number is the sum of the two preceding ones.
 * The first two numbers in the sequence are 0 and 1.
 * fibonacci(2) = [0,1])
 * fibonacci(3) = [0,1,1])
 * fibonacci(7) = [0,1,1,2,3,5,8])
 * 
 * FINAL: Big-O = O(n) Linear
 * Si aumenta n, también aumenta el núm de veces que se ejecuta el for
 */

function fibonacci(n) {
    
    let fibonacciSequence = [];
    
    fibonacciSequence[0] = 0;
    fibonacciSequence[1] = 1;

    for (let i = 2; i < n; i++) {
        
        let ultimoNum = fibonacciSequence[i - 1];
        let anteUltimoNum = fibonacciSequence[i - 2];

        fibonacciSequence[i] = ultimoNum + anteUltimoNum;

    }
    return fibonacciSequence;

}
console.log("Fibonacci sequence: ", fibonacci(2)) //[0,1]
console.log("Fibonacci sequence: ", fibonacci(3)) //[0,1,1]
console.log("Fibonacci sequence: ", fibonacci(7)) //[0,1,1,2,3,5,8]
console.log("Fibonacci sequence: ", fibonacci(9)) //[0,1,1,2,3,5,8,13,21]

/* 2) FACTORIAL OF A NUMBER -----------------------------------------------------------------------------------------------------------------------------------------
 * Give an integrer n, find the factorial of that integer.
 * In mathematics, the factorial of a non-negative integer n, denoted n!, is the product of all positive integers less than or equal to n.
 * Factorial of zero is 1.
 * factorial(4) = 4*3*2*1 = 24
 * factorial(5) = 5*4*3*2*1 = 120
 * 
 * FINAL: Big-O = O(n) Linear (tiene 1 for loop)
 * Si n aumenta, el for se ejecuta más veces.
 */

function factorial(n) {
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }

    return factorial;
}
console.log("Factorial of a number: ", factorial(0)) //1
console.log("Factorial of a number: ", factorial(1)) //1
console.log("Factorial of a number: ", factorial(4)) //24
console.log("Factorial of a number: ", factorial(10)) //120

/* 3a) PRIME NUMBER -----------------------------------------------------------------------------------------------------------------------------------------
 * Give a natural number n, determine if the number is prime or not.
 * A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
 * isPrime(5) = true (1*5 or 5*1)
 * isPrime(4) = false (1*4 or 2*2 or 4*1)
 * Un número primo es un número natural mayor que 1 que tiene exactamente dos divisores distintos: 1 y él mismo. 
 * No puede ser dividido de manera exacta por ningún número natural más que 1 y el propio número.
1 no es primo porque sólo tiene un divisor (él mismo).
Algunos ejemplos de números primos son: 2, 3, 5, 7, 11, 13, 17, 19, 23, etc.

 i debe comenzar en 2 porque sólo se cumple el for mientras i sea menor a n (n es 2 o superior porque viene el else), y si i=0 o i=1, no se cumple la condición
 además, i = 1, entraría en el for la 1ra vez, si n es mayor a 1... pero al entrar en el for, i<n es válido, entonces revisa el if
 pero en el if, 2 dividido 1 tiene resto cero, por lo tanto daría false, pero sería incorrecto. 1 es un divisor válido para cualquier número.
 Por lo tanto sólo reviso que n no sea divisible por ningún número (excepto él mismo, y 1)
 
* FINAL: Big-O = O(n) Lineal (tiene 1 for loop)
* Si n aumenta, el for se ejecuta más veces.
 */

function isPrime(n) {
    if (n <= 1) { //es un número natural mayor que 1
        return false;
    } else {
        for (let i = 2; i < n; i++) { 
            if (n % i == 0) { //No puede ser dividido de manera exacta por ningún número natural más que 1 y el propio número
                return false;
            } 
        }
        return true;
    }
}
console.log(`Prime number: -1`, isPrime(-1)) // false
console.log(`Prime number: 0`, isPrime(0)) // false
console.log(`Prime number: 1`, isPrime(1)) // false
console.log(`Prime number: 2`, isPrime(2)) // true
console.log("Prime number: 4", isPrime(4)) // false
console.log(`Prime number: 5`, isPrime(5)) // true
console.log(`Prime number: 24`, isPrime(24)) // false

/** 3b) PRIME NUMBER optimizado -----------------------------------------------------------------------------------------------------------------------------------------
 * Integers larger than the square root do not need to be checked because, whenever n=a*b, one of the two factors a and b is less than or equal to the square root of n.
 * Num enteros mayores que la raíz cuadrada, no se checkean.
 * n=24 a=4 b=6
 * √24 = 4,89
 * a=4 es menor que 4,89. a es menor que la raíz cuadrada de 24
 * 
 * n=35 a=5 b=7
 * √35 = 5,91
 * a=5 es menor que 5,91. a es menor que la raíz cuadrada de 35
 * 
 * * FINAL: Big-O = O(sqrt(n)) 
 * Si n aumenta, y vale 100, checkeamos hasta n=10.
 * Si n = 10_000, checkeamos hasta n=100
 * Si n aumenta, el for aumenta también, pero no en la misma proporción.
 */
function isPrimeOptimized(n) {
    if (n <= 1) { //es un número natural mayor que 1
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) { 
            if (n % i == 0) { //No puede ser dividido de manera exacta por ningún número natural más que 1 y el propio número
                return false;
            } 
        }
        return true;
    }
}
console.log(`Prime number: -1`, isPrimeOptimized(-1)) // false
console.log(`Prime number: 0`, isPrimeOptimized(0)) // false
console.log(`Prime number: 1`, isPrimeOptimized(1)) // false
console.log(`Prime number: 2`, isPrimeOptimized(2)) // true
console.log("Prime number: 4", isPrimeOptimized(4)) // false
console.log(`Prime number: 5`, isPrimeOptimized(5)) // true
console.log(`Prime number: 24`, isPrimeOptimized(24)) // false

/** 4) POWER OF TWO -----------------------------------------------------------------------------------------------------------------------------------------
 * Give a positive integer n, determine if the number is a power of 2 or not.
 * An integer is power of two if there exists an integer x such that n ===2.
 * isPowerOfTwo(1) = true (2 a la 0)
 * isPowerOfTwo(2) = true (2 a la 1)
 * isPowerOfTwo(5) = false (2 a la X no existe número que, de 5)
 *
 * FINAL: Big-O = 
 * Si aumenta n, también aumenta el núm de veces que se ejecuta el for
 */

function powerOfTwo(n) {

}
console.log("Power of two: ", powerOfTwo(n))