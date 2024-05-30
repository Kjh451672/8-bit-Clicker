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
        points = points - arrowPrice
        arrows++
        totalArrows.innerText = arrows + " Pixel Arrows"
        pointsTracker.innerText = points.toFixed(2) + " Pixels"
        arrowCost.innerText = "Cost: " + (10 + arrows ** 1.5).toFixed(2) + " Pixels"
    }
}



let coins = 0
let totalCoins = document.getElementById('totalCoins')
let coinCost = document.getElementById('coinCost')
let coinbtn = document.getElementById('coinbtn')
function addCoins(){
    let coinPrice = 100 + coins ** 2
    if (points >= coinPrice)
    {   
        points = points - coinPrice
        coins++
        totalCoins.innerText = coins + " Pixel Coins"
        pointsTracker.innerText = points.toFixed(2) + " Pixels"
        coinCost.innerText = "Cost: " + (100 + coins ** 2).toFixed(2) + " Pixels"
    }
}

let pickaxes = 0
let totalPickaxes = document.getElementById('totalPickaxes')
let pickaxeCost = document.getElementById('pickaxeCost')
let pickaxebtn = document.getElementById('pickaxebtn')
function addPickaxes(){
    let pickaxePrice = 450 + pickaxes ** 3.2
    if (points >= pickaxePrice)
    {   
        points = points - pickaxePrice
        pickaxes++
        totalPickaxes.innerText = pickaxes + " Pixel Pickaxes"
        pointsTracker.innerText = points.toFixed(2) + " Pixels"
        pickaxeCost.innerText = "Cost: " + (450 + pickaxes ** 3.2).toFixed(2) + " Pixels"
    }
}


let gems = 0
let totalGems = document.getElementById('totalGems')
let gemCost = document.getElementById('gemCost')
let gembtn = document.getElementById('gembtn')
function addGems(){
    let gemPrice = 700 + gems ** 3.7
    if(points >= gemPrice)
    {   
        points = points - gemPrice
        gems++
        totalGems.innerText = gems + " Pixel Gems"
        pointsTracker.innerText = points.toFixed(2) + " Pixels"
        gemCost.innerText = "Cost: " + (700 + gems ** 3.7).toFixed(2) + " Pixels"
    }
}

let stars = 0
let totalStars = document.getElementById('totalStars')
let starCost = document.getElementById('starCost')
let starbtn = document.getElementById('starbtn')
function addStars(){
    let starPrice = 1000 + stars ** 4.9
    if(points >= starPrice)
    {   
        points = points - starPrice
        stars++
        totalStars.innerText = stars + " Pixel Stars"
        pointsTracker.innerText = points.toFixed(2) + " Pixels"
        starCost.innerText = "Cost: " + (1000 + stars ** 4.9).toFixed(2) + " Pixels"
    }
    
}



function gameLoop()
{
    if(points >= 10 + arrows ** 1.5)
    {
    arrowbtn.disabled = false
    }
    else{
        arrowbtn.disabled = true
    }


    if(points >= 100 + coins ** 2)
    {
    coinbtn.disabled = false
    }else{
        coinbtn.disabled = true
    }



    if(points >= 450 + pickaxes ** 3.2)
    {
    pickaxebtn.disabled = false
    }else{
        pickaxebtn.disabled = true
    }


    if(points >= 700 + gems ** 3.7)
    {
    gembtn.disabled = false
    }else{
        gembtn.disabled = true
    }

     
    if(points >= 1000 + stars ** 4.9)
    {
    starbtn.disabled = false
    }else{
        starbtn.disabled = true
    }

    points = points + (arrows * 0.2) + (coins * 1) + (pickaxes * 10) + (gems * 50) + (stars * 100)
    pointsTracker.innerText = points.toFixed(2) + " Pixels"

}

setInterval(gameLoop, 1000)