// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Su internet ci sono soluzioni con join e reverse, non potete usarle!

// Chiedo  l'inserimento della parola
let word = prompt("Inserisci una parola:");

//  Funzione che controlla se la parola è palindroma
function isPalindrome(word) {
    let reversedWord = ""; // variabile vuota
    // ciclo for per  popolare la variabili reversedWord inversando la parola inserita
    for (i = word.length - 1; i >= 0; i--){ 
        reversedWord += word[i];
    }
    // se sono uguali allora:
    if (reversedWord === word) {
        return true;
    } else {  // altrimenti
        return false;
    }
}
// sparo in console se è vero o no:
console.log(`La parola ${word} è un palindromo? ${isPalindrome(word)}`);