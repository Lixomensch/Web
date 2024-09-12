const FRONT = "front",
  BACK = "back",
  CARD = "card",
  ICON = "icon";

function start() {
  game.create_cards();
  init_board(game.cards);
}

function init_board(cards) {
  const gameBoard = document.getElementById("gameBoard");
  gameBoard.innerHTML = "";
  cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.id = card.id;
    cardElement.classList.add(CARD);
    cardElement.dataset.icon = card.icon;

    create_card_content(card, cardElement);
    cardElement.addEventListener("click", flipCard);

    gameBoard.appendChild(cardElement);
  });
}

function create_card_content(card, cardElement) {
  create_face_card(FRONT, card, cardElement);
  create_face_card(BACK, card, cardElement);
}

function create_face_card(face, card, cardElement) {
  const faceCardElement = document.createElement("div");
  faceCardElement.classList.add(face);

  if (face === FRONT) {
    const iconElement = document.createElement("img");
    iconElement.classList.add(ICON);
    iconElement.src = `./images/${card.icon}.svg`;
    faceCardElement.appendChild(iconElement);
  } else {
    faceCardElement.innerHTML = "&lt/&gt";
  }
  cardElement.appendChild(faceCardElement);
}

function flipCard() {
  if (game.setCard(this.id)) {
    this.classList.add("flip");

    if (game.secondCard) {
      if (game.check_match()) {
        game.clear_cards();
        if (game.check_gameOver()) {
          let gameOverLayer = document.getElementById("gameOver");
          gameOverLayer.style.display = "flex";
        }
      } else {
        setTimeout(() => {
          let firstCardElement = document.getElementById(game.firstCard.id);
          let secondCardElement = document.getElementById(game.secondCard.id);

          firstCardElement.classList.remove("flip");
          secondCardElement.classList.remove("flip");
          game.unflip_cards();
        }, 1000);
      }
    }
  }
}

function restart() {
  game.clear_cards();
  start();
  let gameOverLayer = document.getElementById("gameOver");
  gameOverLayer.style.display = "none";
}

start();
