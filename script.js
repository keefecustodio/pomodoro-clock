const decrementBtn = document.getElementById('decrement')
const incrementBtn = document.getElementById('increment')
const startBtn = document.getElementById('start')
const timeDisplay = document.getElementById('time-display')

let timeCounter = 0;

decrementBtn.addEventListener('click', () => {
    if(timeCounter - 60 < 0) {
        timeCounter = 0;
    } else {
        decrementCounter()
    }
    
})

incrementBtn.addEventListener('click', () => {
    incrementCounter()
})

function incrementCounter() {
    timeCounter += 60
    console.log(timeCounter)
    updateTimer()
}

function decrementCounter() {
    timeCounter -= 60
    console.log(timeCounter)
    updateTimer()
}

function updateTimer() {
    timeDisplay.innerText = `${timeCounter}`
}