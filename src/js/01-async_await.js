import axios from 'axios';

import '../css/pocemon.css';

const url = 'https://jsonplaceholder.typicode.com/todos';

// function foo() {}
// console.log(foo()); //undefined

// async function foo1() {}
// console.log(foo1()); //Promise {<fulfilled>: undefined}

// async function foo2() {
//   return 'lalala';
// }
// console.log(foo2()); // Promise {<fulfilled>: 'lalala'}

// foo2()
//   .then(data => console.log('data:', data)) //data: lalala
//   .catch(error => log('error:', error));

console.log('***********************');

// async function foo3() {
//   const response = axios(url);

//   console.log('response:', response); //Promise {<pending>}
// }

// foo3();
// console.log('foo3():', foo3()); //Promise {<fulfilled>: undefined}

// async function foo4() {
//   try {
//     const response = await axios(url);

//     console.log('response:', response);
//     //{data: Array(200), status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}
//   } catch (erorr) {
//     console.log(erorr.message);
//   }
// }

// foo4();
// console.log('foo4():', foo4()); //Promise {<pending>}

// console.log('***********************');

// async function foo5() {
//   const response = await axios(url);

//   return response.data;
// }

// console.log('foo5():', foo5()); //Promise {<fulfilled>: undefined}
// foo5()
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// console.log('***********************');

// async function foo() {
//   const response = await axios(url);
//   return response.data;
// }

// async function result() {
//   try {
//     const data = await foo();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// result();

console.log('***********************');

// // const url = 'https://jsonplaceholder.typicode.com/todos';

// async function getTodos() {
//   const todo1 = await axios(`${url}/1`);
//   const todo2 = await axios(`${url}/2`);
//   const todo3 = await axios(`${url}/3`);

//   return [todo1.data, todo2.data, todo3.data];
// }

// getTodos()
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// async function getTodos1() {
//   const todosArr = [1, 2, 3];

//   const todosRes = todosArr.map(async num => {
//     const response = await axios(`${url}/${num}`);
//     return response.data;
//   });

//   const res = await Promise.all(todosRes);
//   // console.log(res);
//   return res;
// }

// getTodos1()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//***************************** */
// console.log('***********************');

// async function getTodos() {
//   const todosArr = [1, 2, 3];

//   try {
//     const todosRes = todosArr.map(async num => {
//       const response = await axios(`${url}/${num}`);
//       return response.data;
//     });

//     const res = await Promise.all(todosRes);
//     console.log(res);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getTodos();

//***************************** */
console.log('***********************');

/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 *
 */

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

const form = document.querySelector('.search-form');
const container = document.querySelector('.card-container');

form.addEventListener('submit', onSearch);

async function fetchPokemon(pokemonName) {
  const result = await axios(`${BASE_URL}${pokemonName}`);
  return result.data;
}

async function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.query.value.trim();
  try {
    const data = await fetchPokemon(searchQuery);
    console.log(data);

    container.innerHTML = renderPokemonCard(data);
  } catch (error) {
    alert(error.message);
  }
}

function renderPokemonCard({
  name,
  weight,
  height,
  abilities,
  sprites: { front_default },
}) {
  const abilitiesList = abilities
    .map(
      ({ ability }) => `
        <li class="list-group-item">${ability.name}</li>
    `
    )
    .join('');

  return `
        <div class="card">
            <div class="card-img-top">
                <img src="${front_default}" alt="${name}"/>
            </div>
            <div class="card-body">
                <h2 class="card-title">Ім'я: ${name}</h2>
                <p class="card-text">Вага: ${weight}</p>
                <p class="card-text">Зріст: ${height}</p>

                <p class="card-text">
                    <h4>Вміння: </h4>
                    <ul>    
                        ${abilitiesList}
                    </ul>
                </p>
            </div>
        </div>
    `;
}
