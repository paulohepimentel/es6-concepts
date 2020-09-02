/* 
  * 4º exercício: Desestruturação
*/

/* Exercicio 4.1: Desestruturação simples
  A partir do seguinte objeto, utilize a desestruturação para transformar as 
  propriedades nome, cidade e estado em variáveis.
*/
const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};

const { nome } = empresa;
const { endereco: { cidade, estado } } = empresa;

/* Teste */
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC


/* Exercício 4.2: Desestruturação em parâmetros
  Na seguinte função utilize a desestruturação nos parâmetros da função para 
  buscar o nome e idade do usuário separadamente e a função poder retornar
*/
function mostraInfo({nome, idade} = usuario) {
  return `${nome} tem ${idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 });