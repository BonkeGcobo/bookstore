import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_API = 'bookStore/books/FETCH_API';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const authID = 'Vhj3H23NumCJKKYKw9dH/books/';
// Setting intialState
const initialState = [];

// Export your action creators which returns actions
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBooks = (payload) => ({
  type: FETCH_API,
  payload,
});

export const fetchBooksApi = () => async (dispatch) => {
  const books = await axios.get(baseUrl + authID);
  const mapBooks = Object.entries(books.data).map(([id, book]) => {
    const { category, title } = book[0];
    return { id, category, title };
  });
  dispatch(fetchBooks(mapBooks));
};

export const removeBookFromApi = (id) => async (dispatch) => {
  await axios.delete(`${baseUrl + authID}${id}`);
  dispatch(removeBook(id));
};

// Write the reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    case FETCH_API:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
