var obj = {
  nome: "Lucas",
  idade: 20,
  profissao: "Programador",
  estaTrabalhando: false,
};

console.log(obj);

console.log(typeof obj);

console.log(obj.nome);//acessando parte especifa do objeto
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é " + obj.nome);//juntando uma parte especifa do objeto com outra funcao

obj.nome = "Pedro"; //mudando o nome do objeto, por ter sido declarado como var a mudanca pode ser feita

console.log(obj.nome);

obj.estaTrabalhando = true;

console.log(obj);

obj.faculdade = true //acrescentando uma nova descricao do objeto

console.log(obj);