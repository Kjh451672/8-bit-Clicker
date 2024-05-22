let points = 0
let pointsTracker = document.getElementById('pointsTracker')

function addPoint() { 
    points++
    pointsTracker.innerText = points + " Pixels"
}



let arrows = 0
let totalArrows = document.getElementById('totalArrows')
function addArrow(){
    if(points >= 10)
    {
        points = points - 10
        arrows++
        totalArrows.innerText = arrows + " Pixel Arrows"
        pointsTracker.innerText = points + " Pixels"
    }
    else{
        alert("You dont have enough Pixels!")
    }
}



let coins = 0
let totalCoins = document.getElementById('totalCoins')
function addCoins(){
    if (points >= 100)
    {
        points = points - 100
        coins++
        totalCoins.innerText = coins + " Pixel Coins"
        pointsTracker.innerText = points + " Pixels"
    }
    else{
        alert("You dont have enough Pixels!")
    }
}

let pickaxes = 0
let totalPickaxes = document.getElementById('totalPickaxes')
function addPickaxes(){
    if (points >= 450)
    {
        points = points - 450
        pickaxes++
        totalPickaxes.innerText = pickaxes + " Pixel Pickaxes"
        pointsTracker.innerText = points + " Pixels"
    }
    else{
        alert("You dont have enough Pixels!")
    }
}



let stars = 0
let totalStars = document.getElementById('totalStars')
function addStars(){
    if(points >= 900)
    {
        points = points - 900
        stars++
        totalStars.innerText = stars + " Pixel Stars"
        pointsTracker.innerText = points + " Pixels"
    }
    else {
        alert("You dont have enough Pixels!")
    }
}

