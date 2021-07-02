const decrementBtn = document.getElementById('decrement')
const incrementBtn = document.getElementById('increment')
const startBtn = document.getElementById('start')
const timeSetDisplay = document.getElementById('time-set-display')

const breakDecrementBtn = document.getElementById('break-decrement')
const breakIncrementBtn = document.getElementById('break-increment')
const breakSetDisplay = document.getElementById('break-set-display')

let timeCounter = 5
let breakCounter = 0

let start_stop = false
let break_stop = false

/* Stores setInterval functions */
let time_start
let break_start

updateSetTimer() // remove when done testing

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
        start_stop = !start_stop
        clearInterval(time_start)
        breakCountdownStart()
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

/* Break Timer Code Below */
breakDecrementBtn.addEventListener('click', () => {
    if(breakCounter - 60 < 0) {
        breakCounter = 0
    } else {
        breakDecrement()
    }
    updateBreakTimer()
})

breakIncrementBtn.addEventListener('click', () => {
    breakIncrement()
    updateBreakTimer()
})

function breakDecrement() {
    breakCounter-=60
}

function breakIncrement() {
    breakCounter+=60
}

function breakCountdown() {
    breakCounter--
    if(breakCounter < 0) {
        breakCounter = 0
        break_stop = !break_stop
        clearInterval(break_start)
    } else {
        updateBreakTimer()
        console.log(breakCounter)
    }
}

function breakCountdownStart() {
    if(!break_start) {
        break_start = !break_start
        break_start = setInterval(() => {breakCountdown()}, 1000)
    }
}


function updateBreakTimer() {
    breakSetDisplay.innerText = `${Math.floor(breakCounter / 60)}:${(breakCounter % 60) < 10 ? '0'+breakCounter % 60 : breakCounter % 60}`
}