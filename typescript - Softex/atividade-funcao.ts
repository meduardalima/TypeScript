//2. Implemente o código do slide de número 15.
function Teste(teste: string) {
  console.log("estudar é muito bom");
  console.log("paciência e persistência");
  console.log("revisão é a mãe do aprendizado");
}
Teste("estudar é muito bom");
Teste("eduarda lima");

//3. Implemente o código do slide de número 24.
function Soma(num1: number, num2: number) {
  console.log(num1 + num2);
}
Soma(2, 5);

//4. Implemente o código do slide de número 33.

function Soma1(num1: number, num2: number) {
  return num1 + num2;
}
Soma1(2, 8);

//6. Crie uma função chamada "isPar" que receba um número inteiro como parâmetro e retorne "true"
//se o número for par ou "false" caso contrário.

function isPar(num: number) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
isPar(14);

//7. Elabore uma função chamada "media" que receba três notas como parâmetros e retorne a média
//aritmética delas.

function Media(nota1: number, nota2: number, nota3: number) {
  let soma1: number = nota1 + nota2 + nota3;
  return soma1 / 3;
}
Media(9, 7, 5);

//8. Elabore uma função chamada "imc" que receba o peso (em kg) e a altura (em metros) de uma
//pessoa e retorne o índice de massa corporal (IMC) dela.
function Imc(peso: number, altura: number) {
  return (altura * altura) / peso;
}
Imc(64, 1.64).toFixed(2);

//9. Elabore uma função chamada "calcularDesconto" que receba o valor de um produto e o
//percentual de desconto como parâmetros e retorne o valor com o desconto aplicado.
function CalcularDesconto(valor: number, percentualDesconto: number) {
  let desconto = valor * (percentualDesconto / 100);
  return valor - desconto;
}
CalcularDesconto(1000, 10);

//10. Elabore uma função chamada "calcularImpostoRenda" que receba o salário bruto de uma pessoa
//como parâmetro e retorne o valor do imposto de renda a ser pago, considerando as seguintes
//faixas de renda:
function CalcularImpostoRenda(salarioBruto: number) {
  if (salarioBruto <= 1903.98) {
    return console.log("isento");
  } else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
    let taxa = salarioBruto * 0.075;
    return taxa;
  } else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
    let taxa2 = salarioBruto * 0.15;
    return taxa2;
  } else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
    let taxa3 = salarioBruto * 0.225;
    return taxa3;
  } else if (salarioBruto >= 4664.68) {
    let taxa4 = salarioBruto * 0.275;
    return taxa4;
  }
}

console.log(`você terá que pagar R$${CalcularImpostoRenda(4000)} de imposto`);

/*11. Faça uma função chamada "calcularMediaArredondada" que receba uma lista de números como
parâmetro e retorne a média aritmética desses números, arredondada para o inteiro mais
próximo.*/
// a lista tem que ser um array

function CalcularMediaArredondada(array: number[]) {
  let soma = 0;
  for (const element of array) {
    soma = soma + element;
  }
  return soma / array.length;
}
//let arrayNumbers = [];
let numero: number = -1;
let arrayNumeros: number[] = [];
while (numero !== 0) {
  let number = prompt("digite um número:");
  arrayNumeros.push(numero);
}

CalcularMediaArredondada([1, 3, 5]);

