/*
QUESTÃO 01:
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

 */

function sequenciaFibonacci(num) {
  if (num < 0) return false;
  let a = 0, b = 1;

  if (num === a || num === b) {
    return console.log(`O número ${num} pertence à sequência de Fibonacci.`);
  }

  let prox = a + b;
  while (prox <= num) {
    if (prox === num) {
      return console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    }
    a = b;
    b = prox;
    prox = a + b;
  }

  return console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
}

const numero = 293;
sequenciaFibonacci(numero);

/*
QUESTÃO 2:
Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
*/


function verificaString(string) {
  const regex = /[AÀÁÂÃÄaàáâãä]/g;

  const correspondencias = string.match(regex);

  if(correspondencias) {
    console.log(`A string contém a letra A, e ela ocorre ${correspondencias.length} vezes`);
  } else {
    return console.log(`A string NÃO contém a letra A`);
  }
}

const str = "Às vezes as coisas não funcionam da forma que você quer";
verificaString(str);

/*
QUESTÃO 3: 
Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?

R. O laço for realiza uma soma com incremento de 1 em 1, onde o valor inicial é 2 e o final é 12. Portanto, a resposta é 78.
*/


/*
QUESTÃO 4:
Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, ___                      R. 9 - Sequência dos números ímpares
b) 2, 4, 8, 16, 32, 64, ____            R. 128 - Cada elemento é o dobro do anterior
c) 0, 1, 4, 9, 16, 25, 36, ____         R. 49 - Sequência do quadrado dos números inteiros
d) 4, 16, 36, 64, ____                  R. 100 - Sequência do quadrado dos números pares
e) 1, 1, 2, 3, 5, 8, ____               R. 13 - Sequência de Fibonacci (O número é a soma dos dois números anteriores da sequência)
f) 2,10, 12, 16, 17, 18, 19, ____       R. 200 - Sequência dos números que começam com a letra D
*/

/*
QUESTÃO 5:
Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

R. - Eu ligo o primeiro interruptor por um tempo razoável a ponto ser o suficiente para seu vidro ficar quente. A seguir, desligo o primeiro interruptor e ligo o segundo. A entrar no primeiro quarto, têm-se 3 possibilidades.
1) A lâmpada está ligada, portanto a luz do primeiro quarto se refere ao segundo interruptor.
2) A lâmpada está desligada, porém com seu vidro quente, portanto, a luz do primeiro quarto se refere ao primeiro interruptor.
3) A lâmpada está desligada e fria, portanto a luz do primeiro quarto se refere a terceiro interruptor. 

A partir disso, restam dois interruptores e 2 lâmpadas. Basta voltar a sala dos interruptores, deixar um dos interruptores, cuja a lâmpada eu não sei a qual quarto pertence, ligado e o outro desligado. Ao prosseguir ao segundo quarto, se a luz estiver ligada, sua lâmpada se refere ao interruptor que deixei previamente ligado e a lâmpada do terceiro quarto se refere ao interruptor que ficou desligado. Caso contrário, se a luz estiver desligada, a lâmpada do segundo quarto se refere ao interruptor que deixei desligado e a lâmpada do terceiro quarto se refere ao interruptor que deixei ligado.
*/