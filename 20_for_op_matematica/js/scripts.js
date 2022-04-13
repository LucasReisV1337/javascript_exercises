for(var i = 0; i < 10; i++)/* i=0 define a contagem inicial  i<10 define ate qual numero vai ser impresso  i++ define o metedo que vai ser feito que nesse caso e uma soma  */ 
{

  console.log("Repetindo for: " + i);

}

var arr = [1,2,3,4];

for(var j = 0; j < arr.length; j++) {
  console.log(arr[j]);
}

console.log(arr.length);

for(var x = 5;/*<<valor inicial*/ x < 50;/*<<limitador de rep*/ x *= 3/*fator multiplicativo */) {
  console.log(x);
}