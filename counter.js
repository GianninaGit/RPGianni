
function isInsideRectangle(rectangle, x, y) {
 return x >= rectangle.x && x < rectangle.width + rectangle.x && y >= rectangle.y && y < rectangle.height + rectangle.y
}
/*Tarea:
Hay bichos que no se mueven
Cuando el personaje camina hacia el bicho le hace un punto de daño
Los bichos tienen vida
Cuando se quedan con vida cero, desaparecen
Algunos bichos se defienden haciendole un daño al personaje cada vez que son atacados
El personaje tiene vida
Hay pociones que le devuelven vida al personaje al caminar sobre ellas

*/
export function setupCounter(element) {
  let state = {
    content: "",
    size: {
      x: 0, y: 0,
      width: 20, height: 16
    },
    character : {
      x: 0,
      y: 0
    }
  }
  
  
  let firstWall = {
    x: 5, y: 1,
    width: 1, height: 6 
  }
  
  let secondWall = {
    x: 10, y: 4,
    width: 1, height: 6 
  }
  
  let paredes = [firstWall, secondWall]
  
  let bicho1 = {
    x: 1, y: 5,
    vida: 3,
  }
  let bicho2 = {
    x: 13, y: 13,
    vida: 3
  }

  let listaDeBichos = [bicho1, bicho2]

  let pocion1 = {
    x: 14, y: 3
  }
  let pocion2 = {
    x: 4, y: 13
  }

  let listaDePociones = [pocion1, pocion2]

  function isWallInPosition(x, y) {
    for (let index = 0; index < paredes.length; index++) {
      const wall = paredes[index];
      if (isInsideRectangle(wall, x, y)) {
        return true
      }
    }
    return false
  }

  function isBichoInPosition(x, y) {
    for (let i = 0; i < listaDeBichos.length; i++) {
      const unBicho = listaDeBichos[i];
      if (x == unBicho.x && y == unBicho.y) {
        return unBicho
      }
    }
    return null
  }

  function isPotionInPosition(x, y) {
    for (let i = 0; i < listaDePociones.length; i++) {
      const unaPocion = listaDePociones[i];
      if (x == unaPocion.x && y == unaPocion.y) {
        return true
      }
    }
    return false
  }

  const updateView = () => {
    element.innerHTML = 
    `<pre>${state.content}</pre>`
  }

  // TODO: en lugar de concatenar strings, vamos a tener una lista de listas para representar el tablero
  /*
    [
      [".", ".", "."],
      ["@", ".", "."],
      [], etc etc etc
    ]

    y al hacer refresh grid vamos a convertir esta lista de lista a un único string con \n al final de cada row
  */


  const refreshGrid = () => {
    state.content = ""

    const output = [];
    for (let h = 0; h < state.size.height; h++) {
      let row = []

      for (let w = 0; w < state.size.width; w++) {
        row.push(".")
      }

      output.push(row)
    }

    for (let w = 0; w < listaDeBichos.length; w++) {
      const bicho = listaDeBichos[w];
      output[bicho.y][bicho.x] = "€"
    }

    for (let w = 0; w < listaDePociones.length; w++) {
      const bicho = listaDePociones[w];
      output[bicho.y][bicho.x] = "€"
    }
    
    /*for (let h = 0; h < state.size.height; h++) {
      for (let w = 0; w < state.size.width; w++) {
        
        if (w == state.character.x && h == state.character.y) {
          state.content += "@"  
        } else if (isBichoInPosition(w, h)) {
          state.content += "€"
        } else if (isPotionInPosition(w, h)) {
            state.content += "P"
        } else if (isWallInPosition(w, h)) {
          state.content += "█"
        } else {
          state.content += "."; //"█"; 
        }
      }*/
      
    state.content = output.map( row => row.join("")).join("\n");
    updateView()
      
  }
  

  const directions = {
    "ArrowDown": [0, 1],
    "ArrowUp": [0, -1],
    "ArrowLeft": [-1, 0],
    "ArrowRight": [1, 0]
  }

  const moveCharacter = (event) => { 
    const dir = directions[event.key]
    if(dir) {
      const targetX = state.character.x + dir[0]
      const targetY = state.character.y + dir[1]

      if (isInsideRectangle(state.size, targetX, targetY) && !isWallInPosition(targetX, targetY)) {
        const bicho = isBichoInPosition(targetX,targetY);
        if(bicho) {
          bicho.vida -= 1;
          if(bicho.vida <= 0) {
            listaDeBichos = listaDeBichos.filter(element => element != bicho );
          }
        } else {
          state.character.x = targetX
          state.character.y = targetY
        }
      }
    }
    refreshGrid()
  }

  element.addEventListener('click', refreshGrid)
  document.addEventListener('keydown', moveCharacter)
  refreshGrid()
}
