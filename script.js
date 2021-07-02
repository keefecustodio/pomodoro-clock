const decrementBtn = document.getElementById('decrement')
const incrementBtn = document.getElementById('increment')
const startBtn = document.getElementById('start')
const timeSetDisplay = document.getElementById('time-set-display')

const breakDecrementBtn = document.getElementById('break-decrement')
const breakIncrementBtn = document.getElementById('break-increment')
const breakSetDisplay = document.getElementById('break-set-display')

let timeCounter = 0
let breakCounter = 0

let start_stop = false
let break_stop = false

/* Stores setInterval functions */
let time_start
let break_start

decrementBtn.addEventListener('click', () => {
    if(timeCounter - 60 < 0) {
        timeCounter = 0;
    } else {
        decrementCounter()  
        updateSession() 
    }
    console.log("session:"+timeCounter)
})

incrementBtn.addEventListener('click', () => {
    incrementCounter()
    updateSession()
    console.log("session:"+timeCounter)
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

function updateSession() {
    timeSetDisplay.innerHTML = `${timeCounter / 60 +':00'}`
}

function countdown() {
    timeCounter--
    if(timeCounter < 0) {
        timeCounter = 0
        start_stop = !start_stop
        clearInterval(time_start)
        breakCountdownStart()
    } else {
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
        updateBreak()
    }
    console.log("break:"+breakCounter)
})

breakIncrementBtn.addEventListener('click', () => {
    breakIncrement()
    updateBreak()
    console.log("break:"+breakCounter)
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
        console.log(breakCounter)
    }
}

function breakCountdownStart() {
    if(!break_start) {
        break_start = !break_start
        break_start = setInterval(() => {breakCountdown()}, 1000)
    }
}

function updateBreak() {
    breakSetDisplay.innerHTML = `${breakCounter / 60 + ':00'}`
}