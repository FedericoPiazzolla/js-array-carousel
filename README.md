### Esercizio
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot.
In allegato troverete markup con il codice html e css già fatti.
**MILESTONE 1**
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
**MILESTONE 2**
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

### Svolgimento
**dichiariamo le variabili**
1. l'array con le immaghini all'interno;
2. le funzioni al click delle frecce;

**logica**
1. metto all'interno di un array il percorso delle immagini alle quali voglio che si applichi l'effetto carosello;
2. 