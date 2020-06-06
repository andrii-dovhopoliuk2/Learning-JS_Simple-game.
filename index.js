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
var score = 0 
$start.addEventListener('click',start)
$game.addEventListener('click',boxGameClick)
function start(){
    $game.style.background = "white"
    $start.classList.add('hide')
    //$start.className = 'hide'
    renderBox()
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
    if(event.target.dataset.box){
        score++
        renderBox()
    }
}