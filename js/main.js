// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


// Variabile - Funzione -Libreria Vue
const { createApp } = Vue;
// Prompt per chiedere nome e cognome al nuovo studente
let dato1 = prompt('Inserisci il tuo nome');
let dato2 = prompt('Inserisci il tuo cognnome');
console.log(dato1, dato2);
// Funzione strapolata da Vue
createApp({
    // metodo di Vue che restituisce un oggetto
    data() {
        return {
            message: 'Hello Booleaners',
            imageSrc: './img/download.png',
            message2: 'Nuovo Studente:',
            nome: dato1,
            cognome: dato2,
        }
    }
// Monta l'app Vue nell'elemento con id "stampa"
}).mount('#stampa');

