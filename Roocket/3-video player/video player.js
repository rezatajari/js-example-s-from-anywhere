let playerArea = document.querySelector('.myplayer');
let media = playerArea.querySelector('video');
let controls = playerArea.querySelector('.myplayer__controls');

let play = controls.querySelector('.play');
let rwd = controls.querySelector('.rewind');
let fwd = controls.querySelector('.forward');
//let fullscreen=controls.querySelector('.fullscreen');

play.addEventListener('click', function() {
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

function togglePlayIcon() {
    let icon = play.querySelector('i');
    icon.classList.toggle('ion-md-pause');
    icon.classList.toggle('ion-md-play');
}