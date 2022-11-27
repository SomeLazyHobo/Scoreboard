let homeScore = 0
let guestScore = 0
let homeScoreBox = document.getElementById("scoreGuest-El")
let guestScoreBox = document.getElementById("guestScore-El")


function homeOne() {
    homeScore = homeScore + 1
    document.getElementById("scoreHome-El").textContent = homeScore
}

function homeTwo() {
    homeScore = homeScore + 2
    document.getElementById("scoreHome-El").textContent = homeScore
}

function homeThree() {
    homeScore = homeScore + 3
    document.getElementById("scoreHome-El").textContent = homeScore
}

function homeReset() {
    homeScore = homeScore - homeScore
    document.getElementById("scoreHome-El").textContent = homeScore
}

function guestOne() {
    guestScore = guestScore + 1
    document.getElementById("scoreGuest-El").textContent = guestScore
}

function guestTwo() {
    guestScore = guestScore + 2
    document.getElementById("scoreGuest-El").textContent = guestScore
}

function guestThree() {
    guestScore = guestScore + 3
    document.getElementById("scoreGuest-El").textContent = guestScore
}


function guestReset() {
    guestScore = guestScore - guestScore
    document.getElementById("scoreGuest-El").textContent = guestScore
}

if (homeScore > guestScore) {
    homeScoreBox.body.style.backgroundColor = "white"; 
}