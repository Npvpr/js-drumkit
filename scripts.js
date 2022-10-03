window.addEventListener('keydown', playSound);

function playSound(e){
    const key = document.querySelector(`.key-${e.keyCode}`)
    const audio = document.querySelector(`.audio-${e.keyCode}`)
    if(!key) return;

    key.classList.add("playing")
    audio.currentTime = 0;
    audio.play()
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', function(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing')
}))