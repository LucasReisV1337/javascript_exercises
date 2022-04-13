var idade = 14 ;
var idadeMinima = 18;


if(idade > idadeMinima)/*Condicao para ser analisada*/ { /* bloco de codigo que sera executando com funcoes*/
  console.log("Pode fazer a carteira de habilitação");
}/*else sera visto depois*/


if(idade === 17 ) {
  console.log("Precisa esperar 1 ano ainda")
}

if(idade === 16 ) {
  console.log("Precisa esperar 2 anos ainda")
}

if(idade === 15) {
  console.log("Precisa esperar 3 anos ainda");
}

if(idade < 15 ) {
  console.log("Idade muito baixa")
}