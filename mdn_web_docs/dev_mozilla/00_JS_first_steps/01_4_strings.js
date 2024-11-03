// https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Strings
// <button>Press me</button>

let button = document.querySelector("button");

button.onclick = function () {
    let name = prompt("What is your name?");
    alert("Hello " + name + ", nice to see you!");
};
/**
 * La fc Window.prompt() le pide al usuario la rta a una pregunta a través de 
 * un cuadrado emergente (popup), luego almacena ese dato en la variable name.
 * 
 * La fc Window.alert() muestra otro popup 
 */

// https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Useful_string_methods

let browserType = "mozilla";
browserType.length; //7
browserType[0] //m
browserType[browserType.length - 1]; //a
browserType.indexOf("zilla"); //2: posición donde empieza el substring "zilla"
browserType.indexOf("vanilla"); //-1, xq no existe
if (browserType.indexOf("mozilla") !== -1) {
    // hacer cosas con el string, si contiene "mozilla"
}
browserType.slice(2) //zilla si no se pone parametro2, va hasta el final.
browserType.slice(0, 3); //moz .slice(parametro1, parametro2)
// parametro1: caracter en la que comienza a extraer
// parametro2: posición del caracter posterior al último extraído
let radData = "Mi NoMbRe Es MuD";
radData.toLowerCase();
radData.toUpperCase();
browserType = browserType.replace('moz','van'); //mozilla -> vanilla

// Sólo imprimir msj de navidad: 
let list = document.querySelector('.output ul');
list.innerHTML = '';
let greetings = ['¡Feliz cumpleaños!',
                 'Feliz navidad mi amor',
                 'Una feliz navidad a toda la familia',
                 'Eres todo lo que quiero para Navidad',
                 'Que te mejores pronto'];

for (let i = 0; i < greetings.length; i++) {
  let input = greetings[i];
  // Su prueba condicional debe ir dentro del paréntesis
  // en la línea siguiente, reemplazando lo que hay actualmente
  if (greetings[i].indexOf('Navidad') !== -1 || greetings[i].indexOf('navidad') !== -1) {
    let result = input;
    let listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}
  
// Corregir mayúsculas:
let list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(let i = 0; i < cities.length; i++) {
    let input = cities[i];
  // escribe tu código justo debajo aquí
  let min = input.toLowerCase(); 
  let char = min[0].toUpperCase();
  let capital = char + min.slice(1);

  let result = input;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}

// Creando nuevas cadenas de partes viejas
var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let i = 0; i < stations.length; i++) {
  let input = stations[i];
  // escribe tu código justo debajo aquí
  let codigo = input.slice(0, 3) //MAN
  let indexComa = input.indexOf(';') //24
  let nombre = input.slice(indexComa+1);
  let concatenacion = `${codigo}: ${nombre}`;

  let result = concatenacion;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}