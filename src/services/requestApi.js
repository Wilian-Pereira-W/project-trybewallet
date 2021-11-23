const API_CURRENCY_QUOTES = 'https://economia.awesomeapi.com.br/json/all';

export const getCurrencyQuotes = () => (
  fetch(API_CURRENCY_QUOTES)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getCurrencyQuotes;
