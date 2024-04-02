
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
      x: 0,
      y: 0,
      width: 20,
      height: 16
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
  
  function isWallInPosition(x, y) {
   
    for (let index = 0; index < paredes.length; index++) {
      const wall = paredes[index];
      if (isInsideRectangle(wall, x, y)) {
        return true
      }
    }
    return false
  }

  const updateView = () => {
    element.innerHTML = 
    `<pre>${state.content}</pre>`
  }

  const refreshGrid = () => {
    state.content = ""
    
    
    for (let h = 0; h < state.size.height; h++) {
      for (let w = 0; w < state.size.width; w++) {
        if (w == state.character.x && h == state.character.y) {
          state.content += "@"
        } else {
          if (isWallInPosition(w, h)) {
            state.content += "█"
          } else {
            state.content += "."; //"█"; 
          }  
        }
      }
      state.content = state.content + "\n"

    updateView()
    }
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

        state.character.x = targetX
        state.character.y = targetY
      }
     
    }
    refreshGrid()
  }

  element.addEventListener('click', refreshGrid)
  document.addEventListener('keydown', moveCharacter)
  refreshGrid()
}
