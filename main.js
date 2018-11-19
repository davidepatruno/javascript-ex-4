var parola_inserita = prompt('inserisci una parola');
var copia_confronto = "";
var palindroma = false;
console.log(parola_inserita.length);

for (i = parola_inserita.length; i < 0; i--) {
  copia_confronto = copia_confronto + parola_inserita.charAt(i);
  if (parola_inserita = copia_confronto){
    var palindroma = true;
  }
}

if (palindroma = true){
  document.writeln("la parola è palindroma");
}
