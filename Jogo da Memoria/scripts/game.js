let game = {
  lockMode: false,
  firstCard: null,
  secondCard: null,
  cards: null,
  languages: [
    "c++",
    "golang",
    "html5",
    "java",
    "javascript",
    "lua",
    "python",
    "r",
    "rust",
    "swift",
  ],

  setCard: function (id) {
    let card = this.cards.filter((card) => card.id === id)[0];

    if (card.flipped || this.lockMode) {
      return false;
    }

    if (!this.firstCard) {
      this.firstCard = card;
      this.firstCard.flipped = true;
      return true;
    } else {
      this.secondCard = card;
      this.secondCard.flipped = true;
      this.lockMode = true;
      return true;
    }
  },

  check_match: function () {
    if (!this.secondCard) return false;
    return this.firstCard.icon === this.secondCard.icon;
  },

  clear_cards: function () {
    this.firstCard = null;
    this.secondCard = null;
    this.lockMode = false;
  },

  unflip_cards: function () {
    this.firstCard.flipped = false;
    this.secondCard.flipped = false;
    this.clear_cards();
  },

  check_gameOver: function () {
    return this.cards.filter((card) => !card.flipped) == 0;
  },

  create_cards: function () {
    this.cards = this.languages.flatMap((lan) => this.create_cards_pair(lan));
    this.shuffle();
  },

  create_cards_pair: function (lan) {
    return [
      {
        id: this.create_id_card(lan),
        icon: lan,
        flipped: false,
      },
      {
        id: this.create_id_card(lan),
        icon: lan,
        flipped: false,
      },
    ];
  },

  create_id_card: function (lan) {
    return `${lan}-${Math.floor(Math.random() * 1000)}`;
  },

  shuffle: function () {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  },
};
