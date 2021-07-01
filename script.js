const decrementBtn = document.getElementById('decrement')
const incrementBtn = document.getElementById('increment')
const startBtn = document.getElementById('start')
const timeSetDisplay = document.getElementById('time-set-display')

let timeCounter = 0
let start_stop = false
let time_start

decrementBtn.addEventListener('click', () => {
    if(timeCounter - 60 < 0) {
        timeCounter = 0;
    } else {
        decrementCounter()   
    }
    updateSetTimer()
})

incrementBtn.addEventListener('click', () => {
    incrementCounter()
    updateSetTimer()
})

startBtn.addEventListener('click', () => {
    countdownStart()
})

/* Add Minutes */
function incrementCounter() {
    timeCounter += 60
}

/* Subtract Minutes */
function decrementCounter() {
    timeCounter -= 60
}

/* Updates timer after every decrement of timeCounter. */
function updateSetTimer() {
    timeSetDisplay.innerText = `${Math.floor(timeCounter / 60)}:${(timeCounter % 60) < 10 ? '0'+timeCounter % 60 : timeCounter % 60}`
}

function countdown() {
    timeCounter--
    if(timeCounter < 0) {
        timeCounter = 0
        clearInterval(time_start)
    } else {
        updateSetTimer()
        console.log(timeCounter)
    }
}

/* Start/Resumes/Stops the countdown */
function countdownStart() {
    if(!start_stop) {
        start_stop = !start_stop
        time_start = setInterval(() => {countdown()},1000)
    } else {
        clearInterval(time_start)
        start_stop = !start_stop
    }
}