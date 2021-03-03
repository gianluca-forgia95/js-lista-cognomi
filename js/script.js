/*
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
*/
//Chiedo all'utente un cognome
var nuovoCognome = prompt('Inserisci il tuo cognome');
//Creo array cognomi
var cognomi = ['','Forgia', 'Rossi','Bianchi','Mancini','Duzioni','Balsano','Verdi'];
//Pusho il nuovo cognome nell'array
cognomi.push(nuovoCognome);


//Definisco il ciclo
  i = 1;
  while ( i < cognomi.length ) {
  //Metto l'array in ordine alfabetico
  cognomi.sort();
  //Creo variabile per index nuovo cognome
  var a = cognomi.indexOf(nuovoCognome);
  //Stabilisco le condizioni per mostrare l'indice solo al cognome inserito
  if ( cognomi[i] == nuovoCognome ) {
    console.log( cognomi[i] + ' La sua posizione è ' + a );
  } else {
    console.log(cognomi[i]);
  }
  i++;
}
//Inserita lista con caratteri in minuscolo
  for (var i = 0; i < cognomi.length; i++){
  cognomi[i] = (cognomi[i].toLowerCase());
  console.log( cognomi[i]);
 }
