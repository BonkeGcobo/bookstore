import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
  // Additional Reducers will be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
