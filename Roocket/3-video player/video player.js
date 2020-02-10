let playerArea = document.querySelector('.myplayer');
let media = playerArea.querySelector('video');
let controls = playerArea.querySelector('.myplayer__controls');

let play = controls.querySelector('.play');
let rwd = controls.querySelector('.rewind');
let fwd = controls.querySelector('.forward');
//let fullscreen=controls.querySelector('.fullscreen');

let timerArea = controls.querySelector('.timer');
let currentTime = timerArea.querySelector('.currentTime');
let videoTime = timerArea.querySelector('.videoTime');

let timerBar = controls.querySelector('.controls__progressbar-current');

media.addEventListener('timeupdate', function() {
    currentTime.textContent = getTime(media.currentTime);

    let barLength = (media.currentTime / media.duration) * 100;
    timerBar.style = `background : linear-gradient(90deg, rgba(230,126,34,1) ${barLength}%, #e1e1e1 0%);`
    timerBar.value = barLength;
})


play.addEventListener('click', function() {
    videoTime.textContent = getTime(media.duration);
    if (media.paused) {
        togglePlayIcon();
        media.play();
    } else {
        togglePlayIcon();
        media.pause();
    }
})

rwd.addEventListener('click', function() {
    media.currentTime = media.currentTime - 5;
});

fwd.addEventListener('click', function() {
    media.currentTime = media.currentTime + 5;
});


timerBar.addEventListener('input', function() {
    media.currentTime = (this.value / 100) * media.duration;
})

function togglePlayIcon() {
    let icon = play.querySelector('i');
    icon.classList.toggle('ion-md-pause');
    icon.classList.toggle('ion-md-play');
}

function getTime(time) {
    let minutes = Math.floor(time / 60);
    let secounds = Math.floor(time - (minutes * 60));
    let minuteValue;
    let secoundsValue;

    if (minutes < 10) {
        minuteValue = '0' + minutes;
    } else {
        minuteValue = minutes
    }

    if (secounds < 10) {
        secoundsValue = '0' + secounds;
    } else {
        secoundsValue = secounds;
    }

    return minuteValue + ':' + secoundsValue;
}