// 12. Desenvolva uma função chamada "contarDigitosParesImpares" que receba um número inteiro
// como parâmetro e retorne a quantidade de dígitos pares e a quantidade de dígitos ímpares
// presentes nesse número.
function contarDigitosParesImpares(numero: number): {
  pares: number;
  impares: number;
} {
  let digitos = numero.toString().split("");
  let pares = 0;
  let impares = 0;

  for (let i = 0; i > digitos.length; i++) {
    if (parseInt(digitos[i]) % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }
  return { pares: pares, impares: impares };
}
console.log(contarDigitosParesImpares(123456789));

// 13. Crie uma função chamada "calcularMediaAlunos" que receba uma lista de alunos, onde cada aluno
// é representado por um objeto com os atributos "nome" e "nota". A função deve calcular e
// retornar a média das notas de todos os alunos.
interface Aluno {
  nome: string;
  nota: number;
}
function CalcularMedia(alunos: Aluno[]) {
  let soma = 0;
  for (const aluno of alunos) {
    soma = +aluno.nota;
  }
  return soma / alunos.length;
}
let listaDeAlunos = [
  { nome: "eduarda", nota: 9 },
  { nome: "alice", nota: 7 },
  { nome: "Caio", nota: 8 },
];
let media = CalcularMedia(listaDeAlunos);
console.log(media.toFixed(2));

// 14. Crie uma função chamada "calcularIdade" que receba o ano de "nascimento" de uma pessoa como
// parâmetro e retorne a idade atual.

function CalcularIdade(anoNascimento: number) {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const idade = anoAtual - anoNascimento;
  return idade;
}
console.log(CalcularIdade(2001));

// 15. Crie uma função chamada "gerarTabuada" que receba um "número" como parâmetro e exiba a
// tabuada desse número de 1 a 10 no console.

function GerarTabuada(numero: number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

GerarTabuada(5);

// 16. Escreva uma função chamada "advinheNumero" que gera aleatoriamente um número inteiro entre
// 1 e 100. Em seguida, permita que o usuário insira tentativas para adivinhar o número. A função
// deve dar dicas ao usuário se o número correto é maior ou menor do que a tentativa. Quando o
// usuário acertar, exiba uma mensagem de parabéns e informe a quantidade de tentativas
// utilizadas.

function advinheNumero(): void {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;
  let acertou = false;

  while (!acertou) {
    const palpite = Number(prompt("Advinhe um número entre 1 e 100"));
    tentativas++;
    if (palpite === numeroAleatorio) {
      alert(`Parabebéns! Você acertou em ${tentativas}tentativas.`);
      acertou = true;
    } else if (palpite > numeroAleatorio) {
      alert("Numero menor, tente novamente");
    } else {
      alert("O número é maior. Tente novamente.");
    }
  }
}

// 17. Crie uma função chamada "verificarPropriedade" que receba um objeto e uma string como
// parâmetros, e retorne true se o objeto possuir a propriedade com o nome especificado na string, e
// false caso contrário.
function verificarPropriedade(objeto: any, nomePropriedade: string): boolean {
  return nomePropriedade in objeto;
}

const user = {
  nome: "eduarda",
  idade: 22,
};

console.log(verificarPropriedade(user, "idade"));

// 18. Faça uma função chamada "calcularPrecoProduto" que receba o "valor de custo" de um produto, a
// "margem de lucro" desejada (em percentual) e o "valor do frete" como parâmetros. A função deve
// calcular e retornar o preço de venda do produto, considerando que o preço de venda é igual ao
// custo acrescido da margem de lucro e do valor do frete.

function calcularPrecoProduto(
  valorCusto: number,
  margemLucro: number,
  valorFrete: number
) {
  let precoVenda = valorCusto * (1 + margemLucro / 100) + valorFrete;
  return precoVenda;
}

console.log(calcularPrecoProduto(100, 10, 10).toFixed(2));

// 19. Escreva uma função que aceite uma string como parâmetro e encontre a palavra mais longa dentro
// da string. String de exemplo: 'Tutorial de desenvolvimento da web'. Resultado esperado:
// 'Desenvolvimento'.
function encontrarPalavraMaisLonga(frase: string) {
  const palavras = frase.split(" ");
  let palavraMaisLonga = "";
  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length > palavraMaisLonga.length) {
      palavraMaisLonga = palavras[i];
    }
  }
  return palavraMaisLonga;
}
console.log(encontrarPalavraMaisLonga("tutorial de desenvolvimento na web"));

// 20. Escreva uma função que pegue uma lista de strings e as imprima, uma por linha, em um quadro
// retangular. Por exemplo, a lista ["Hello", "World", "in", "a", "frame"] é impressa como:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********
function imprimirQuadroRetangular(lista: string[]) {
  const largura = Math.max(...lista.map((s) => s.length)) + 4;
  const linha = "*".repeat(largura);
  console.log(linha);
  for (const s of lista) {
    const espacos = " ".repeat(largura - s.length - 2);
    console.log(`* ${s}${espacos}*`);
  }
  console.log(linha);
}

console.log(imprimirQuadroRetangular(["eduarda", "lima", "alice", "Caio"]));

// 22. Crie uma função que recebe um array de objetos com informações sobre livros (título, autor, ano,
// etc.) e retorne um novo array apenas com os livros escritos por determinado autor.

interface Book {
  title: string;
  author: string;
  year: number;
}

function filterBooksByAuthor(books: Book[], author: string) {
  return books.filter((book) => book.author === author);
}
interface Book {
  title: string;
  author: string;
  year: number;
}

const books: Book[] = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    year: 1998,
  },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
];

const jkRowlingBooks = filterBooksByAuthor(books, "J.K. Rowling");
console.log(jkRowlingBooks);

// 24. Escreva uma função que recebe um array de objetos com informações sobre carros (com marca,
// modelo, ano, etc.) e retorne um novo array apenas com os carros fabricados após um certo ano
// específico.

interface Car {
  brand: string;
  model: string;
  year: number;
}

function filterCarsByYear(cars: Car[], year: number): Car[] {
  return cars.filter((car) => car.year > year);
}
const cars = [
  { brand: "Ford", model: "Mustang", year: 1964 },
  { brand: "Ford", model: "Fiesta", year: 2019 },
  { brand: "Chevrolet", model: "Camaro", year: 2022 },
  { brand: "Chevrolet", model: "Onix", year: 2018 },
];

const filteredCars = filterCarsByYear(cars, 2020);
console.log(filteredCars);
