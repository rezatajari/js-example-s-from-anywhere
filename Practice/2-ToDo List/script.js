const input = document.querySelector('input');
const btnItem = document.querySelector('.btnItem');
const modelBox = document.querySelector('.modelBox');


btnItem.addEventListener('click', addItem);


function addItem() {

    if (input.value == null || input.value === '')
        modelBox.style.display = 'block';
}