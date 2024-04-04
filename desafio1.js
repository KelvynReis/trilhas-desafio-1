// Desafio trilhas

// Os desafios estão divididos em 11 exercícios, cada um com uma função específica.


// 1.
function calcularMedia() {

    const nota1 = 8;
    const nota2 = 9;
    const nota3 = 7;
    // Cálculo da média
    const media = (nota1 + nota2 + nota3) / 3;
    console.log(`A média das notas é: ${media}`);
}

calcularMedia();

// 2.
function encontrarMenorEMaiorNumeros() {
    const numeros = [15, 8, 90, 75, 102, 6, 2];
    const menorNumero = Math.min(...numeros);
    const maiorNumero = Math.max(...numeros);
    console.log(`O menor número é: ${menorNumero}`);
    console.log(`O maior número é: ${maiorNumero}`);
}
encontrarMenorEMaiorNumeros();

// 3.
function ordenarFrascos() {
    const frascos = [12, 5, 23, 17, 8, 14, 3, 19];
    frascos.sort((a, b) => a - b);
    console.log(`A ordem dos frascos é: ${frascos}`);
}

ordenarFrascos();

// 4.
function identificarNumerosPrimos() {
    const numeros = [23, 16, 11, 8, 19, 14, 5, 21];
    const numerosPrimos = [];

    for (let i = 0; i < numeros.length; i++) {
        let isPrimo = true;

        if (numeros[i] === 1) {
            isPrimo = false;
        } else {
            for (let j = 2; j < numeros[i]; j++) {
                if (numeros[i] % j === 0) {
                    isPrimo = false;
                    break;
                }
            }
        }

        if (isPrimo) {
            numerosPrimos.push(numeros[i]);
        }
    }

    console.log(`Os números primos são: ${numerosPrimos}`);
}

identificarNumerosPrimos();

// 5.
function contarPalavras() {
    const frase = "What is Lorem Ipsum?";
    const palavras = frase.split(" ");
    const numeroPalavras = palavras.length;
    console.log(`O número de palavras na frase é: ${numeroPalavras}`);
}
contarPalavras();

// 6.
function calcularFatorial() {
    const numero = 12
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
}

calcularFatorial();

// 7.
function calcularTotalCompra() {
    const precoItem1 = 2.50;
    const precoItem2 = 3.75;
    const precoItem3 = 1.99;
    const totalCompra = precoItem1 + precoItem2 + precoItem3;
    console.log(`O valor total da compra é: R$ ${totalCompra.toFixed(2)}`);
}
calcularTotalCompra();

// 8.
function calcularMulta() {
    const diasAtraso = 7;
    const valorMultaPorDia = 0.50;
    const totalMulta = diasAtraso * valorMultaPorDia;
    console.log(`O valor da multa a ser pago é: R$ ${totalMulta.toFixed(2)}`);
}
calcularMulta();

// 9.
function calcularPontosDeVidaRestantes() {
    const pontosDeVidaInicial = 100;
    const danoPorAtaque = 20;
    const numeroDeAtaques = 3;
    const pontosDeVidaRestantes = pontosDeVidaInicial - (danoPorAtaque * numeroDeAtaques);
    console.log(`Após ${numeroDeAtaques} ataques, restarão ${pontosDeVidaRestantes} pontos de vida.`);
}
calcularPontosDeVidaRestantes();

// 10.
function contarLetrasMaiusculas() {
    const frase = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === frase[i].toUpperCase() && frase[i] !== " ") {
            contador++;
        }
    }
    console.log(`O número de letras maiúsculas na frase é: ${contador}`);
}
contarLetrasMaiusculas();

// 11.
function calcularIdade() {
  const dataNascimento = "2000-07-20";

  const dataAtual = new Date();
  const dataNascimentoObj = new Date(dataNascimento);

  const diferencaMilisegundos = dataAtual.getTime() - dataNascimentoObj.getTime();

  const anos = Math.floor(diferencaMilisegundos / (1000 * 60 * 60 * 24 * 365));
  return console.log(`Idade: ${anos} anos`); 
}

calcularIdade();

