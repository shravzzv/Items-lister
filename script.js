const addItemInputElement = document.querySelector('.main__input')
const submitButtonElement = document.querySelector('.main__submit')

const mainFormElement = document.querySelector('.main__form')

const itemsListElement = document.querySelector('.main__items')
const itemListElement = document.querySelector('.main__item')
const itemTextElement = document.querySelector('.main__text')
const itemDeleteButtonElement = document.querySelectorAll('.main__delete')

// event handlers

const addItem = (text) => {
  let newItem = document.createElement('li')
  let newText = document.createElement('p')
  let remBtn = document.createElement('button')

  newItem.classList.add('main__item')
  newText.classList.add('main__text')
  remBtn.classList.add('main__delete')

  newText.textContent = text
  remBtn.textContent = 'X'
  remBtn.addEventListener('click', removeItem)

  newItem.appendChild(newText)
  newItem.appendChild(remBtn)
  itemsListElement.appendChild(newItem)
}

const handleSubmit = (e) => {
  e.preventDefault()
  let inputText = e.target[0].value
  inputText && addItem(inputText)
  e.target.reset()
}

const removeItem = (e) => {
  e.target.parentNode.remove()
}

// event listeners

mainFormElement.addEventListener('submit', handleSubmit)

itemDeleteButtonElement.forEach((button) =>
  button.addEventListener('click', removeItem)
)
