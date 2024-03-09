const playbtn = document.querySelector(".play-button");
const playerCardList = document.querySelector(".player-card-list");
const dealerCardList = document.querySelector(".dealer-card-list");
const playerScore = document.querySelector(".player-score");
const dealerScore = document.querySelector(".dealer-score");
const currentBalance = document.querySelector(".balance");
const currentBet = document.querySelector(".current-bet");

const suits = ["♠", "♥", "♦", "♣"];
//const values = ["10", "A", "A", "A", "A", "A", "A", "A"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

function createDeck() {
  let numberOfDecks = 6;
  let deck = [];
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      let weight = parseInt(values[i]);
      if (values[i] == "J" || values[i] == "Q" || values[i] == "K") weight = 10;
      if (values[i] == "A") weight = 11;
      var card = { Value: values[i], Suit: suits[j], Weight: weight };
      for (let k = 0; k < numberOfDecks; k++) deck.push(card);
    }
  }
  deck = shuffleDeck(deck);
  alert("셔플하겠습니다");
  return deck;
}

function shuffleDeck(deck) {
  let shuffledDeck = [...deck];

  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }

  return shuffledDeck;
}

let playing = false;
document.querySelector(".play-button").addEventListener("click", startGame);
document
  .querySelector(".blackjack-start")
  .addEventListener("click", startBlackJack);
document.getElementById("stay").addEventListener("click", dealerTurn);
document.getElementById("hit").addEventListener("click", playerHit);
document.querySelector("#plus-5").addEventListener("click", plusBet);
document.querySelector("#plus-50").addEventListener("click", plusBet);
document.querySelector("#plus-500").addEventListener("click", plusBet);
document.querySelector("#minus-5").addEventListener("click", minusBet);
document.querySelector("#minus-50").addEventListener("click", minusBet);
document.querySelector("#minus-500").addEventListener("click", minusBet);
document
  .querySelector(".restart-button")
  .addEventListener("click", restartGame);
document.querySelector("#double").addEventListener("click", doubleBet);
document.querySelector("#hogu").addEventListener("click", begging);
let deck = [];
let playerCards = [];
let dealerCards = [];
function startGame() {
  deck = createDeck();
  playbtn.classList.add("hidden");
  playing = true;
  game();
  document.querySelector(".bet-controller").classList.toggle("hidden");
}

function game() {
  bet();
}

function bet() {
  document.querySelector(".blackjack-start").classList.toggle("hidden");
}

function startBlackJack() {
  document.querySelector(".blackjack-start").classList.toggle("hidden");
  document.querySelector(".bet-controller").classList.toggle("hidden");
  document.querySelector(".game-controller").classList.toggle("hidden");
  document.querySelector(".player-card-display").classList.toggle("hidden");
  initialCard();
}

function initialCard() {
  document.querySelector(".dealer-card-display").classList.toggle("hidden");
  if (deck.length < 50) deck = createDeck();
  hitCard(playerCards, playerCardList, playerScore);
  updateScore(playerScore, playerCardList);
  hitCard(playerCards, playerCardList, playerScore);
  updateScore(playerScore, playerCardList);
  hitCard(dealerCards, dealerCardList, dealerScore);
  updateScore(dealerScore, dealerCardList);
  if (checkBlackJack(playerCardList)) {
    setTimeout(checkResults(true), 500);
  }
}

function renderCard(card, hand) {
  console.log("rendercard");
  hand.appendChild(getCardUI(card));
}

function getCardUI(card) {
  let el = document.createElement("div");
  el.className = "card";
  let suit = document.createElement("div");
  suit.textContent = card.Suit;
  el.appendChild(suit);
  let value = document.createElement("div");
  value.textContent = card.Value;
  value.className = "value";
  el.appendChild(value);
  let weight = document.createElement("div");
  weight.textContent = card.Weight;
  weight.className = "weight";
  weight.classList.add("hidden");
  el.appendChild(weight);
  if (card.Suit === "♦" || card.Suit === "♥") el.classList.add("red-suit");
  return el;
}

function hitCard(playercards, playerlist, playerScore) {
  let newCard = deck.pop();
  if (parseInt(newCard.Weight) + calculateCardWeight(playerlist) > 21) {
    let foundAceCard;
    cards = playerlist.querySelectorAll(".card");
    for (card of cards) {
      if (card.querySelector(".weight").textContent == "11")
        foundAceCard = card;
    }
    if (foundAceCard) {
      foundAceCard.querySelector(".weight").textContent = 1;
    }
    if (!foundAceCard && newCard.Weight == 11) newCard.Weight = 1;
  }
  playercards.push(newCard);
  renderCard(newCard, playerlist);
}

function updateScore(playerScore, cardList) {
  let score = 0;
  score = calculateCardWeight(cardList);
  playerScore.textContent = score;
}

function playerHit() {
  hitCard(playerCards, playerCardList, playerScore);
  updateScore(playerScore, playerCardList);
  if (parseInt(playerScore.textContent) > 21) {
    setTimeout(500, checkResults());
  }
}

