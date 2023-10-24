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
2. all'interno di un ciclo for, faccio in modo che venga scritto all'interno dell'html la stringa di codice per far visualizzare l'immagine;
3. aggiungo le classi per far si che le immagini siano nascoste;
4. creo un if che mi fa girare le immagini, facendo si che una volta arrivato all'ultimo elemnto dell'array ricominci da capo;

**output**
creo il carosello in pagina in modo che cliccano la frccia in su: le immagini vadano dall'indice più alto al piu basso. Mentre se clicco la freccia in giù: le immagini vanno dall'indice più basso al più alto.