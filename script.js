const gameArea = document.getElementById("game-area")
const startBtn = document.getElementById("start-btn")

startBtn.addEventListener("click", () => {
    const ghost = document.createElement("div")
    ghost.classList.add("ghost")

    const ghostSize = 70;

    const limitX = gameArea.clientWidth - ghostSize;
    const limitY = gameArea.clientHeight - ghostSize;

    const randomPosX = Math.random() * limitX
    const randomPosY = Math.random() * limitY;

    ghost.style.left = `${randomPosX}px`;
    ghost.style.top = `${randomPosY}px`

    gameArea.appendChild(ghost)
})
