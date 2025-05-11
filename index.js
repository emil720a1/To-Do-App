let input = document.querySelector('.todo__input')
let button = document.querySelector('.todo__button')
let list = document.querySelector('.todo__list')
let element
let deleteButton;
let checkbox;


function createTask(value){

element = document.createElement('li')
        element.className = 'list__item'
        deleteButton = document.createElement('button')
        deleteButton.className = 'delete'
        deleteButton.textContent = 'Delete'
        element.textContent = value
        list.appendChild(element)
        element.appendChild(deleteButton)
        checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        element.appendChild(checkbox)

        checkbox.addEventListener('change', () => {
            if(checkbox.checked){
                element.style.textDecoration = 'line-through'
            }else{
                element.style.textDecoration = 'none'
            }

        })



        deleteButton.addEventListener('click', () => {
            element.remove()
        })

}
button.addEventListener('click', () => {
    let value = input.value
    if(value !== ''){
        createTask(input.value)
    }
    input.value = ''
})