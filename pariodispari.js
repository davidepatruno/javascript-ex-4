var tipo_numero_utente = prompt("scegli tra pari e dispari");
var numero_utente = prompt("scegli un numero da 1 a 5");
var pari = (pari);
var dispari = (dispari);

if (tipo_numero_utente == pari) {
  var pari_utente = true;
  var pari_pc = false;
  console.log('utente ha scelto pari');
  document.writeln('hai scelto pari e lancerai il numero ' + numero_utente + "<br>" + 'il PC prende i dispari')
}
else {
  var dispari_utente = true;
  var dispari_pc = false;
  console.log('utente ha scelto dispari');
  document.writeln('hai scelto dispari e lancerai il numero ' + numero_utente + "<br>" + 'il PC prende i pari')
}

var cpu_numero = Math.floor(Math.random()*5);
document.writeln('e lancia ' + cpu_numero);
var somma = parseInt(cpu_numero + numero_utente);
console.log(somma);
