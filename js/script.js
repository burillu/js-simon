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



//ciclo sull’array
//quando trovo un numero uguale lo metto in una nuova array
//length mi da il punteggio


//funzione playGame
function playGame() {
    //mostro i numeri per 30 secondi
    console.log('Ecco i 5 numeri. \n Hai 30s per memorizzarli :' + randNumArray);
    // timeout di 30 secondi
    const number1 = setTimeout(yourInput, 5000);
    //clearTimeout(number1);
    //prendo input dell’utente con funzione
    let inputUser = [1,22,58,41,5]; //inputReader()


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
    let input = document.createElement(input);
    console.clear();
    console.log('adesso è il tuo turno, inserisci i numeri');
    //faccio apparire input con un listener
    //al click del bottone leggo il valore
    
}
//leggo valore inserito in input
function inputReader(){

}
//stampo numeri a schermo
function printNumb(){

}
// funzione per passare da un input all altro
function onchechnge(i){
    let dom = document.getElementById("key"+i);
    let ml = dom.maxLength;
    let lg = dom.value.length;
    if (lg >= ml) {
        document.getElementById("key"+(i+1)).focus()
    }
}
// onchechnge();
