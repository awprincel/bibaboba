const button = document.getElementById('cola-button')
const container = document.getElementById('container')
const text = document.getElementById('text')

button.addEventListener('click', () => {
    text.textContent = "Вы попили колы"
    container.appendChild(text)
})