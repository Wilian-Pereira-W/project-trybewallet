// Coloque aqui suas actions
import { getCurrencyQuotes } from '../services/requestApi';

export const LOG_PAGE = 'LOG_PAGE';

export const logPage = (payload) => ({
  type: LOG_PAGE,
  payload,
});

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const requestSuccess = (payload) => ({ type: REQUEST_SUCCESS, payload });

export const requestError = (error) => ({ type: REQUEST_ERROR, payload: error });

export const fetchApi = () => (dispatch) => getCurrencyQuotes()
  .then(
    (response) => dispatch(requestSuccess(response)),
    () => dispatch(requestError()),
  );
