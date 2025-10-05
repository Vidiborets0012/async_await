//Синтаксис async/await

//Асинхронні функції

/*
async function fetchData() {
	// ...
}

const fetchData = async function() {
	// ...
}

const fetchData = async () => {
	// ...
}

const user = {
  async getUsername() {
    // ...
  },
};

class User {
  async getUsername() {
    // ...
  }
}

*/

// const foo = async () => {
//   return 5;
// };

// foo().then(value => {
//   console.log(value); // 5
// });
// console.log(foo()); //Promise {<fulfilled>: 5}

// const foo1 = async () => {
//   // Не вказуємо значення для повернення
// };

// foo1().then(value => {
//   console.log(value); // undefined
// });
// console.log(foo1()); //Promise {<fulfilled>: undefined}

console.log('**********************');

//Оператор await

const foo = async () => {
  console.log('Before await');

  const promiseValue = await new Promise(resolve => {
    setTimeout(() => resolve(5), 2000);
  });

  console.log('After await', promiseValue);
};

foo(); // через 2 секунди виведеться в консоль  "After await" 5
console.log(foo());

console.log('**********************');

//Використання async/await при роботі з HTTP-запитами

import axios from 'axios';

const fetchUsers = () => {
  axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
    console.log(response.data);
  });
};

fetchUsers();
//*****************************

const fetchUsers1 = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  console.log(response.data);
  return response.data;
};

// fetchUsers1();
// console.log(fetchUsers1()); //Promise {<pending>}

fetchUsers1().then(users => console.log(users));

console.log('**********************');
//Конструкція try…catch

/*
try {
  // Код, у якому можуть виникнути помилки
} catch (error) {
  // Код для обробки помилок, що виникли у блоці try
}
*/

console.log('Before try...catch');

try {
  const result = 10 / 0;
  console.log(result); // Цей рядок не виконається через помилку
} catch (error) {
  // Обробимо помилку
  console.error(error.message);
}

console.log('After try...catch');

console.log('**********************');
//Обробка помилок
//1. Обробка помилок у самій функції (try...catch)

const fetchUsers3 = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    console.log(response.data);
  } catch (error) {
    console.log('Помилка при отриманні користувачів:', error);
  }
};

fetchUsers3();

//*************************************

// 2. Обробка помилок у .catch() зовні

const fetchUsers4 = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
};

fetchUsers4()
  .then(users => console.log(users))
  .catch(error => console.log('Помилка:', error));

//*************************************
// 3. Обробка помилок в іншій асинхронній функції (try...catch)

const fetchUsers5 = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
};

const doStuff = async () => {
  try {
    const users = await fetchUsers5();
    console.log(users);
  } catch (error) {
    console.log('Помилка в doStuff:', error);
  }
};

doStuff();
console.log(doStuff()); //Promise {<pending>}
