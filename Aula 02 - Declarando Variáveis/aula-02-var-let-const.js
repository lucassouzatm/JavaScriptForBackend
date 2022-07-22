//var
var altura = 5;
var comprimento = 7;

area = altura * comprimento; //mesmo sem declarar var o Node faz isso para gente, porém boas práticas é sempre declarar

console.log(area);

//let - é possível mudar valores
let forma = 'retângulo';
let alturaLucas = 5;
let comprimentoLucas = 7;

let areaLucas;

if (forma === 'retângulo') {
    areaLucas = alturaLucas * comprimentoLucas; //Também funciona sem declarar areaLucas porém só conseguimos usar depois de declarada
} else {
    areaLucas = (alturaLucas * comprimentoLucas) /2
}

console.log(areaLucas);

//const - não é possível alteração dos valores
const formaMateus = 'quadrado';
const alturaMateus = 5;
const comprimentoMateus = 7;
let areaMateus; //const não deixa declarar sem valor neste caso precisamos usar LET pois valor irá mudar

if (formaMateus === 'triangulo') {
    areaMateus = alturaMateus * comprimentoMateus; 
} else {
    areaMateus = (alturaMateus * comprimentoMateus) /2
}

console.log(areaMateus);