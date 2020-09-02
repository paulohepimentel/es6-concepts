/* 
  * 3º exercício: Converta as funções em Arrow Functions
*/

/* Exercicio 3.1 */
const arr = [1, 2, 3, 4, 5];
//// Original
arr.map(function(item) {
  return item + 10;
});
// Arrow
arr.map(item => item + 10);


/* Exercicio 3.2 */
const usuario = { nome: 'Diego', idade: 23 };
//// Original
function mostraIdade(usuario) {
  return usuario.idade;
}
// Arrow
const mostraIdade = (usuario) => usuario.idade;
mostraIdade(usuario);


/* Exercicio 3.3 */
const nome = "Diego";
const idade = 23;
//// Original
function mostraUsuario(nome = 'Diego', idade = 18) {
  return { nome, idade };
}
// Arrow
const mostraUsuario = (nome='Diego', idade=18) => ({
  nome, 
  idade
});
mostraUsuario(nome, idade);
mostraUsuario(nome);


/* Exercicio 3.4 */
//// Original
const promise = function() {
  return new Promise(function(resolve, reject) {
    return resolve();
  })
}
// Arrow
const promise = () => (new Promise = (resolve, reject) => resolve());