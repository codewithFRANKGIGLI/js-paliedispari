// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// variabili per l'utente:
const userChoice = prompt('pari o dispari?');
const userNumber = parseInt(prompt('dimmi un numero da 1 a 5'));

// funzione per numero da 1 a 5 'computer':
function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// funzione per numero pari
function isEven(number) {
    return number % 2 === 0;
}

// funzione del gioco:
function playGame(userChoice, userNumber) {
    console.log(userChoice);
    const computerNumber = getRandomNumber();
    const sum = userNumber + computerNumber; // Somma dei 2 numeri
    const isSumEven = isEven(sum); // uso la funzione per numero pari dentro la funzione, ma usando la somma come valore
    console.log(`${userNumber} + ${computerNumber} = "${sum}"`);
    
    if (userChoice === 'pari' && isSumEven) {  // se la scelta è pari e la somma è pari
        return 'Hai vinto!!';
    } else if (userChoice === 'dispari' && !isSumEven) {  // sel a scelta è dispari e la somma non è pari
        return 'Hai vinto!';
    } else { // altrimenti GAME OVER!!!
        return 'Hai perso!';
    }
}
console.log(playGame(userChoice, userNumber));