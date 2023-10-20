# js-simon


### Descrizione:
- Visualizzare in pagina 5 numeri casuali. 
- Da lì parte un timer di 30 secondi.
- Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

>#### Consigli del giorno:
>* Pensate prima in italiano.
>* Dividete in piccoli problemi la consegna.
>* Individuate gli elementi di cui avete bisogno per realizzare il programma.
### Bonus
1. Realizzare l'esercizio con grafica e senza utilizzo di prompt ma con casella/e  di input

*N.B. 
Attenzione che usando Google Chrome, il prompt può dare problemi con la visualizzazione dei numeri in pagina sui tempi di refresh del dom, lasciando i numeri visibili mentre il prompt è aperto.
Per ovviare a questo problema si può impostare 2 timeout differenti a distanza di 1 secondo: il primo nasconde i numeri dal dom (dopo 30 secondi) e il secondo chiede i numeri all'utente (dopo 31 secondi)*