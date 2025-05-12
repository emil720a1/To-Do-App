let input = document.querySelector('.todo__input')
let button = document.querySelector('.todo__button')
let list = document.querySelector('.todo__list')
let element
let deleteButton;
let checkbox;
// let textSpan

function createTask(value){ // function that create new element

element = document.createElement('li')
        element.className = 'list__item'
        deleteButton = document.createElement('button') // here we create delete button for element
        deleteButton.className = 'delete'
        deleteButton.textContent = 'Delete'


    let textSpan = document.createElement('span') // this is text element
        textSpan.textContent = value
    textSpan.addEventListener('dblclick', () => {
        let inputSpan = document.createElement('input') // create a new input when we can edit text
        inputSpan.type = 'text'
        inputSpan.className = 'input-edit'
        inputSpan.value = textSpan.innerText; // text will the same how we write in input
        textSpan.replaceChildren(inputSpan) // this code replace span elem on input elem
        inputSpan.addEventListener('keydown', (e) => { //this listener follow on pressing on key
            if(e.key === 'Enter'){
                textSpan.textContent = inputSpan.value

            }
        })

    })


    element.appendChild(textSpan)
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