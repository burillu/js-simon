
fiveNumberGame()

function fiveNumberGame() {

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
    let randNumArray;
    //prendo il div row per dove stamperò i numeri
    const showNumb = document.getElementById('show-numbers');

    //prendo il div row dove stapero gli input
    const showInput = document.getElementById('show-input');

    //prendo il bottone per l'input
    const btnInput = document.getElementById('btn-input');

    //prendo il div dove scrivero il l'array dell'utente
    const showResult = document.getElementById('show-result');

    //prendo il div dove scriverò l punteggio finale
    const showScore = document.getElementById('show-score');

    let inputUser;







    //ciclo sull’array
    //quando trovo un numero uguale lo metto in una nuova array
    //length mi da il punteggio


    //funzione playGame
    function playGame() {
        // reset
        resetField();
        //mostro i numeri per 30 secondi

        randNumArray = rndDifferentNumb();
        console.log('Ecco i 5 numeri. \n Hai 30s per memorizzarli :' + randNumArray);
        printNumb(randNumArray, showNumb);
        // timeout di 30 secondi
        const number1 = setTimeout(yourInput, 3000);
        //clearTimeout(number1);
        //prendo input dell’utente con funzione
        //inputUser = inputReader();




    }

    //funzione rndDifferentNumb
    function rndDifferentNumb() {

        const array = [];


        let count = 0;
        while (array.length < totNum || count === 200) {
            const num = getRndInteger(min, max);
            if (!array.includes(num)) {
                array.push(num);
            } count++
        }

        return array;
    }
    // funzione stampare i numeri a schermo
    function yourInput() {
        //let input = document.createElement('input');
        // showInput.innerHTML = '';

        console.clear();
        showNumb.classList.add('d-none');
        btnInput.classList.remove('d-none');
        printInput();
        console.log('adesso è il tuo turno, inserisci i numeri');
        //faccio apparire input con un listener
        //al click del bottone leggo il valore
        btnInput.addEventListener('click', inputReader);
    }
    //leggo valore inserito in input
    function inputReader() {
        // prendo gli input e leggo il valore

        //creo array con un ciclo for
        inputUser = [];
        // ciclo for
        for (let index = 0; index < randNumArray.length; index++) {
            const element = parseInt(document.getElementsByTagName('input')[index].value);
            inputUser.push(element);
        }

        gameOver();
        //let score = matchNum().length;
        //return console.log('l\'utente inserisce questi numeri: ' + inputUser + 'e questo è il tuo punteggio: ' + score);

    }
    //stampo numeri a schermo
    function printNumb(randNumArray, target) {
        target.innerHTML = '';
        for (let index = 0; index < randNumArray.length; index++) {
            const element = randNumArray[index];
            const divCol = document.createElement('div');
            const divSquare = document.createElement('div');
            divCol.classList.add('col');
            divSquare.classList.add('square');
            divCol.append(divSquare);
            (isNaN(element)) ? divSquare.innerHTML = `<h2> ## </h2> ` : divSquare.innerHTML = `<h2> ${element}</h2> `;
            target.append(divCol);


        }



    }
    //stampo campi di input
    function printInput() {
        for (let index = 0; index < randNumArray.length; index++) {
            const divCol = document.createElement('div');
            const divInput = document.createElement('input');
            divCol.classList.add('col');
            divInput.classList.add('form-control');
            divInput.setAttribute('type', 'number');
            divInput.setAttribute('maxlength', '1');
            divInput.setAttribute('id', 'key' + (index + 1))
            //divInput.addEventListener('oninput', onchechnge);
            divCol.append(divInput);
            showInput.append(divCol);
        }

    }
    // funzione per passare da un input all altro
    function onchechnge(i) {
        let dom = document.getElementById("key" + i);
        let ml = dom.maxLength;
        let lg = dom.value.length;
        if (lg >= ml) {
            document.getElementById("key" + (i + 1)).focus()
        }
    }
    // funzione che confronta le due array creandone una nuova con i match;
    function matchNum() {
        const matchArray = [];
        for (let i = 0; i < randNumArray.length; i++) {
            const element = randNumArray[i];
            if (inputUser.includes(element)) {
                matchArray.push(element)
            }

        }

        return matchArray;
    }
    function gameOver() {
        //rimuovo il listener dal bottone controlla i numeri
        btnInput.removeEventListener('click', inputReader);
        // appaiono di nuovo i numeri
        showNumb.classList.remove('d-none');
        //scompare l'input e il bottone
        btnInput.classList.add('d-none');
        showInput.classList.add('d-none');
        //stampo i numeri inseriti dall'utente
        printNumb(inputUser, showResult);
        // scrivo il punteggio
        printScore();

    }
    function printScore() {
        const element = document.createElement('h2');
        let score = matchNum().length;
        element.classList.add('text-center');
        element.innerText = `Il tuo Punteggio è ${score}`;
        showScore.append(element);
        return console.log('l\'utente inserisce questi numeri: ' + inputUser + 'e questo è il tuo punteggio: ' + score);
    }
    function resetField() {
        showNumb.innerHTML = '';
        showNumb.classList.remove('d-none');
        showInput.innerHTML = '';
        showInput.classList.remove('d-none');
        showResult.innerHTML = '';
        showScore.innerHTML = '';
        randNumArray = null;

    }

}

