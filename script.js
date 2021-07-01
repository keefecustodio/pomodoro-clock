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
    }
    
})

incrementBtn.addEventListener('click', () => {
    incrementCounter()
})

function incrementCounter() {
    timeCounter += 60
    console.log(timeCounter)
    updateSetTimer()
}

function decrementCounter() {
    timeCounter -= 60
    console.log(timeCounter)
    updateSetTimer()
}

function updateSetTimer() {
    timeSetDisplay.innerText = `${timeCounter / 60}:00`
}