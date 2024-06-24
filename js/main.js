// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue;
let dato1 = prompt('Inserisci il tuo nome');
let dato2 = prompt('Inserisci il tuo cognnome');
console.log(dato1, dato2);
createApp({
    data() {
        return {
            message: 'Hello Booleaners',
            imageSrc: './img/download.png',
            message2: 'Nuovo Studente:',
            nome: dato1,
            cognome: dato2,
        }
    }

}).mount('#stampa');

