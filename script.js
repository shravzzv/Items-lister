const mainFormElement = document.querySelector('.main__form')
const itemDeleteButtonElement = document.querySelectorAll('.main__delete')
const itemsListElement = document.querySelector('.main__items')
const searchInputElement = document.querySelector('.header__search')

// event handlers

const handleSubmit = (e) => {
  e.preventDefault()
  let inputText = e.target[0].value.trim()
  inputText && addItem(inputText)
  e.target.reset()
}

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

const removeItem = (e) => {
  confirm('Are you sure?') ? e.target.parentNode.remove() : null
}

const handleSearch = (e) => {
  e.preventDefault()
  let input = e.target.value.trim().toLowerCase()
  input && filterItems(input)
}

const filterItems = (input) => {
  let allTexts = Array.from(document.querySelectorAll('.main__text'))
  let filtered = allTexts.filter(
    (text) => text.textContent.toLowerCase().indexOf(input) !== -1
  )
  allTexts.forEach((item) =>
    filtered.includes(item)
      ? (item.parentNode.style.display = 'flex')
      : (item.parentNode.style.display = 'none')
  )
  // ! bug: when input is cleared, only those items in filtered gets displayed instead of all
}

// event listeners

mainFormElement.addEventListener('submit', handleSubmit)

itemDeleteButtonElement.forEach((button) =>
  button.addEventListener('click', removeItem)
)

searchInputElement.addEventListener('input', handleSearch)
