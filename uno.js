// Uno!

// Vorlage für die Spieler
const player = {
    name: "",
    hand: [],
    score: 0,
    level: "beginner",
};
// Alle Karten im Spiel
const stack = [
    { color: "green", number: "0" },
    { color: "green", number: "1" },
    { color: "green", number: "2" },
    { color: "green", number: "3" },
    { color: "green", number: "4" },
    { color: "green", number: "5" },
    { color: "green", number: "6" },
    { color: "green", number: "7" },
    { color: "green", number: "8" },
    { color: "green", number: "9" },

    { color: "blue", number: "0" },
    { color: "blue", number: "1" },
    { color: "blue", number: "2" },
    { color: "blue", number: "3" },
    { color: "blue", number: "4" },
    { color: "blue", number: "5" },
    { color: "blue", number: "6" },
    { color: "blue", number: "7" },
    { color: "blue", number: "8" },
    { color: "blue", number: "9" },

    { color: "red", number: "0" },
    { color: "red", number: "1" },
    { color: "red", number: "2" },
    { color: "red", number: "3" },
    { color: "red", number: "4" },
    { color: "red", number: "5" },
    { color: "red", number: "6" },
    { color: "red", number: "7" },
    { color: "red", number: "8" },
    { color: "red", number: "9" },

    { color: "yellow", number: "0" },
    { color: "yellow", number: "1" },
    { color: "yellow", number: "2" },
    { color: "yellow", number: "3" },
    { color: "yellow", number: "4" },
    { color: "yellow", number: "5" },
    { color: "yellow", number: "6" },
    { color: "yellow", number: "7" },
    { color: "yellow", number: "8" },
    { color: "yellow", number: "9" },
];

// Mischen, mischen, mischen!
// Ganz schön lang, diese Zeile... Geht bestimmt besser.
const shuffledStack = stack
    .sort(() => Math.floor(Math.random() - 0.5))
    .sort(() => Math.floor(Math.random() - 0.5))
    .sort(() => Math.floor(Math.random() - 0.5))
    .sort(() => Math.floor(Math.random() - 0.5))
    .sort(() => Math.floor(Math.random() - 0.5))
    .sort(() => Math.floor(Math.random() - 0.5))
    .sort(() => Math.floor(Math.random() - 0.5))
    .sort(() => Math.floor(Math.random() - 0.5));

console.log(shuffledStack, shuffledStack.length);
// Spieler 1 mit der Vorlage erstellen
const player1 = { ...player };

player1.name = "Fantasia";

// Fünf Karten ziehen
let card5 = shuffledStack.shift();
let card2 = shuffledStack.shift();
let card1 = shuffledStack.shift();
let card4 = shuffledStack.shift();
let card3 = shuffledStack.shift();

player1.hand = [card4, card2, card1, card3, card5];
// Spieler 2 mit der Vorlage erstellen
const player2 = { ...player };

player2.name = "Andi Feind";
// Fünf Karten ziehen

const card = {
    color: "",
    number: "",
};
let cardSecond1 = shuffledStack.shift();
let cardSecond2 = shuffledStack.shift();
let cardSecond3 = shuffledStack.shift();
let cardSecond4 = shuffledStack.shift();
let cardSecond5 = shuffledStack.shift();
player2.hand = [
    cardSecond5,
    cardSecond2,
    cardSecond3,
    cardSecond1,
    cardSecond4,
];
// Die erste aufgedeckte Karte.
// Die Spieler sollen die passenden Karten auf den gameStack ablegen.
const gameStack = shuffledStack.shift();

//Füge hinzu wenn hand same color or same number, play card and take card off carddeck!!!
if (player1.hand.card.color == gameStack.color) {
    console.log("Card is played by player1");
} else if (player1.hand.card.number == gameStack.number) {
    console.log("Card is played by player1");
} else if (player2.hand.card.color == gameStack.color) {
    console.log("Card is played by player1");
} else if (player2.hand.card.number == gameStack.number) {
    console.log("Card is played by player1");
}else{
    console.log("take new card");
    return gameStack.shift(card) => player.push(card)
}

// ...was ist denn hier passiert?!
console.log("player1", player1);
console.log("player2", player2);
console.log({ gameStack, shuffledStack, length: shuffledStack.length });
// Bitte hilf mir!
// 1. Spieler anlegen
// Es sollen zwei unterschiedliche Spieler angelegt werden können.
// Dafür soll aber unbedingt die Vorlage verwendet werden.
// 2. Karten ziehen
// Beide Spieler sollen fünf Karten vom Stapel ziehen.
// Natürlich dürfen die beiden nicht die gleichen Karten auf der Hand haben.
// 3. Spielvorbereitung
// Wir haben viel Code wiederholt. Können wir das eleganter lösen?
// Eine Funktion hier, eine Methode dort,...
// 4. Das Spiel!
// Hast Du Lust, das Spiel weiterzuführen? Auf geht's!
//Ausblenden;
