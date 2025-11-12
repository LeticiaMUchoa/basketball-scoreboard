let homeEl = document.getElementById("home-id")
let resetEl = document.getElementById("reset-id")
let guestEl = document.getElementById("guest-id")

let homeScore = 0
let guestScore = 0

function one(){
    homeScore += 1
    homeEl.textContent = homeScore
}

function two(){
    homeScore += 2
    homeEl.textContent = homeScore
}

function three(){
    homeScore += 3
    homeEl.textContent = homeScore
}

function oneguest(){
    guestScore += 1
    guestEl.textContent = guestScore
}

function twoguest(){
    guestScore += 2
    guestEl.textContent = guestScore
}

function threeguest(){
    guestScore += 3
    guestEl.textContent = guestScore
}

function reset(){
    guestScore = 0
    guestEl.textContent = 0
    homeScore = 0
    homeEl.textContent = 0
}