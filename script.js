//EX1
let quantosNumeros = prompt('Quantos números você deseja somar?');
let somaFinal = 0;

for(let i = 0; i < quantosNumeros; i++){
    let numero = prompt('Digite um numero a ser somado: ');
    somaFinal = parseInt(somaFinal) + parseInt(numero);
}

console.log('A soma final deu: ' + somaFinal);

//EX2
let contagem = 10;

function contagemRegressiva(){
    setInterval(() => {
        if(contagem >= 0){
            console.log(contagem);
            contagem--; 
            if (contagem === 0) {
                console.log("LANÇAMENTO!!!");
                clearInterval(contagemRegressiva); 
              }
        }

      }, 1000);
} 

contagemRegressiva();

//EX3
let gastoTotal = 0;
let ganhoFinal = 0;
let saldoFinal = 0;

for(let i = 0; i < 12; i++){
    let gastos = prompt('Quanto a empresa gastou no mês ', i,'?');
    gastoTotal = parseInt(gastoTotal) + parseInt(gastos);
}
for(let i = 0; i < 12; i ++){
    let ganhos = prompt('Quanto a empresa ganhou no mês ', i,'?');
    ganhoFinal = parseInt(ganhoFinal)+ parseInt(ganhos);
}

saldoFinal = parseInt(ganhoFinal) - parseInt(gastoTotal);

console.log('O gasto anual da empresa foi de R$ ', gastoTotal, ',00');
console.log('O lucro total da empresa no ano foi de R$ ', ganhoFinal, ',00');
console.log('O saldo da empresa, no final do ano, foi de ', saldoFinal, ',00');

function verificarLucro(saldoFinal){
    if(saldoFinal > 0){
        console.log('Tu teve lucro pae. O lucro foi de: R$ ', saldoFinal, ',00');
    } else {
        console.log('Tu teve prejuízo pae. Tu perdeu: R$ ', saldoFinal, ',00');
    }
}

verificarLucro(saldoFinal);


//EX4
let numbers = [];

for(let i = 0; i < 4; i++){
    numbers[i] = prompt('Digite um número');
}

numbers.sort((a,b) => b - a);

console.log(numbers);

//EX5
function transformaNumero() {
  let numero = prompt("Escreva um número");

  if (numero % 2 == 0){
      numero = parseInt(numero) + 1;
      console.log("O nº era par e agr é ímpar:", numero);
  }
  else{
      numero = parseInt(numero) + 1;
      console.log("O nº era ímpar e agr é par:", numero);
  }
}

transformaNumero();


//EX6
function verificaLetra() {
  let letra = prompt("Digite uma letra");
  switch(letra.toLowerCase()){
    case "a":
      console.log('É uma vogal!');
      break;
    case "e":
      console.log('É uma vogal!')
      break;
    case "i":
      console.log('É uma vogal!')
      break;
    case "o":
      console.log('É uma vogal!')
      break;
    case "u":
      console.log('É uma vogal!')
      break;
    default:
      console.log('É uma consoante!')
  }
}

verificaLetra();


//EX7
function Picole(){
  let picoles = {"Chocolate":1.50,"Morango":2.50,"Creme":2.50,"Manga":3.20,"Melancia":3.40,"Vanilla Ice":3.00,"Céu Azul":3.60,"Brownie":4.00,"Hawaiano":5.00};

  console.log("Qual sabor de picolé deseja?");
  for (let sabor in picoles) {
      console.log("- " + sabor);
  }

  let picoleEscolhido = prompt("Digite o sabor que deseja(Escreva o nome do sabor exatamente como está na tabela):");
  let precoPicole = picoles[picoleEscolhido];

  console.log("O preço do picolé de " + picoleEscolhido + " é R$" + precoPicole);
}

Picole();


//EX8
function adivinhe(){
  numero = (Math.random() * 100) + 1;
  numero = Math.floor(numero);
  let escolha = NaN;

  while (escolha !== numero){
      escolha = prompt("Que número acha que foi sorteado? Digite um número: ")

      if(escolha == numero){
          console.log("Vc acertou o número, parabens: ", numero);
          break;
      } else{
          let desistir = prompt("Vc errou o nº Deseja desistir?")

          if(desistir == "sim"){
           console.log("ok, o nº era:", numero);
           break;
          }
      }

      
  }
}

adivinhe();

//EX9
function contarVogais() {
    let palavra = prompt("Qual frase deseja saber a quantidade de vogais?");
    letras = palavra.split('');
    let numVoga = 0;

    for (i = 0; i <= palavra.length; i++) {
        if ((letras[i] == 'a') || (letras[i] == 'e') || (letras[i] == 'i') || (letras[i] == 'o') || (letras[i] == 'u') || (letras[i] == 'A') || (letras[i] == 'E') || (letras[i] == 'I') || (letras[i] == 'O') || (letras[i] == 'U')) {
            numVoga++;
        }
    }
    console.log("O número de vogais da frase é: " + numVoga);
}

contarVogais();

//EX10
let senha = prompt('Qual a senha?');

function validarSenha(senha){

    console.log(senha);

    if(!senha || senha.length < 8 || /[A-Z]/.test(senha) === false || /[a-z]/.test(senha) === false || /[0-9]/.test(senha) === false){
        alert('Por favor, A senha deve conter no mínimo 8 caracteres, com pelo menos uma letra maiúscula, uma minúscula e um número');
        return false;
    }else{
        alert("Tua senha é válida bro, essa aqui ó: " + senha);
    }
}

validarSenha(senha);

//EX11
let numero2 = prompt('Qual o número?');
let b;


function tabuada(){
    for (let i = 1; i <= 10; i++) {
        b = numero2 * i;
        console.log(numero2 + " * " + i + " = " + b);
    }
}

tabuada(b);

//EX12
const carrinho = [];

function cadastrarProduto() {
    let contador = 1;
    
    while (carrinho.length < 5) {
        const produto = {
            nome: prompt(`Digite o nome do ${contador}º produto:`),
            preco: parseFloat(prompt(`Digite o preço do ${contador}º produto:`))
        };
        
        carrinho.push(produto);
        contador++;
    }
}

function exibirCarrinho() {
    let listaProdutos = "Itens do Carrinho:\n\n";
    let total = 0;
    
    carrinho.forEach((produto, index) => {
        listaProdutos += `${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}\n`;
        total += produto.preco;
    });
    
    listaProdutos += `\nTotal a Pagar: R$ ${total.toFixed(2)}`;
    alert(listaProdutos);
}

cadastrarProduto();
exibirCarrinho();