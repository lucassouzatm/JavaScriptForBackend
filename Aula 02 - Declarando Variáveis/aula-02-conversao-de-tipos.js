//tipo de dado
// booleans

//conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString); //== ele compara os valores dentro de uma váriavel, já o === compara o geral, valor,tipo
console.log(numero + numeroString); //Ele não soma quando diferentes, ele adiona a String + o Número

//conversão explicita

console.log(Number(numeroString) + numero); //Utilizando Number() transformo a string em number e String() number em string


