var numero
var resultado
function insert(num)
{   
  // Colocar os número ali no lugar no numero ( aqui vai entrar um input ainda)
   numero = document.getElementById('resultado').innerHTML+=num
}
// limpa os resultados da calculador - <
function limpar(){
  document.getElementById('resultado').innerHTML =""
}
// Calcula os valor. Usei EVAL
function calcular(){
 resultado = document.getElementById('resultado').innerHTML  
  if(resultado){
  document.getElementById('resultado').innerHTML = eval(resultado);
}
}
// Apaga a sempre o ultimo numero digitado
function apagar(){
 var resultado =         document.getElementById('resultado').innerHTML
document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1) 
}
