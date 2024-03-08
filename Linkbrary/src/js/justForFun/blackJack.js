const playbtn = document.querySelector(".play-button");
const playerCardList = document.querySelector(".player-card-list");
const dealerCardList = document.querySelector(".dealer-card-list");
const playerScore = document.querySelector(".player-score");
const dealerScore = document.querySelector(".dealer-score");
const currentBalance = document.querySelector(".balance");
const currentBet = document.querySelector(".current-bet");

const suits = ["♠", "♥", "♦", "♣"];
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
document.querySelector("#minus-5").addEventListener("click", minusBet);
document.querySelector("#minus-5").addEventListener("click", minusBet);
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
  if (deck.length < 50) deck = createDeck();
  hitCard(playerCards, playerCardList, playerScore);
  updateScore(playerScore, playerCards);
  hitCard(playerCards, playerCardList, playerScore);
  updateScore(playerScore, playerCards);
  hitCard(dealerCards, dealerCardList, dealerScore);
  updateScore(dealerScore, dealerCards);
  if (checkBlackJack(playerCards)) {
    setTimeout(playerBlackJack, 500);
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
  el.appendChild(value);
  if (card.Suit === "♦" || card.Suit === "♥") el.classList.add("red-suit");
  return el;
}

function hitCard(playercards, playerlist, playerScore) {
  let newCard = deck.pop();
  if (parseInt(newCard.Weight) + parseInt(playerScore.textContent) > 21) {
    let foundAceCard = playercards.find(
      (card) => card.Value === "A" && card.Weight === 11
    );
    if (foundAceCard) {
      foundAceCard.Weight = 1;
    }
    if (!foundAceCard && newCard.Weight == 11) newCard.Weight = 1;
  }
  playercards.push(newCard);
  renderCard(newCard, playerlist);
}

function updateScore(playerScore, playercards) {
  let score = 0;
  for (card of playercards) {
    score += card.Weight;
  }
  playerScore.textContent = score;
}

function playerHit() {
  hitCard(playerCards, playerCardList, playerScore);
  updateScore(playerScore, playerCards);
  if (parseInt(playerScore.textContent) > 21) {
    setTimeout(dealerWin, 1000);
  }
}

async function dealerTurn() {
  async function takeTurn() {
    if (
      parseInt(dealerScore.textContent) >= 17 ||
      parseInt(playerScore.textContent) > 21
    ) {
      return;
    }

    hitCard(dealerCards, dealerCardList, dealerScore);
    updateScore(dealerScore, dealerCards);

    // 비동기 함수로 변경
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 재귀적으로 호출
    await takeTurn();
  }

  // takeTurn 함수가 완료된 후에 checkResults를 호출
  await takeTurn();
  checkResults();
}
function checkResults() {
  if (parseInt(playerScore.textContent) > 21) setTimeout(dealerWin, 1000);
  if (
    parseInt(dealerScore.textContent) > 21 ||
    parseInt(dealerScore.textContent) < parseInt(playerScore.textContent)
  ) {
    setTimeout(playerWin, 100);
    return;
  }
  if (parseInt(dealerScore.textContent) === parseInt(playerScore.textContent)) {
    itsAPush();
    return;
  }
  setTimeout(dealerWin, 100);
}

function playerWin() {
  console.log("playerwin");
  let prizeMoney = parseInt(currentBet.textContent);
  let balance = parseInt(currentBalance.textContent);
  balance += prizeMoney * 2;
  currentBalance.textContent = balance;
  alert("운이 좋군요?");
  resetGame();
}

function dealerWin() {
  console.log("dealerwin");
  alert("블랙잭은 '실력게임' 입니다");
  resetGame();
}

function itsAPush() {
  let prizeMoney = parseInt(currentBet.textContent);
  let balance = parseInt(currentBalance.textContent);
  balance += prizeMoney;
  currentBalance.textContent = balance;
  alert("놀라셨나요?");
  resetGame();
}

function resetGame() {
  document.querySelector(".game-controller").classList.toggle("hidden");
  document.querySelector(".player-card-display").classList.toggle("hidden");
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
    alert("산와 산와 산와머니~");
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

function checkBlackJack(playercards) {
  return playercards[0].Weight + playercards[1].Weight === 21;
}

function playerBlackJack() {
  console.log("playerblack");
  let prizeMoney = parseInt(currentBet.textContent);
  let balance = parseInt(currentBalance.textContent);
  balance += prizeMoney * 2.5;
  currentBalance.textContent = balance;
  alert("NICE BLACKJACK...");
  resetGame();
}

function begging() {
  let balance = parseInt(currentBalance.textContent);
  balance += 500;
  currentBalance.textContent = balance;
  alert("도박중독 전문상담 국번없이 1336");
}
