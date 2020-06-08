function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Включаючи мінімум та максимум 
  }
function randomColor(){
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
        var colors = "#" + randomColor;
      return colors
}
///////////////////////////////////////////////////////////////////////////

var $start = document.querySelector("#start")
var $game = document.querySelector("#game")
var $time = document.querySelector("#time") 
var $timeHeader = document.querySelector("#time-header") 
var $result = document.querySelector("#result")
var $resultHeader = document.querySelector("#result-header") 
var $gameTime = document.querySelector('#game-time')
var score = 0 
function show($element){
    $element.classList.remove('hide')
}
function hide($element){
    $element.classList.add('hide')
}

var isGameStarted = false
$start.addEventListener('click',start)
$game.addEventListener('click',boxGameClick)
$gameTime.addEventListener('input',setGameTime)

function start(){
    setGameTime()
    score = 0
    $gameTime.setAttribute('disabled',"true")
    hide($resultHeader)
    show($timeHeader)
    isGameStarted = true
    $game.style.background = "white"
    hide($start)
    //$start.className = 'hide'
   
    var interval = setInterval(function(){
        var time = parseFloat($time.textContent)
        if(time <= 0){
            clearInterval(interval)
            endGame()
        }else{
            $time.textContent = (time - 0.1).toFixed(1)
        }
    },100)
    renderBox()
}
function setGameTime(){
    hide($resultHeader)
    show($timeHeader)
    $time.textContent = +$gameTime.value // "+$gameTime.value" = parseInt.$gameTime.value  
}
function endGame(){
    isGameStarted = false
    show($start)
    $game.style.background = "#ccc"
    $game.innerHTML = ""
    hide($timeHeader)
    $result.textContent = score.toString()
    show($resultHeader)
    $gameTime.removeAttribute('disabled')
}
function renderBox(){
    $game.innerHTML = ""
    var box = document.createElement("div")
    box.style.backgroundColor = randomColor()
    box.style.top = getRandomIntInclusive(20, 220) + "px"                       //max 220
    box.style.left = getRandomIntInclusive(20, 220) + "px"
    box.style.cursor = "pointer"
    box.style.border = "1px solid black"
    box.style.position = "absolute"
    box.style.width = box.style.height = getRandomIntInclusive(20, 80) + "px"
    $game.insertAdjacentElement('afterbegin',box)
    box.setAttribute("data-box",true)
}    
function boxGameClick(event){
    if(!isGameStarted){
        return
    }
    if(event.target.dataset.box){
        score++
        renderBox()
    }
}