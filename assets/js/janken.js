const gameMessageElement = document.querySelector(".message");
const player1Element = document.querySelector(".player-1");
const player2Element = document.querySelector(".player-2");
const player1HealthElement = document.querySelector(".player-1-health-bar");
const player2HealthElement = document.querySelector(".player-2-health-bar");
const playBtn = document.querySelectorAll(".play-btn");
const resetBtn = document.querySelector(".reset-btn");

let player1Health;
let player2Health;
let player2Option;
let isGameOver;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            determineWinnerByTime();
            timer = 0;
        }
    }, 1000);
}

const updateData = (element, message) => {
    element.textContent = message;
};

const init = () => {
    player1Health = 100;
    player2Health = 100;
    isGameOver = false;
    player1HealthElement.style.width = "100%";
    player2HealthElement.style.width = "100%";
    updateData(gameMessageElement, "Fight!");
    updateData(player1Element, "❔");
    updateData(player2Element, "❓");
    var duration = 60; // Converter para segundos
    display = document.querySelector('.timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};
init();

const player2Turn = () => {
    const player2Options = Math.trunc(Math.random() * 6) + 1;
    switch (player2Options) {
        case 1:
            player2Option = { name: "Warrior", emoji: "⚔️" };
            break;
        case 2:
            player2Option = { name: "Robot", emoji: "🤖" };
            break;
        case 3:
            player2Option = { name: "Zombie", emoji: "🧟‍♂️" };
            break;
        case 4:
            player2Option = { name: "Beast", emoji: "🦁" };
            break;
        case 5:
            player2Option = { name: "Alien", emoji: "👽" };
            break;
        case 6:
            player2Option = { name: "Mystic", emoji: "🔥" };
            break;
    }
};

const determineWinner = () => {
    if (player1Health <= 0 || player2Health <= 0) {
        if (player1Health > player2Health) {
            updateData(gameMessageElement, "You WIN!");
        } else if (player1Health < player2Health) {
            updateData(gameMessageElement, "You LOSE!");
        } else {
            updateData(gameMessageElement, "DRAW!");
        }
        isGameOver = true;
    }
};

const determineWinnerByTime = () => {
    if (player1Health > player2Health) {
        updateData(gameMessageElement, "You WIN!");
    } else if (player1Health < player2Health) {
        updateData(gameMessageElement, "You LOSE!");
    } else {
        updateData(gameMessageElement, "DRAW!");
    }
    isGameOver = true;
};

playBtn.forEach((e) => {
    e.addEventListener("click", () => {
        const player1Option = e.getAttribute("data-option");
        player2Turn();
        if (!isGameOver) {
            if (player1Option === "Warrior") {
                updateData(player1Element, "⚔️");
                updateData(player2Element, player2Option.emoji);

                if (player2Option.name === "Zombie") {
                    updateData(gameMessageElement, "Player 1 hit (+5)!");
                    player2Health -= 5;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                } else if (player2Option.name === "Mystic") {
                    updateData(gameMessageElement, "Player 1 hit (+6)!");
                    player2Health -= 6;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                } else if (player2Option.name === "Robot") {
                    updateData(gameMessageElement, "Player 2 hit (+5)!");
                    player1Health -= 5;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                } else if (player2Option.name === "Beast") {
                    updateData(gameMessageElement, "Player 2 hit (+6)!");
                    player1Health -= 6;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                } else {
                    updateData(player2Element, player2Option.emoji);
                    player1Health -= 4;
                    player2Health -= 4;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                    updateData(gameMessageElement, "It's a draw. Both takes (-4)!");
                }
            } else if (player1Option === "Robot") {
                updateData(player1Element, "🤖");
                updateData(player2Element, player2Option.emoji);

                if (player2Option.name === "Warrior") {
                    updateData(gameMessageElement, "Player 1 hit (+5)!");
                    player2Health -= 5;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                } else if (player2Option.name === "Beast") {
                    updateData(gameMessageElement, "Player 1 hit (+6)!");
                    player2Health -= 6;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                } else if (player2Option.name === "Zombie") {
                    updateData(gameMessageElement, "Player 2 hit (+5)!");
                    player1Health -= 5;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                } else if (player2Option.name === "Alien") {
                    updateData(gameMessageElement, "Player 2 hit (+6)!");
                    player1Health -= 6;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                } else {
                    updateData(player2Element, player2Option.emoji);
                    player1Health -= 4;
                    player2Health -= 4;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                    updateData(gameMessageElement, "It's a draw. Both takes (-4)!");
                }
            } else if (player1Option === "Zombie") {
                updateData(player1Element, "🧟‍♂️");
                updateData(player2Element, player2Option.emoji);

                if (player2Option.name === "Robot") {
                    updateData(gameMessageElement, "Player 1 hit (+5)!");
                    player2Health -= 5;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                } else if (player2Option.name === "Alien") {
                    updateData(gameMessageElement, "Player 1 hit (+6)!");
                    player2Health -= 6;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                } else if (player2Option.name === "Warrior") {
                    updateData(gameMessageElement, "Player 2 hit (+5)!");
                    player1Health -= 5;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                } else if (player2Option.name === "Mystic") {
                    updateData(gameMessageElement, "Player 2 hit (+6)!");
                    player1Health -= 6;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                } else {
                    updateData(player2Element, player2Option.emoji);
                    player1Health -= 4;
                    player2Health -= 4;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                    updateData(gameMessageElement, "It's a draw. Both takes (-4)!");
                }
            } else if (player1Option === "Beast") {
                updateData(player1Element, "🦁");
                updateData(player2Element, player2Option.emoji);

                if (player2Option.name === "Mystic") {
                    updateData(gameMessageElement, "Player 1 hit (+5)!");
                    player2Health -= 5;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                } else if (player2Option.name === "Warrior") {
                    updateData(gameMessageElement, "Player 1 hit (+6)!");
                    player2Health -= 6;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                } else if (player2Option.name === "Alien") {
                    updateData(gameMessageElement, "Player 2 hit (+5)!");
                    player1Health -= 5;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                } else if (player2Option.name === "Robot") {
                    updateData(gameMessageElement, "Player 2 hit (+6)!");
                    player1Health -= 6;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                } else {
                    updateData(player2Element, player2Option.emoji);
                    player1Health -= 4;
                    player2Health -= 4;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                    updateData(gameMessageElement, "It's a draw. Both takes (-4)!");
                }
            } else if (player1Option === "Alien") {
                updateData(player1Element, "👽");
                updateData(player2Element, player2Option.emoji);

                if (player2Option.name === "Beast") {
                    updateData(gameMessageElement, "Player 1 hit (+5)!");
                    player2Health -= 5;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                } else if (player2Option.name === "Robot") {
                    updateData(gameMessageElement, "Player 1 hit (+6)!");
                    player2Health -= 6;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                } else if (player2Option.name === "Mystic") {
                    updateData(gameMessageElement, "Player 2 hit (+5)!");
                    player1Health -= 5;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                } else if (player2Option.name === "Zombie") {
                    updateData(gameMessageElement, "Player 2 hit (+6)!");
                    player1Health -= 6;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                } else {
                    updateData(player2Element, player2Option.emoji);
                    player1Health -= 4;
                    player2Health -= 4;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                    updateData(gameMessageElement, "It's a draw. Both takes (-4)!");
                }
            } else {
                updateData(player1Element, "🔥");
                updateData(player2Element, player2Option.emoji);

                if (player2Option.name === "Alien") {
                    updateData(gameMessageElement, "Player 1 hit (+5)!");
                    player2Health -= 5;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                } else if (player2Option.name === "Zombie") {
                    updateData(gameMessageElement, "Player 1 hit (+6)!");
                    player2Health -= 6;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                } else if (player2Option.name === "Beast") {
                    updateData(gameMessageElement, "Player 2 hit (+5)!");
                    player1Health -= 5;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                } else if (player2Option.name === "Warrior") {
                    updateData(gameMessageElement, "Player 2 hit (+6)!");
                    player1Health -= 6;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                } else {
                    updateData(player2Element, player2Option.emoji);
                    player1Health -= 4;
                    player2Health -= 4;
                    player1HealthElement.style.width = player1Health < 0 ? "0%" : `${player1Health}%`;
                    player2HealthElement.style.width = player2Health < 0 ? "0%" : `${player2Health}%`;
                    updateData(gameMessageElement, "It's a draw. Both takes (-4)!");
                }
            }
            determineWinner();
        } else {
            updateData(gameMessageElement, "The game is over. Please reset to play again!");
        }
    })
});

function recarregarPagina(){
    window.location.reload();
}