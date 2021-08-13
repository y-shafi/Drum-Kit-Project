// You need to make it so that

// You are taking the key event

// and when that keydown event happens it triggers a sound

// using addEventListener

// window.addEventListener("keydown", (e) => {

//     const audio = document.querySelectorAll(`audio[data-key="${e.keycode}"]`)
//     console.log(audio)
//     if (audio);

// });

// audio.play(); {

// }
// return


const audio = document.querySelectorAll('audio');
const keys = document.querySelectorAll('key div');

window.addEventListener('keydown', (e) => {
    // The KeyCode.
    let audio = e.keyCode.toString();

    // Playing the audio if the keyCode is equal to the audio's ID.
    songs.forEach(song => {
        if (audio === song.id) {
            audio.play();
            audio.currentTime = 0;
        };
    });

    // Adding the animation to the divs if the keyCode is equal to the div's ID.
    keys.forEach(div => {
        if (audio === div.id) {
            div.key.add('animate');
            setTimeout(() => div.key.remove('animate'), 100);
        }
    })
});