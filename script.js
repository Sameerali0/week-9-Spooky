const gameArea = document.getElementById("game-area")
const startBtn = document.getElementById("start-btn")
const scoreDisplay = document.getElementById("score")
const showTime = document.getElementById("timer")
const startScreen= document.getElementById("start-screen")

let gameStarted = false;
let spawnTimer;
let score = 0;
let time = 30
let timeCount

startBtn.addEventListener("click", () => {

    if (gameStarted){
          return

    } 
    
    gameStarted = true
    // startBtn.disabled =true;

startScreen.style.display  ="none"
gameArea.style.display= "block"


    spawnTimer = setInterval(() => {
        spawnGhost()
    }, 1500);

    timeCount  =setInterval(() =>{
        timerFunc()
    }, 1000)
    
 })   

 function spawnGhost () {
    const oldGhost = document.querySelector(".ghost")
    if (oldGhost) {
        oldGhost.remove()
    }

    const ghost = document.createElement("div")
    ghost.classList.add("ghost")

    const ghostSize = 120;

    const limitX = gameArea.clientWidth - ghostSize;
    const limitY = gameArea.clientHeight - ghostSize;

    const randomPosX = Math.random() * limitX
    const randomPosY = Math.random() * limitY;

    ghost.style.left = `${randomPosX}px`;
    ghost.style.top = `${randomPosY}px`

    ghost.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent =`Score: ${score}`

        ghost.remove();

    })

    gameArea.appendChild(ghost)
    
}

function timerFunc(){
time--
showTime.textContent = `Time: ${time}`
    if (time <= 0) {
    gameEnd()

    }

}

function gameEnd(){
        clearInterval(spawnTimer)
        clearInterval(timeCount)
        gameStarted = false
        // startBtn.disabled =false

        const ghost= document.querySelector(".ghost")

        if (ghost) {
            ghost.remove()

        }

        const msg = document.getElementById("game-end-msg")

        msg.textContent =`Time up you caught ${score} ghosts`
        msg.style.display="block"

        gameArea.appendChild(msg)
}
