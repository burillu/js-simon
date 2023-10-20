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
    console.log('stiamo giocando');
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

