import fetch from 'isomorphic-fetch'

export const API_KEY = '4dd7bcc45e8b4bcd8814fe2fb9f78122';
export const URL = 'https://newsapi.org/v2/';

export function fetchPopularArticles (country = 'us') {
  const encodedURI = encodeURI(`${URL}top-headlines?country=${country}&category=business&apiKey=${API_KEY}`)

  return fetch(encodedURI)
    .then((data) => data.json())
    .then((news) => news.articles)
    .catch((error) => {
      console.warn(error)
      return null
    });
}