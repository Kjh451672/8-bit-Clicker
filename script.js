let points = 0
let pointsTracker = document.getElementById('pointsTracker')

function addPoint() { 
    points++
    pointsTracker.innerText = points.toFixed(2) + " Pixels"
}



let arrows = 0
let totalArrows = document.getElementById('totalArrows')
let arrowCost = document.getElementById('arrowCost')
let arrowbtn = document.getElementById('arrowbtn')
function addArrow(){
    let arrowPrice = 10 + arrows ** 1.5
    if(points >= arrowPrice)
    {   
        arrowbtn.button = false
        points = points - arrowPrice
        arrows++
        totalArrows.innerText = arrows + " Pixel Arrows"
        pointsTracker.innerText = points.toFixed(2) + " Pixels"
        arrowCost.innerText = "Cost: " + (10 + arrows ** 1.5).toFixed(2) + " Pixels"
    }
    else{
        arrowbtn.button = true
        
    }
}



let coins = 0
let totalCoins = document.getElementById('totalCoins')
let coinCost = document.getElementById('coinCost')
let coinbtn = document.getElementById('coinbtn')
function addCoins(){
    let coinPrice = 100 + coins ** 3.7
    if (points >= coinPrice)
    {   
        coinbtn.disabled = false
        points = points - coinPrice
        coins++
        totalCoins.innerText = coins + " Pixel Coins"
        pointsTracker.innerText = points.toFixed(2) + " Pixels"
        coinCost.innerText = "Cost: " + (100 + coins ** 2).toFixed(2) + " Pixels"
    }
    else{
        coinbtn.disabled = true
    }
}

let pickaxes = 0
let totalPickaxes = document.getElementById('totalPickaxes')
let pickaxeCost = document.getElementById('pickaxeCost')
let pickaxebtn = document.getElementById('pickaxebtn')
function addPickaxes(){
    let pickaxePrice = 450 + pickaxes ** 4.8
    if (points >= pickaxePrice)
    {   
        pickaxebtn.disabled = false
        points = points - pickaxePrice
        pickaxes++
        totalPickaxes.innerText = pickaxes + " Pixel Pickaxes"
        pointsTracker.innerText = points.toFixed(2) + " Pixels"
        pickaxeCost.innerText = "Cost: " + (450 + pickaxes ** 7.5).toFixed(2) + " Pixels"
    }
    else{
        pickaxebtn.disabled = true
    }
}

let gems = 0
let totalGems = document.getElementById('totalGems')
let gemCost = document.getElementById('gemCost')
let gembtn = document.getElementById('gembtn')
function addGems(){
    let gemPrice = 700 + gems ** 6.5
    if(points >= gemPrice)
    {   
        gembtn.disabled = false
        points = points - gemPrice
        gems++
        totalGems.innerText = gems + " Pixel Gems"
        pointsTracker.innerText = points.toFixed(2) + " Pixels"
        gemCost.innerText = "Cost: " + (700 + gems ** 1.5).toFixed(2) + " Pixels"
    }
    else {
        gembtn.disabled = true
    }
}

let stars = 0
let totalStars = document.getElementById('totalStars')
let starCost = document.getElementById('starCost')
let starbtn = document.getElementById('starbtn')
function addStars(){
    let starPrice = 1000 + stars ** 8.8
    if(points >= starPrice)
    {   
        starbtn.disabled = false
        points = points - starPrice
        stars++
        totalStars.innerText = stars + " Pixel Stars"
        pointsTracker.innerText = points.toFixed(2) + " Pixels"
        starCost.innerText = "Cost: " + (1000 + stars ** 3.4).toFixed(2) + " Pixels"
    }
    else {
        starbtn.disabled = true
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
