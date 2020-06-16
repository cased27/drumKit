
function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return; //stops function if non-audio linked keys are selected

    audio.currentTime = 0; //rewind to start (to replay sounds if clicked multiple times)
    audio.play(); 
    key.classList.add("playing"); //add yellow border to selected keys
}

function removeTransition(event){
    if(event.propertyName !== "transform") return; //identify what is 'transforming'
    this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
//remove  yellow border after transform has occurred

window.addEventListener("keydown", playSound);
//when a key is pressed, run playSound()