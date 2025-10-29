const gameArea = document.getElementById("game-area")
const startBtn = document.getElementById("start-btn")

startBtn.addEventListener("click", () => {
    const ghost = document.createElement("div")
    ghost.classList.add("ghost")

    gameArea.appendChild(ghost)
})
