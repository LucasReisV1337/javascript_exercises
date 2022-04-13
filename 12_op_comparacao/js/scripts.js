var idade = 20;
var possuiCarro = 1;

if (idade >= 18) {
  console.log("O usuário pode fazer a carteira");
} //>= maior ou igual

if (idade <= 17) {
  console.log("O usuário não pode fazer a carteira");
} //<= menor ou igual

if (possuiCarro) {
  console.log("O usuário já pode andar de carro");
}

var nome = "Lucas";

if (nome == "Lucas") {
  console.log(`O seu nome é ${nome}`);
} //== verificar se os valor sao iguais

if (nome != "Lucas") {
  console.log("O nome não é Lucas");
} //!= nao e igual
