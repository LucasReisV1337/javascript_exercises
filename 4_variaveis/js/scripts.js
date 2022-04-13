var teste = 1;

var nome = "João";

console.log(teste);

console.log(nome);

teste = "Matheus";

console.log(teste);
// teste agora alem de mostrar 1 no console mostra tabem o nome Matheus e devido ao escopo de teste

var $nome = "ASD";
var _nome = "ASD2";
//testes

console.log($nome);
console.log(_nome);
//testes
var nome5 = "ASD3";

console.log(nome5);
//testes

var meuPrimeiroNome = "Matheus";

console.log(meuPrimeiroNome);
//primeiro camelCase (Usar letra maiuscula no lugar do espaco)

var meuSobrenome = "Battisti";

console.log(meuSobrenome);

console.log(meuPrimeiroNome, meuSobrenome);

// usando mais de uma variavel

let testando = 1;
const ola = 2;

console.log(testando);
console.log(ola);

var meuNome;

console.log(meuNome); // indefinido

meuNome = "Matheus";

console.log(meuNome);
//var = escopo global pode ser usada em qualquer parte do codigo, mas pode ser a mesma var pode ser declara de novo e ser atualizada
//let = escopo local pode ser usada em um bloco especifico, pode ser atualizada mas nao pode ser declarada novamente
//const = escopo local pode ser usada em um bloco especifico, nao pode ser atualizada nem usada novamente
