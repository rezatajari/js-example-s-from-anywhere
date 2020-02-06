let startBox = document.querySelector('.start-box');
let inputCounter = startBox.querySelector('#input-counter');
let startCounter = startBox.querySelector('#start-counter');
let timerCircle = document.querySelector('.c100');
let timerNum = document.querySelector('.c100>span');
let lastPercent = 'p100';
let originalSecounds, secounds, timerId;

startCounter.addEventListener('click', function(e) {
    secounds = parseInt(inputCounter.value)

    if (isNaN(secounds)) return toggleErrorMessage({ show: true, message: 'زمان را به درستی وارد کنید' })

    toggleErrorMessage({ show: false });
    toggleStartBox({ show: false });
    toggleLoadingMessage({ show: true });
    togleTimer({ show: true, secounds });


    originalSecounds = secounds;
    timerCircle.classList.add(lastPercent);
    timerId = setInterval(startTimer, 1000)
})

let startTimer = () => {
    if (lastPercent) timerCircle.classList.remove(lastPercent);

    if (secounds <= 0) {
        clearInterval(timerId);
        toggleStartBox({ show: true });
        togleTimer({ show: false });
        toggleLoadingMessage({ show: false })
        return;
    }


    secounds -= 1;
    timerNum.textContent = secounds;
    let percent = lastPercent = `p${Math.abs(Math.floor((((originalSecounds - secounds) / originalSecounds) * 100) - 100))}`
    timerCircle.classList.add(percent);

}

let toggleErrorMessage = ({ show, message }) => {
    let errorElement = document.querySelector('#error-message');
    if (show) {
        errorElement.textContent = message;
        errorElement.classList.add('active');
    } else {
        errorElement.classList.remove('active');
    }
}

let toggleStartBox = ({ show }) => {
    if (show) {
        startBox.classList.add('active')
        inputCounter.value = '';
    } else {
        startBox.classList.remove('active')
    }
}

let togleTimer = ({ show, secounds }) => {
    if (show) {
        timerCircle.style.display = 'block';
        timerNum.textContent = secounds;
    } else {
        timerCircle.style.display = 'none';
    }
}

let toggleLoadingMessage = ({ show }) => {
    let loadingMessage = document.querySelector('.message .loading');
    let successMessage = document.querySelector('.message .success');
    if (show) {
        loadingMessage.style.display = 'block';
        successMessage.style.display = 'none';
    } else {
        loadingMessage.style.display = 'none';
        successMessage.style.display = 'block';
    }
}