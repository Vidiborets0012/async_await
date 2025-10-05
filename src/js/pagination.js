//Пагінація
import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
//Колекції та групи

// const fetchPosts = async () => {
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/posts'
//   );
//   console.log('Posts: ', response.data);
// };

// fetchPosts();

// const fetchPosts1 = async () => {
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/posts?_limit=5'
//   );
//   console.log('Posts: ', response.data);
// };

// fetchPosts1();

/***************************** */
console.log('************************');
/*
const fetchPostsBtn = document.querySelector('.btn');
const postList = document.querySelector('.posts');

fetchPostsBtn.addEventListener('click', async () => {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts() {
  // Change the number of items in the group here
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  return response.data;
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p>${body}</p>
        </li>`;
    })
    .join('');
  postList.innerHTML = markup;
}
*/

/***************************** */
console.log('************************');
//Номер групи елементів

// const fetchPosts = async () => {
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/posts?_limit=5&_page=3'
//   );
//   console.log('Posts: ', response.data);
// };
/*
const fetchPostsBtn = document.querySelector('.btn');
const postList = document.querySelector('.posts');

fetchPostsBtn.addEventListener('click', async () => {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts() {
  const params = new URLSearchParams({
    _limit: 5,
    // Change the group number here
    _page: 3,
  });

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  );
  return response.data;
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join('');
  postList.innerHTML = markup;
}
*/

/***************************** */
console.log('************************');
//Прийом «Завантажити ще»

/*
const fetchPostsBtn = document.querySelector('.btn');
const postList = document.querySelector('.posts');

// Controls the group number
let page = 1;
// Controls the number of items in the group
let perPage = 10;

fetchPostsBtn.addEventListener('click', async () => {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
    // Increase the group number
    page += 1;

    // Replace button text after first request
    if (page > 1) {
      fetchPostsBtn.textContent = 'Fetch more posts';
    }
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts() {
  const params = new URLSearchParams({
    _limit: perPage,
    _page: page,
  });

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  );
  return response.data;
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join('');
  postList.insertAdjacentHTML('beforeend', markup);
}
*/

/***************************** */
console.log('************************');
//Перевірка кінця колекції

const fetchPostsBtn = document.querySelector('.btn');
const postList = document.querySelector('.posts');

// Controls the group number
let page = 1;
// Controls the number of items in the group
let limit = 40;
// In our case total number of pages is calculated on frontend
const totalPages = Math.ceil(100 / limit);

fetchPostsBtn.addEventListener('click', async () => {
  // Check the end of the collection to display an alert
  if (page > totalPages) {
    return iziToast.error({
      position: 'topRight',
      message: "We're sorry, there are no more posts to load",
    });
  }

  try {
    const posts = await fetchPosts();
    renderPosts(posts);
    // Increase the group number
    page += 1;

    // Replace button text after first request
    if (page > 1) {
      fetchPostsBtn.textContent = 'Fetch more posts';
    }
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts() {
  const params = new URLSearchParams({
    _limit: limit,
    _page: page,
  });

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  );
  return response.data;
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join('');
  postList.insertAdjacentHTML('beforeend', markup);
}
