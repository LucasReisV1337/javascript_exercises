for(var i = 10;/* numero inicial*/ i > 0;/* fator limite */ i-- /*operacao a ser realizada*/) {

  console.log(i);

  if(i === 1)/* fator limite do break*/ {
    break;
  }  

}

console.log("Deu o break");

var x = 10;

while(x < 100) {

  x += 10;
  
  if(x === 60 || x === 90) {
    console.log("CONTINUE");
    continue;
  }

  console.log("Testando continue " + x);

}