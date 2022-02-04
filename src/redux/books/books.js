import Axios from 'axios';

// Defint the action types
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_API = 'bookStore/books/FETCH_API';

// Setting intialState
const initialState = [];
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Vhj3H23NumCJKKYKw9dH';

// Export your action creators which returns actions
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchApi = (payload) => ({
  type: FETCH_API,
  payload,
});

export const fetchBookApi = () => async (dispatch) => {
  const books = await Axios.get(baseUrl);
  const sortedBooks = Object.entries(books.data).map(([id, book]) => {
    const { title, category } = book[0];
    return { id, title, category };
  });
  dispatch(fetchApi(sortedBooks));
};

export const addBookToApi = (payload) => async (dispatch) => {
  const { id, title, category } = payload;
  const newBook = {
    item_id: id,
    title,
    category,
  };
  await Axios.post(baseUrl, newBook);
  dispatch(addBook(payload));
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
