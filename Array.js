const alunos = ["Ana", "Bernardo", "Caio", "Douglas", "Estela"]; 

// Para adicionar algum item dentro de uma array, usa-se NomeArray.push(elemento) < aqui, os elementos sempre serão 
// adicionados nos últimos índices, depois de todos os elementos existentes:

alunos.push("Fernanda");

console.log(alunos); // Fernanda foi adicionado como elemento no índice 5

// Para deletar itens do array, usa-se o comando NomeArray.pop()
// Assim como o push, o pop vai deletar o último elemento do array:

alunos.pop();

console.log(alunos)

// Para dividir um array, usa-se o comando NomeArray.slice(parâmetro01, parâmetro02), 
// sendo: parâmetro01(em que índice começar) e parâmetro02(qual índice terminar)
// É necessário a criação de uma nova variável para atribuir os elementos da divisão, já que o slice mantem a array original intacta.:

let lista01 = alunos.slice(0, alunos.length/2);

console.log(alunos)
console.log(lista01); // ['Ana', 'Bernardo'], como o número de elementos total é ímpar, o JS arredonda para baixo.

// Para alterar elementos de um array, usa-se o comando NomeArray.splice(parâmetro01, parâmetro02, parâmetro03),
// sendo: parâmetro01(índice para começar), parâmetro02(quantidade de elementos para retirar) e parâmetro03(itens a serem adicionados):

alunos.splice(2, 1, "Camila", "Jorge");
//            retira 1 elemento a partir do índice 2 (retira Caio)
//            para adicionar mais de um elemento, basta adicionar um novo parâmetro

console.log(alunos);

// Para concatenar arrays, usa-se o comando NomeArray.concat(Array02). Para isso, usa-se uma nova const para receber:

let alunos02 = ["Lucas", "Guilherme"];

let listaAlunos = alunos.concat(alunos02);

console.log(listaAlunos);

// Lista com duas dimensões: é possível utilizar arrays com duas dimensões para criar listas mais complexas e com valores associados
// Por exemplo, para associas alunos e suas notas:

// ['Ana', 'Bernardo', 'Camila', 'Jorge', 'Douglas', 'Estela', 'Lucas', 'Guilherme']
const medias = [10, 8, 7.5, 6, 9, 6.5, 8.5, 9];

let listaGeral = [listaAlunos, medias]

console.log(`${listaGeral[0][4]}, sua média geral é ${listaGeral[1][4]}`)
//                       acessa o item 0 do array listaGeral, e o item 4 do item listaAlunos

// Procurando na lista:

// let const listaAlunos = ['Ana', 'Bernardo', 'Camila', 'Jorge', 'Douglas', 'Estela', 'Lucas', 'Guilherme']
// let const medias = [10, 8, 7.5, 6, 9, 6.5, 8.5, 9]
// let listaGeral = [listaAlunos, medias]

const exibeNomeNota = (nomeDoAluno) => {
  if (listaGeral[0].includes(nomeDoAluno)) {
    // se o item 0 da listaGeral (nomes dos alunos) insluir o nome executado, então:
    indice = listaGeral[0].indexOf(nomeDoAluno)
    // a variável índice vai receber o valor do índice em que o nome está no array
    return listaGeral[0][indice] + ", sua média é " + listaGeral[1][indice] 
    // com o índice recebido, basta procurar no array das medias (item 1 da listaGeral) a média associada ao aluno
    } else {
      return "Aluno não está cadastrado."
    }
  }

console.log(exibeNomeNota("Ana")) // Ana, sua média é 10

// o método forEach executa uma determinada ação para cada índice de uma array, por exemplo:
// para gerar a média geral da sala:

let somaDasNotas = 0;

medias.forEach(nota => {
//             "nota" é apenas um nome dado para cada elemento no array                    
  somaDasNotas += nota
//             a operação "+=" simplifica a notação já que adiciona o valor de cada nota na variável  
})

console.log(somaDasNotas)

// Método .map(): é uma função callback. A intenção do .map() é realizar determinada ação em todos os elementos do array.
// Por exemplo: para adicionar um ponto em cada nota de um array:

const notasSala1 = [10,8,9,8,6];

const notasAtualizadas = notasSala1.map( nota => nota == 10 ? nota : ++nota);
//                                      utilizada uma função ternária, com três operadores:
//                                      a "?" quer dizer "é verdadeiro" e ":" quer dizer "se não"

console.log(notasAtualizadas);

// Para filtrar elementos, usa-se o método .filter. O método envia a informação pedida na função para uma nova constante.

const nomes01 = ["Ana", "Marcos", "Maria", "Mauro"]
const notas01 = [7, 4.5, 8, 7.5]

const reprovados = nomes01.filter((aluno, indice) => notas01 [indice] < 5)
//                             o primeiro parâmetro diz respeito ao valor do item e o segundo parâmetro diz respeito ao indice do item

console.log(`Lista de reprovados: ${reprovados}`)

// Para reduzir (somar) todos os itens de um array, usa-se o método .reduce(). 
// Precisa ser direcionado para outra constante, já que não altera o array original

const salaJava = [10,5,7.5,8]

function mediaDaSala (notaDaSala) {
  const somaDasNotas = salaJava.reduce((acum, atual) => atual + acum, 0)
  return somaDasNotas/salaJava.length  
} 

console.log(mediaDaSala(salaJava));







