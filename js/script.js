/*
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
*/
//Chiedo all'utente un cognome
var nuovoCognome = prompt('Inserisci il tuo cognome');
//Creo array cognomi
var cognomi = ['Forgia', 'Rossi','Bianchi','Mancini'];
//Pusho il nuovo cognome nell'array
cognomi.push(nuovoCognome);
//Definisco il ciclo
i = 0;
while ( i <= cognomi.length ) {
  console.log(cognomi[i]);
  i++;
}
