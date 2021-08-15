// You need to make it so that

// You are taking the key event

// and when that keydown event happens it triggers a sound

// using addEventListener


// letter variables
// shows how to access a html element

const a = document.getElementById("a")
const s = document.getElementById("s")
const d = document.getElementById("d")
const f = document.getElementById("f")
const g = document.getElementById("g")
const h = document.getElementById("h")
const j = document.getElementById("j")
const k = document.getElementById("k")
const l = document.getElementById("l")

// this is how to input external files 

//  sound variables
const boom = new Audio('sounds/boom.wav')
const clap = new Audio('sounds/clap.wav')
const hihat = new Audio('sounds/hihat.wav')
const kick = new Audio('sounds/kick.wav')
const openhat = new Audio('sounds/openhat.wav')
const ride = new Audio('sounds/ride.wav')
const snare = new Audio('sounds/snare.wav')
const tink = new Audio('sounds/tink.wav')
const tom = new Audio('sounds/tom.wav')

// key presses
// how to handle events(keyboard events)

window.addEventListener("keydown", (event) => {
    if (event.key === "a") {
        boom.play();
        console.log(event.key)
    } else if (event.key === "s") {
        clap.play();
        console.log(event.key)
    } else if (event.key === "d") {
        hihat.play();
        console.log(event.key)
    } else if (event.key === "f") {
        kick.play();
        console.log(event.key)
    } else if (event.key === "g") {
        openhat.play();
        console.log(event.key)
    } else if (event.key === "h") {
        ride.play();
        console.log(event.key)
    } else if (event.key === "j") {
        snare.play();
        console.log(event.key)
    } else if (event.key === "k") {
        tink.play();
        console.log(event.key)
    } else if (event.key === "l") {
        tom.play();
        console.log(event.key)
    }
})

// clicks!
// how to access mouse clicks 

a.addEventListener("click", () => {
    boom.play();
})
s.addEventListener("click", () => {
    clap.play();
})
d.addEventListener("click", () => {
    hihat.play();
})
f.addEventListener("click", () => {
    kick.play();
})
g.addEventListener("click", () => {
    openhat.play();
})
h.addEventListener("click", () => {
    ride.play();
})
j.addEventListener("click", () => {
    snare.play();
})
k.addEventListener("click", () => {
    tink.play();
})
l.addEventListener("click", () => {
    tom.play();
})

//