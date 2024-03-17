// HTML element variables
const input = document.getElementById('todo-input');
const form = document.querySelector('.todo-form');
const list = document.querySelector('.todo-list');

// Functions
const creatListItem = () => {
    let textInput = input.value;
    const listItem = document.createElement('li')
    listItem.textContent = textInput;
    listItem.setAttribute('class', 'todo-list__listItem');
    list.append(listItem);

    createDeleteButton(listItem);
    handleStrikeThrough(listItem);
}

const createDeleteButton = (listItem) => {
    const deleteButton = document.createElement('span');
    deleteButton.addEventListener('click', () => {
        listItem.remove();
    })

    deleteButton.textContent = 'x'
    listItem.append(deleteButton)
}

const handleStrikeThrough = (listItem) => {
    listItem.addEventListener('click', () => {
        if (listItem.style.textDecoration === 'line-through') {
            listItem.style.textDecoration = 'none'
        } else {
            listItem.style.textDecoration = 'line-through'
        }
    })
}

const handleSubmit = (e) => {
    e.preventDefault();

    if (input.value.trim() !== '') {
        creatListItem();
    }

    input.value = '';
};

//Event listeners 
form.addEventListener('submit', handleSubmit)



