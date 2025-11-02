const gameArea = document.getElementById("game-area")
const startBtn = document.getElementById("start-btn")
const scoreDisplay = document.getElementById("score")
const showTime = document.getElementById("timer")
const startScreen= document.getElementById("start-screen")
const msg = document.getElementById("game-end-msg")
const playAgain =document.getElementById("play-again")
const endScreen= document.getElementById("end-screen")
const highScoreTxt= document.getElementById("high-score")
const finalScore =document.getElementById("final-score")
const highScoreDiplay = document.getElementById("high-scr")
const bgMusicBtn = document.getElementById("bgMusic-on-off-btn")
const goHomeBtn= document.getElementById("home-btn")


const bgMusic = new Audio("background.mp3")
bgMusic.loop= true
bgMusic.volume = 0.5

let gameStarted = false;
let spawnTimer;
let score = 0;
let time = 30
let timeCount
let isbgMusicOff = false

bgMusicBtn.addEventListener("click", () =>{


    isbgMusicOff= !isbgMusicOff
    bgMusic.muted= isbgMusicOff

    if (isbgMusicOff) {

        bgMusicBtn.innerHTML =`<i class="fa-solid fa-volume-xmark"></i> off`
    } else {
        bgMusicBtn.innerHTML =`<i class="fa-solid fa-volume-high"></i> on`
    }
})

let highScore =localStorage.getItem("highScore")

if(!highScore){

    highScore=0
    localStorage.setItem("highScore", highScore)


}

startBtn.addEventListener("click", startGame)

function startGame() {
    

    if (gameStarted){
          return

    } 
    
    gameStarted = true
    score = 0
    time =30


    highScoreDiplay.textContent = `High Score: ${highScore}`
    scoreDisplay.textContent= `score: ${score}`
    showTime.textContent= `Time: ${time}`
    playAgain.style.display="none"
    startScreen.style.display  ="none"
    gameArea.style.display= "block"
    endScreen.style.display="none"

    bgMusic.play()


    spawnTimer = setInterval(() => {
        spawnGhost()
    }, 1500);

    timeCount  =setInterval(() =>{
        timerFunc()
    }, 1000)
    
 }   

 function spawnGhost () {
    const oldGhost = document.querySelector(".ghost")
    if (oldGhost) {
        oldGhost.remove()
    }

    const ghost = document.createElement("div")
    ghost.classList.add("ghost")

    const ghostSize = 110;

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

        const ghost= document.querySelector(".ghost")

        if (ghost) {
            ghost.remove()

        }

        if (score > highScore){
        highScore =score

        localStorage.setItem("highScore", highScore)

    }

        msg.textContent =`Time up you caught ${score} ghosts`

        finalScore.textContent= `Final Score: ${score}`
        
        highScoreTxt.textContent = `High Score: ${highScore}`
        msg.style.display="block"
        playAgain.style.display="inline-block"
        endScreen.style.display ="flex"
        gameArea.style.display= "none"

}


playAgain.addEventListener("click", playAgainFunc)



function playAgainFunc (){
    endScreen.style.display= "none"
    gameArea.style.display="block"
    startGame()
}

goHomeBtn.addEventListener("click", () => {


    endScreen.style.display= "none"
    gameArea.style.display ="none"
    startScreen.style.display = "flex"
    msg.style.display = "none"

})