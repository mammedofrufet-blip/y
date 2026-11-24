const start = document.querySelector(".start")
const flBtn = document.querySelector(".fl-btn")
const gameArea = document.querySelector(".game-area")
const flTimer = document.querySelector(".game-fl-timer")
const letters = ["A", "B", "C", "D", "E", "G", "A", "B", "C", "D", "E", "G"]
let say = 0
let score = 0
let elements = []
let cixarilmis = []

start.addEventListener("click", () => {
    flBtn.classList.add("btn-hidden")
    flTimer.classList.add("game-fl-timer-show")
    let flTimerCount = 29
    const flInterfal = setInterval(() => {
        flTimer.textContent = flTimerCount >= 10 ? `00:${flTimerCount}` : `00:0${flTimerCount}`

        if (flTimerCount === 0 && cixarilmis.length !== Math.floor(letters.length / 2)) {
            clearInterval(flInterfal)
            flTimer.textContent = "You lost😕"
        }
        if (flTimerCount > 0 && cixarilmis.length === Math.floor(letters.length / 2)) {
            clearInterval(flInterfal)
            flTimer.textContent = "You win🏆"
            gameArea.classList.remove("baclground-10")
            gameArea.classList.remove("baclground-5")
        }
        if (flTimerCount <= 10) {
            gameArea.classList.add("background-10")
        }
        if (flTimerCount <= 5) {
            gameArea.classList.add("background-5")
        }
        if (flTimerCount === 0) {
            gameArea.classList.remove("background-5")
            gameArea.classList.remove("background-10")
        }
        flTimerCount--
    }, 1000)


    const arr = []
    gameArea.innerHTML = ``
    for (let i = 0; i < 12; i++) {
        let random;

        do {
            random = Math.floor(Math.random() * letters.length)
        } while (arr.includes(random));
        const letterBox = document.createElement("span")
        letterBox.textContent = letters[random]
        letterBox.className = "game-box"
        gameArea.appendChild(letterBox)
        arr.push(random)
        letterBox.addEventListener("click", () => {
            letterBox.textContent = letters[random]
            elements.push(letters[random])
            say++
            if (say === 2) {
                if (elements[0] === elements[1]) {
                    score++
                    cixarilmis.push(elements[0])
                }
                else {
                    const gameBoxes = document.querySelectorAll(".game-box")
                    gameBoxes.forEach((e) => {
                        if (!cixarilmis.includes(e.textContent)) {
                            e.textContent = "X"
                        }
                    })
                }
                say = 0
                elements = []
            }
        })
    }
    console.log(arr)
    const letterBoxes = document.querySelectorAll(".game-box")
    setTimeout(() => {
        letterBoxes.forEach((e) => {
            e.textContent = "X"
        })
    }, 4000)

})


const ball = document.querySelector(".ball")
const down = document.querySelector(".down")
const up = document.querySelector(".up")
const cubs = document.querySelector(".cubs")
const tp = document.querySelector(".total-points")
const cubsWidth = cubs.offsetWidth;
ball.style.right = cubsWidth - 70 + "px"
let totalPoints = 0
let point = 10
const tops = [10, 65, 120, 170, 220, 270]
const colors = ["#ff1900", "#3498db", "#2ecc71", "#f1c40f", "#9b59b6", "#e67e22"];
const rights = []
const allTops = []
const createBall = () => {
    const r = Math.floor(Math.random() * 41) - 20
    const rt = Math.floor(Math.random() * tops.length)
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const t = `<div class="top" style="top: ${tops[rt]}px; background-color: ${randomColor};"><span class="regem">${r}</span></div>`
    cubs.insertAdjacentHTML("beforeend", t);
    rights.push(20)
    allTops.push(tops[rt])
}
const moveBall = () => {
    const balls = document.querySelectorAll(".top")
    balls.forEach((e, i) => {
        e.style.right = rights[i] + "px"
        if (rights[i] > cubsWidth - 70 && allTops[i] >= point && allTops[i] <= point+60) {
            totalPoints += Number(e.textContent)
            tp.textContent = totalPoints
            rights.splice(i, 1)
            allTops.splice(i, 1)
            e.remove()
        }
        else {
            if (rights[i] >= cubsWidth) {
                rights.splice(i, 1)
                allTops.splice(i, 1)
                e.remove()
            }
        }
        rights.splice(i, 1, rights[i] + 50)

    })
    console.log(rights.length)
}


down.addEventListener("click", () => {
    point += 10
    ball.style.top = point + "px"
    if (point > 300) {
        point = 0
    }
})

up.addEventListener("click", () => {
    point -= 10
    ball.style.top = point + "px"
    if (point < 0) {
        point = 300
    }
})

const ballInterval = setInterval(createBall, 2000)
const ballsInterval = setInterval(moveBall, 1001)
