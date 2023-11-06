"use strict";
//como usar funções no typescript
//anotações de tipo de variáveis
function greet(nome) {
    console.log("hello," + nome.toUpperCase() + "!!"); // estou pegando o nome e transformando em amiúsculo
}
greet("eduarda"); //se eu colocasse um número não funcionaria pq só aceita do tipo string
//Anotações do tipo de retorno, aparecem após a lista de parâmetros
function getFavoriteNumber() {
    return 26;
}
//tipos de objetos, object type, qualquer valor de js com propriedades
//função que usa um objetos pontiagudo tendo os parâmetros obrigatórios
function printCoord(pt) {
    console.log("a coordenada X vale" + pt.x);
    console.log("a coordenada y vale" + pt.y);
}
printCoord({ x: 3, y: 7 }); //para definir os valores dos objetos, coloca o nome da var que foi criada e adiciona os valores
//objeto com proprieades opcionais
function imprimirNome(obj) {
    // ...
}
//como eu defini que a segunda pode receber um parâmeto ou não, não vai dar erro.
imprimirNome({ primeira: "Bob" });
imprimirNome({ primeira: "Alice", segunda: "Alisson" });
//em uma função onde o meu objeto recebe um parâmetro | undefined, eu não posso apenas imprimí-lo na tela, pq vai dar erro.
// é necesário criar uma condição, para determinar que, quando o valor for != de undefined, ele imprima alguma coisa.
//EX
function printName(obj) {
    //console.log(obj.last.toUpperCase()); vai dar erro, pq o valor de last pode ser undefined, então preciso criar uma condição
    if (obj.last !== undefined) {
        //se last for diferente de undefined imprima obj.last.toUpperCase()
        // OK
        console.log(obj.last.toUpperCase());
    }
    console.log(obj.last?.toUpperCase());
}
//TIPOS DE UNIÃO, em um objeto eu posso ter mais de um type
function printId(id) {
    //id pode receber um valor de numero ou string
    if (typeof id === "string") {
        //quando id receber string ele transforma td em miúscula
        //nesta branch id é do tipo 'string'
        console.log(id.toUpperCase());
    }
    else {
        // id é do tipo number
        console.log(id);
    }
}
printId(12);
printId("maria e joão");
printId("23, 544, 78");
//Usando uma função como Array.isArray
function welcomePeople(x) {
    //está dizendo que pode receber um array de string ou apenas 1 string
    if (Array.isArray(x)) {
        // aqui 'X' é m array 'string[]'
        console.log("Hello, " + x.join(" and ")); // .join junta todos os elementos de um array em uma string e retorna esta string
    }
    else {
        // aqui 'X' é 'string'
        console.log("Welcome lone traveler " + x);
    }
}
//fatiando um array com o método .SLICE
// o tipo de retorno é inferido como um array de números ou uma string
function getFirstThree(x) {
    return x.slice(0, 3); //.slice retorna para mim o primeiro até o 2 índice ppercorrenduó um array
}
getFirstThree("maria");
getFirstThree([1, 2, 3, 4]);
// Exactly the same as the earlier example
function Coord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
Coord({ x: 100, y: 100 });
function sanitizeInput(str) {
    return sanitize(str);
}
// crie uma nentrada higienizada
let userInput = sanitizeInput(getInput());
// ainda pode ser reatribuido com uma string
userInput = "new input";
function imprimirCoordenada(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
imprimirCoordenada({ x: 100, y: 100 });
const urso = getUrso();
urso.name;
urso.honey;
const bear = getBear();
bear.name;
bear.honey;
//combinações literais em uniões
function printText(s, alignment) {
    // ...
}
printText("Hello, world", "left");
function configure(x) {
    // ...
}
configure({ width: 100 });
configure("auto");
//configure("automatic"); não vai aceitar esse valor
