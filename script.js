const bodyColor = document.querySelector('.bodyColor')

const light = document.querySelector('.lightMode')
const dark = document.querySelector('.darkMode')

const twoPoints = document.querySelector('.twoPoints')

const btnPlay = document.querySelector(".play path")
const btnStop = document.querySelector(".stop path")
const btnMore = document.querySelector(".timerMore path")
const btnLess = document.querySelector(".timerLess path")

const modeJungle = document.querySelector(".jungle")
const modeRain = document.querySelector(".rain")
const modeCoffe = document.querySelector(".coffe")
const modeFire = document.querySelector(".fire")

const svgColorJungle = document.querySelector('.svgJungle path')
const svgColorRain = document.querySelector('.svgRain path')
const svgColorCoffe = document.querySelector('.svgCoffe path')
const svgColorFire = document.querySelector('.svgFire path')

const soundJungle = new Audio("https://github.com/Caiocamargoo/soundsTimer/blob/main/Floresta.mp3?raw=true")
const soundRain = new Audio('https://github.com/Caiocamargoo/soundsTimer/blob/main/Chuva.mp3?raw=true')
const soundCoffe = new Audio('https://github.com/Caiocamargoo/soundsTimer/blob/main/Cafeteria.mp3?raw=true')
const soundFire = new Audio("https://github.com/Caiocamargoo/soundsTimer/blob/main/Lareira.mp3?raw=true")
const kitchenTimer = new Audio("https://github.com/Caiocamargoo/soundsTimer/blob/main/alert.mp3?raw=true")


let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

let stopTimer = ""

let isAudioJunglePlaying = false
let isAudioRainPlaying = false
let isAudioCoffeePlaying = false
let isAudioFirePlaying = false


function playAudio(audioName) {
    if(isAudioJunglePlaying) {
        soundJungle.pause()
        isAudioJunglePlaying = false
        modeJungle.classList.remove('hide')
    }else if(isAudioRainPlaying) {
        soundRain.pause()
        isAudioRainPlaying = false
        modeRain.classList.remove('hide')
    }else if(isAudioCoffeePlaying) {
        soundCoffe.pause()
        isAudioCoffeePlaying = false
        modeCoffe.classList.remove('hide')
    }else if(isAudioFirePlaying) {
        soundFire.pause()
        isAudioFirePlaying = false
        modeFire.classList.remove('hide')
    }

    if(audioName === 'jungle') {

        modeJungle.classList.add('hide')
        soundJungle.play()
       isAudioJunglePlaying = true

    }else if(audioName === 'rain') {

        modeRain.classList.add('hide')
        soundRain.play()
       isAudioRainPlaying = true

    }else if(audioName === 'coffe') {

        modeCoffe.classList.add('hide')
        soundCoffe.play()
        isAudioCoffeePlaying = true
       
    }else if(audioName === 'fire'){
        
        modeFire.classList.add('hide')
        soundFire.play()
       isAudioFirePlaying = true

    }
}

function alarmClock () {
    if(minutesDisplay.textContent <= 0 && secondsDisplay.textContent <= 0) {
        kitchenTimer.play()

        kitchenTimer.loop = true
    }
}

function secondsDown() {

    stopTimer = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        

        if(minutes <= 0 && seconds <= 0) {
            return
        }
    

        if(seconds <= 0) {
            seconds = 60
            minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
        }

        secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
        secondsDown()

        alarmClock()

    }, 1000)
    return stopTimer
}




btnMore.addEventListener('click', function() {
    let minutes = Number(minutesDisplay.textContent)
    
    minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
    if(minutes == 60) {
        minutesDisplay.textContent = String(00).padStart(2, "0")
    
    }
})

btnLess.addEventListener('click', function() {
    let minutes = Number(minutesDisplay.textContent)
       
    minutesDisplay.textContent = String(minutes - 5).padStart(2, "0")
    
    if(minutes <= 5) {
       minutesDisplay.textContent = String(0).padStart(2, "0")
    }

    
})

btnPlay.addEventListener('click', function() {
    secondsDown()
})

btnStop.addEventListener('click', function() {
    clearTimeout(stopTimer)
})




modeJungle.addEventListener('click', function() {
    if(isAudioJunglePlaying) {
        soundJungle.pause()
        modeJungle.classList.remove('hide')
        isAudioJunglePlaying = false
    }else {
        playAudio('jungle')
    }
    
    soundJungle.loop = true

})

modeRain.addEventListener('click', function() {
    if(isAudioRainPlaying) {
        soundRain.pause()
        modeRain.classList.remove('hide')
        isAudioJunglePlaying = false
    }else {
        playAudio('rain')
    }

    soundRain.loop = true
})

modeCoffe.addEventListener('click', function() {
    if(isAudioCoffeePlaying) {
        soundCoffe.pause()
        modeCoffe.classList.remove('hide')
    }else {
        playAudio('coffe')
    }

    soundCoffe.loop = true
})

modeFire.addEventListener('click', function() {
    if(isAudioFirePlaying) {
        soundFire.pause()
        modeFire.classList.remove('hide')
    }else {
        playAudio('fire')
        
    }

    soundFire.loop = true
})




light.addEventListener('click', () => {
    light.classList.add('hideMode')
    dark.classList.remove('hideMode')

    bodyColor.classList.add('dark')
    minutesDisplay.classList.add('dark')
    secondsDisplay.classList.add('dark')
    twoPoints.classList.add('dark')

    btnPlay.style.fill = "white"
    btnStop.style.fill = "white"
    btnMore.style.fill = "white"
    btnLess.style.fill = "white"

    modeJungle.classList.add('dark')
    modeRain.classList.add('dark')
    modeCoffe.classList.add('dark')
    modeFire.classList.add('dark')

    svgColorJungle.classList.add('dark')

})

dark.addEventListener('click', () => {
    dark.classList.add('hideMode')
    light.classList.remove('hideMode')

    bodyColor.classList.remove('dark')
    minutesDisplay.classList.remove('dark')
    secondsDisplay.classList.remove('dark')
    twoPoints.classList.remove('dark')

    btnPlay.style.fill = "#323238"
    btnStop.style.fill = "#323238"
    btnMore.style.fill = "#323238"
    btnLess.style.fill = "#323238"

    modeJungle.classList.remove('dark')
    modeRain.classList.remove('dark')
    modeCoffe.classList.remove('dark')
    modeFire.classList.remove('dark')

})

