const gameArea = document.getElementById("game-area")
const startBtn = document.getElementById("start-btn")
const scoreDisplay = document.getElementById("score")

let gameStarted = false;
let spawnTimer;
let score = 0;

startBtn.addEventListener("click", () => {

    if (gameStarted) return; 
    
    gameStarted = true
    startBtn.disabled =true;

    spawnTimer = setInterval(() => {
        spawnGhost()
    }, 1500);
    
 })   

 function spawnGhost () {
    const oldGhost = document.querySelector(".ghost")
    if (oldGhost) {
        oldGhost.remove()
    }

    const ghost = document.createElement("div")
    ghost.classList.add("ghost")

    const ghostSize = 70;

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