/* 
  1.1: Agora em seu arquivo principal import apenas a classe Usuario renomeando-a 
  para ClasseUsuario e chame a função info();

  1.2: Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;

  1.3: Em seu arquivo principal importe tanto a classe quanto a variável idade e
  renomeie a variável idade para IdadeUsuario.
*/
import userClass, {age as userAge} from './functions';
userClass.info();
console.log(userAge);
