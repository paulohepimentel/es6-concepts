/* 
  * Transforme os seguintes trechos de código utilizando async/await:
*/

// Exercício 1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
/*
function umPorSegundo() {
  delay().then(() => { console.log('1s');
    delay().then(() => { console.log('2s');
      delay().then(() => { console.log('3s'); });
    });
  });
}
*/
const umPorSegundo = async () => {
  for(var i=1; i<4; i++){
    await delay();
    console.log(`${i}s`);
  }
}
umPorSegundo();



// ---- Exercício 2
import axios from 'axios';
/*
function getUserFromGithub(user) {
  axios.get(`https://api.github.com/users/${user}`).then(response => {
    console.log(response.data);
  }).catch(err => {
    console.log('Usuário não existe');
  })
}
*/
async function getUserFromGithub(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    console.log(response.data);
  } catch (err) {
    console.warn('Error!');
  }
}
getUserFromGithub('paulohepimentel');
getUserFromGithub('paulohepimentelhahaha');



// ---- Exercício 3
/*
class Github {
  static getRepositories(repo) {
  axios.get(`https://api.github.com/repos/${repo}`).then(response => {
    console.log(response.data);
  }).catch(err => {
    console.log('Repositório não existe');
  })}
}
*/
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (err) {
      console.warn('Error!');
    }
  }
};
Github.getRepositories('paulohepimentel/paulohepimentel');
Github.getRepositories('paulohepimentel/avengers');



// ---- Exercício 4
/*
const getUser = username => {
  axios.get(`https://api.github.com/users/${username}`).then(response => {
    console.log(response.data);
  }).catch(err => {
    console.log('Usuário não existe');
  });
}
*/
const getUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    console.log(response.data);
  } catch (err) {
    console.warn('Error!');
  }
}
getUser('paulohepimentel');