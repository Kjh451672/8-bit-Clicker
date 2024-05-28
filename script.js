let points = 0
let pointsTracker = document.getElementById('pointsTracker')

function addPoint() { 
    points++
    pointsTracker.innerText = points.toFixed(2) + " Pixels"
}



let arrows = 0
let totalArrows = document.getElementById('totalArrows')
function addArrow(){
    if(points >= 10)
    {
        points = points - 10
        arrows++
        totalArrows.innerText = arrows + " Pixel Arrows"
        pointsTracker.innerText = points.toFixed(2) + " Pixels"
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
        pointsTracker.innerText = points.toFixed(2) + " Pixels"
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
        pointsTracker.innerText = points.toFixed(2) + " Pixels"
    }
    else{
        alert("You dont have enough Pixels!")
    }
}

let gems = 0
let totalGems = document.getElementById('totalGems')
function addGems(){
    if(points >= 700)
    {
        points = points - 700
        gems++
        totalGems.innerText = gems + " Pixel Gems"
        pointsTracker.innerText = points.toFixed(2) + " Pixels"
    }
    else {
        alert("You dont have enough Pixels!")
    }
}

let stars = 0
let totalStars = document.getElementById('totalStars')
function addStars(){
    if(points >= 900)
    {
        points = points - 1000
        stars++
        totalStars.innerText = stars + " Pixel Stars"
        pointsTracker.innerText = points.toFixed(2) + " Pixels"
    }
    else {
        alert("You dont have enough Pixels!")
    }
}



function autoArrow()
{
    points = points + (0.2 * arrows)
    pointsTracker.innerText = points.toFixed(2) + " Pixels"
}


function autoCoin()
{
    points = points + (1 * coins)
    pointsTracker.innerText = points.toFixed(2) + " Pixels"
}


function autoPickaxe()
{
    points = points + (10 * pickaxes)
    pointsTracker.innerText = points.toFixed(2) + " Pixels"
}

function autoGem()
{
    points = points + (50 * gems)
    pointsTracker.innerText = points.toFixed(2) + " Pixels"
}

function autoStar()
{
    points = points + (100 * stars)
    pointsTracker.innerText = points.toFixed(2) + " Pixels"
}


setInterval(autoArrow, 1000)
setInterval(autoCoin, 1000)
setInterval(autoPickaxe, 1000)
setInterval(autoGem, 1000)
setInterval(autoStar, 1000)
