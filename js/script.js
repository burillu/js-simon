//costante numeri da generare
const totNum = 5;
// costante minimo
const min = 1;
//costante massimo
const max = 100;
//pulsante play
const btnPlay = document.getElementById('btn-play');
btnPlay.addEventListener('click', playGame);
//creo array con numeri casuali (senza numeri uguali tra uno e cento)
let randNumArray = rndDifferentNumb();
console.log(randNumArray);

// timeout di 30 secondi
//prendo input dell’utente
//ciclo sull’array
//quando trovo un numero uguale lo metto in una nuova array
//length mi da il punteggio


//funzione playGame
function playGame() {
    console.log('Ecco i 5 numeri. \n Hai 30s per memorizzarli :' + randNumArray);
    const number1 = setTimeout(yourInput, 5000);
    //clearTimeout(number1);


}

//funzione rndDifferentNumb
function rndDifferentNumb() {
   
    const array = [];

    
    let count = 0;
    while (array.length < totNum || count === 200) {
        const num = getRndInteger(min, max);
        if (!array.includes(num)) {
            array.push(num);
        }count++
    } 
    
    return array;
}
// funzione stampare i numeri a schermo
function yourInput(){
    //element = document.getElementById(target);
    console.clear();
    console.log('adesso è il tuo turno, inserisci i numeri');
    //faccio apparire input
    //al click del bottone leggo il valore
}
