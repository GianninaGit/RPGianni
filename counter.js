function isInsideWall (wall, x, y) {
  return x >= wall.x1 && x <= wall.x2 && y >= wall.y1 && y <= wall.y2
}


export function setupCounter(element) {
  let state = {
    content: "",
    size: {
      width: 20,
      height: 16
    },
    character : {
      x: 0,
      y: 0
    }
  }

  
  let firstWall = {
    x1: 5, y1: 1,
    x2: 5, y2: 7 
  }
  
  let secondWall = {
    x1: 10, y1: 1,
    x2: 10, y2: 7 
  }
  
  let paredes = [firstWall, secondWall]
  
  function isWallInPosition(x, y) {
   
    for (let index = 0; index < paredes.length; index++) {
      const wall = paredes[index];
      if (isInsideWall(wall, x, y)) {
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

  function isInsideGrid (x, y) {
    return x >= 0 && x < state.size.width && y >= 0 && y < state.size.height
  }



  const moveCharacter = (event) => { 
    const dir = directions[event.key]
    if(dir) {
      const targetX = state.character.x + dir[0]

      const targetY = state.character.y + dir[1]

      if (isInsideGrid(targetX, targetY) && !isWallInPosition(targetX, targetY)) {

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
