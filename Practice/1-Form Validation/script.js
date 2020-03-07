let inputs = document.getElementsByTagName('input');
let CreateBtn = document.getElementById('submit');
let ErrorMessage = document.getElementsByTagName('span');


CreateBtn.addEventListener('click', validation);

function validation() {

    for (i in inputs) {
        if (inputs[i].value === "" || inputs[i].value == null) {
            ErrorMessage[i].innerHTML = ' Please enter your ' + inputs[i].name;
        } else {
            ErrorMessage[i].style.color = 'green';
            ErrorMessage[i].innerHTML = 'Thanks'

        }
    }
}