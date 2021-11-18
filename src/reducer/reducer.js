const initialState = {
  books: [],
  cart: [],
  favorites: [],
  total: 0,
  alert: false,
  articles: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchBooks": {
      return { ...state, books: [...action.payload] };
    }
    case "addFavorites": {
      if (state.favorites.includes(action.payload)) {
        return state;
      }
      return { ...state, favorites: [...state.favorites, action.payload] };
    }
    case "addCart": {
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
      };
    }
    case "removeFromCart": {
      let otherCartItems = state.cart.filter((book) => book !== action.payload);
      return {
        ...state,
        cart: otherCartItems,
        total: (state.total -= action.payload.price * action.payload.quantity),
      };
    }
    case "removeFromFavorites": {
      let otherFavoritesItems = state.favorites.filter(
        (book) => book !== action.payload
      );
      return { ...state, favorites: otherFavoritesItems };
    }
    case "changeAmount": {
      let copyState = { ...state };
      let bookObj = copyState.cart.find(
        (item) => item.id === action.payload.book.id
      );
      bookObj.quantity = parseInt(action.payload.newAmount);
      let index = copyState.cart.indexOf(bookObj);
      copyState.cart.splice(index, 1, bookObj);
      return copyState;
    }
    case "setAlert": {
      return { ...state, alert: action.payload.alert };
    }
    case "setTotal": {
      return { ...state, total: action.payload };
    }
    case "setArticles": {
      return { ...state, articles: action.payload };
    }
    default:
      return state;
  }
};
export default reducer;
