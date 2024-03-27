export function setupCounter(element) {
  let state = {
    content: "",
    size: {
      width: 16,
      height: 16
    },
    character : {
      x: 0,
      y: 0
    }
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
          state.content += "."; //"█"; 
        }
      }
      state.content = state.content + "\n"
    }
    updateView()
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

      if (isInsideGrid(targetX, targetY)) {
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
