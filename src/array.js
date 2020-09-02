/* 
  * 2º exercício: Conceitos de manipulação de Array (map, reduce, filter e find)
*/

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

/*
  Exercicio 2.1 -> Utilizando o MAP: Crie uma variável que contenha todas idades
  dos usuários
*/
const idades = usuarios.map(usr => usr.idade);
console.log(idades);

/*
  Exercicio 2.2 -> Utilizando o FILTER: Crie uma variáveis que tenha apenas os 
  usuários que trabalham na Rocketseat e com mais de 18 anos
*/
const rocket18 = usuarios.filter(usr => (usr.idade > 18 && usr.empresa === 'Rocketseat'));
console.log(rocket18);

/*
  Exercicio 2.3 -> Utilizando o FIND: Crie uma variável que procura por um usuário
  que trabalhe na empresa Google
*/
const googler = usuarios.filter(usr => usr.empresa === 'Google');
console.log(googler);

/*
  Exercicio 2.4 -> Unindo operações: Multiplique a idade de todos usuários por dois
  e depois realize um filtro nos usuários que possuem no máximo 50 anos
*/
const maximo50 = usuarios
  .map(usr => ({ ...usr, idade:(usr.idade * 2) }))
  .filter(usr => usr.idade <= 50)
console.log(maximo50);