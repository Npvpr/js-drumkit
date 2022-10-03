window.addEventListener('keydown', playSound);

function playSound(e){
    const key = document.querySelector(`.key-${e.keyCode}`)
    const audio = document.querySelector(`.audio-${e.keyCode}`)
    if(!key) return;

    console.log(key);
    key.classList.add("playing")
    audio.currentTime = 0;
    audio.play()
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', function(e){
    console.log(e)
    e.target.classList.remove('playing')
}))