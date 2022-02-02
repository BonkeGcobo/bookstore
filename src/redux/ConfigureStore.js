import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
  // Additional Reducers will be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
