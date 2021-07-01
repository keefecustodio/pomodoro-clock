const decrementBtn = document.getElementById('decrement')
const incrementBtn = document.getElementById('increment')
const startBtn = document.getElementById('start')
const timeSetDisplay = document.getElementById('time-set-display')

let timeCounter = 0;

decrementBtn.addEventListener('click', () => {
    if(timeCounter - 60 < 0) {
        timeCounter = 0;
    } else {
        decrementCounter()
        updateSetTimer()
    }
    
})

incrementBtn.addEventListener('click', () => {
    incrementCounter()
    updateSetTimer()
})

startBtn.addEventListener('click', () => {
    startTimer()
})

function incrementCounter() {
    timeCounter += 60
}

function decrementCounter() {
    timeCounter -= 60
}

function updateSetTimer() {
    timeSetDisplay.innerText = `${timeCounter / 60}:00`
}

function startTimer() {
    let time_start = timeCounter
}