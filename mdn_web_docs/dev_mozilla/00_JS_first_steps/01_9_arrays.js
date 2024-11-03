//https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Arrays
let shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
shopping;
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ["tree", 795, [0, 1, 2]];
shopping[0]; // devuelve "bread"
shopping[0] = "tahini";
shopping; // shopping ahora devolverá [ "tahini", "milk", "cheese", "hummus", "noodles" ]
random[2][2]; //2
sequence.length; // Debe devolver 7

let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
let myArray = myData.split(","); //['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle']
myArray;
myArray.length; //6
myArray[0]; // Manchester
myArray[1]; // London
myArray[myArray.length - 1]; // Carlisle
let myNewString = myArray.join(","); //'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle'

//https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Arrays
//Ejercicio:

let list = document.querySelector('.output ul');
let totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
let products = [
                'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'
];
for (let i = 0; i <= products.length - 1; i++) { // number 2
    // number 3
      let currentPar = products[i].split(':');
      let numero = Number(currentPar[1]);
    // number 4
      total += numero; 
    // number 5
    itemText = `${currentPar[0]} - $${numero}`;

  let listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);

// Top 5 búsquedas: 
let list = document.querySelector('.output ul');
let searchInput = document.querySelector('.output input');
let searchBtn = document.querySelector('.output button');

list.innerHTML = '';

let myHistory = [];

searchBtn.onclick = function() {
  // Solo permitiremos que se ingrese un término si la entrada de búsqueda no está vacía.
  let input = searchInput.value;
  if (input !== '') {
    // number 1
    myHistory.unshift(input);
    // Vacíe la lista para no mostrar entradas duplicadas. La pantalla
    // se regenera cada vez que se ingresa un término de búsqueda.
    list.innerHTML = '';

    // recorrer el arreglo y mostrar todos los términos de búsqueda en la lista
    for (let i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      let listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // Si la longitud del arreglo es 5 o más, elimine el término de búsqueda más antiguo
    if (myHistory.length >= 5) {
      // number 2
      myHistory.pop();
    }

    // vacíe la entrada de búsqueda y enfóquela, listo para ingresar el siguiente término
    searchInput.value = '';
    searchInput.focus();
  }
}
// Arrays: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
// Colecciones indexadas: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Indexed_collections
