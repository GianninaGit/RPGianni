
/**
 * Se crea un nuevo elemento párrafo <p>
 * Se establece el texto del párrafo
 * Se añade el párrafo al final del cuerpo del documento
 */

function createParagraph() {
    let elementoP = document.createElement("p");
    elementoP.textContent = "You clicked the button!";
    document.body.appendChild(elementoP);
}
 
//Se seleccionan todos los elementos <buttons> en la página y se los guarda en esta variable
//Ésto crea una lista de nodos NodeList que contiene todos los botones
const buttons = document.querySelectorAll("button");
  
/**
 * Se itera la lista de botones y para c/u se agrega un evento click que ejecuta la fc 
 * cuando el botón es clicado.
 */
for (let i = 0; i < buttons.length; i++) {
buttons[i].addEventListener("click", createParagraph);
}
