import {
    Howl
} from 'howler';

export const timer = document.getElementById('timer');
const timerResult = document.getElementById('timer__result');
const timerStart = document.getElementById('timer__start');

function soundClick() {
    let sound = new Howl({
        src: ['../audio/audio.mp3']
    });
    sound.play();
}

timerStart.addEventListener('click', function (event) {
    event.preventDefault();
    let i = 10;
    let id = setInterval(function () {
        i--;

        if (i == 0) {
            clearInterval(id);
            soundClick();
        } else {
            timerResult.innerHTML = i;
        }
    }, 1000);
})