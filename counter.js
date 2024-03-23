export function setupCounter(element) {
  let counter = 0

  const updateView = () => {
    element.innerHTML = `Contador is ${counter}`
  }

  const incrementCounter = () => {
    counter += 1
    updateView()
  }

  element.addEventListener('click', incrementCounter)
  updateView()
}