async function dealerTurn() {
  async function takeTurn() {
    if (
      parseInt(dealerScore.textContent) >= 17 ||
      parseInt(playerScore.textContent) > 21
    ) {
      return true;
    }

    hitCard(dealerCards, dealerCardList, dealerScore);
    updateScore(dealerScore, dealerCardList);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    await takeTurn();
  }

  await takeTurn();
  checkResults();
}
function checkResults(isBlackJack = false) {
  document.querySelector(".game-controller").classList.toggle("hidden");
  if (isBlackJack) {
    setTimeout(playerBlackJack, 500);
  } else if (parseInt(playerScore.textContent) > 21) {
    setTimeout(dealerWin, 500);
  } else if (
    parseInt(dealerScore.textContent) > 21 ||
    parseInt(dealerScore.textContent) < parseInt(playerScore.textContent)
  ) {
    setTimeout(playerWin, 500);
  } else if (
    parseInt(dealerScore.textContent) === parseInt(playerScore.textContent)
  ) {
    setTimeout(itsAPush, 500);
  } else {
    setTimeout(dealerWin, 500);
  }
  setTimeout(resetGame, 1000);
}

function playerWin() {
  console.log("playerwin");
  let prizeMoney = parseInt(currentBet.textContent);
  let balance = parseInt(currentBalance.textContent);
  balance += prizeMoney * 2;
  currentBalance.textContent = balance;
  alert("YOU WIN!\n운이 좋군요?");
}

function dealerWin() {
  console.log("dealerwin");
  alert("YOU LOSE\n블랙잭은 '실력게임' 입니다");
}

function itsAPush() {
  let prizeMoney = parseInt(currentBet.textContent);
  let balance = parseInt(currentBalance.textContent);
  balance += prizeMoney;
  currentBalance.textContent = balance;
  console.log(dealerCards);
  console.log(dealerCardList);
  console.log(playerCards);
  console.log(playerCardList);
  alert("PUSH(무승부)\n놀라셨나요?");
}

function resetGame() {
  console.log("reset Game");
  document.querySelector(".player-card-display").classList.toggle("hidden");
  document.querySelector(".dealer-card-display").classList.toggle("hidden");
  document.querySelector(".restart-button").classList.toggle("hidden");
  currentBet.textContent = 0;
  playerScore.textContent = 0;
  dealerScore.textContent = 0;
  while (playerCardList.firstChild) {
    playerCardList.removeChild(playerCardList.firstChild);
  }
  while (dealerCardList.firstChild) {
    dealerCardList.removeChild(dealerCardList.firstChild);
  }
  playerCards = [];
  dealerCards = [];
}

function plusBet(event) {
  const button = event.target;
  let balance = parseInt(currentBalance.textContent);
  let plusValue = parseInt(button.textContent.replace("+", ""));
  let betValue = parseInt(currentBet.textContent);
  if (balance < plusValue) {
    alert("베팅 금액이 부족합니다\n산와 산와 산와머니~");
    return;
  }

  balance -= plusValue;
  betValue += plusValue;
  currentBalance.textContent = balance;
  currentBet.textContent = betValue;
}

function minusBet(event) {
  const button = event.target;
  let balance = parseInt(currentBalance.textContent);
  let minusValue = parseInt(button.textContent);
  let betValue = parseInt(currentBet.textContent);
  if (minusValue + betValue < 0) {
    alert("쫄?");
    return;
  }
  balance -= minusValue;
  betValue += minusValue;
  currentBalance.textContent = balance;
  currentBet.textContent = betValue;
}

function restartGame() {
  document.querySelector(".bet-controller").classList.toggle("hidden");
  document.querySelector(".blackjack-start").classList.toggle("hidden");
  document.querySelector(".restart-button").classList.toggle("hidden");
}

function doubleBet() {
  let betValue = parseInt(currentBet.textContent);
  let balance = parseInt(currentBalance.textContent);

  if (betValue > balance) {
    alert("돈이 부족한데요?");
    return;
  }

  balance -= betValue;
  betValue *= 2;
  playerHit();
  currentBet.textContent = betValue;
  currentBalance.textContent = balance;
  dealerTurn();
}

function checkBlackJack(cardList) {
  return calculateCardWeight(cardList) === 21;
}

function playerBlackJack() {
  console.log("playerblack");
  let prizeMoney = parseInt(currentBet.textContent);
  let balance = parseInt(currentBalance.textContent);
  balance += prizeMoney * 2.5;
  currentBalance.textContent = balance;
  alert("NICE BLACKJACK...");
}

function begging() {
  let balance = parseInt(currentBalance.textContent);
  balance += 500;
  currentBalance.textContent = balance;
  alert("500 더 드렸습니다\n도박중독 전문상담 국번없이 1336");
}

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}

function calculateCardWeight(hand) {
  let cards = hand.getElementsByClassName("card");
  let totalWeight = 0;

  for (let i = 0; i < cards.length; i++) {
    let weightElement = cards[i].getElementsByClassName("weight")[0];
    if (weightElement) {
      totalWeight += parseInt(weightElement.textContent);
    }
  }

  return totalWeight;
}
