//boolean
const usuarioLogado = true;
const contaPaga = false;

if (usuarioLogado == true) {
    console.log("Você está logado pode pagar as contas!!")
} else {
    console.log("Senha Incorreta!!!")
}

//truthy e falsy

//0 e String Vazia => false
console.log(0 == false);
console.log("" == false);

//1 => true
console.log(1 == true);


//undefined ==> valor indefinido
//null ==> vazio ou nada
let minhaVar;
let varNull = null;

console.log(typeof minhaVar);
console.log(typeof varNull); //resultado object pois quando criado ele foi criado como objeto um bug do próprio JS
let numero =3;
let texto = "Alura";

console.log(typeof numero); //Type of é uma palavra chave que serve para perguntarmos ao JS qual é o tipo de dado que está sendo guardado nessa variável.
console.log(typeof texto);