import { getCurrentDate, getWeekAgoDate } from "./constants";
import { baseUrl } from "./auth";

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

console.log(import.meta.env.VITE_NEWS_API_KEY);

export const getArticle = (query) => {
  return fetch(
    `${baseUrl}?q=${query}&from=${getCurrentDate()}&to=${getWeekAgoDate()}&apiKey=${apiKey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const saveArticle = (article) => {
  console.log(article);
  return new Promise((resolve, reject) => {
    resolve(article);
  });
};

export const deleteArticle = (article) => {
  console.log(article);
  return new Promise((resolve, reject) => {
    resolve(article);
  });
};

export const getResults = () => {
  return fetch().then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};
