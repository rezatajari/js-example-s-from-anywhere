// ======================== variables ========================
const sendBtn = document.querySelector('.sendBtn'),
    resetBtn = document.querySelector('.resetBtn'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    message = document.getElementById('message'),
    form = document.querySelector('.form');



// ======================== eventListeners ========================
document.addEventListener('DOMContentLoaded', function() { sendBtn.disabled = true; })
email.addEventListener('blur', checkValidation);
password.addEventListener('blur', checkValidation);
message.addEventListener('blur', checkValidation);
form.addEventListener('submit', sendProcess);
resetBtn.addEventListener('click', resetFrom);



// ======================== function ========================
function checkValidation(e) {
    if (this.type == 'email') validationEmail(this)
    else {
        if (this.value.length > 0) {
            this.style.borderColor = 'chartreuse';
            this.classList.remove('error');
        } else {
            this.style.borderColor = "red";
            this.classList.add('error')
        }
    }
    const error = document.querySelector('.error');
    if (email.value !== "" && password.value !== "" && message.value !== "")
        if (!error) sendBtn.disabled = false;
}

function validationEmail(email) {
    if (email.value.includes('@')) {
        email.style.borderColor = 'chartreuse';
        email.classList.remove('error');
    } else {
        email.style.borderColor = 'red';
        email.classList.add('error');
    }
}

function sendProcess(e) {
    e.preventDefault();
    const succesSend = document.querySelector('.success_send');
    succesSend.style.display = 'block'
    setTimeout(function() {
        succesSend.style.display = 'none'
    }, 3000);
}

function resetFrom() {
    form.reset();
}