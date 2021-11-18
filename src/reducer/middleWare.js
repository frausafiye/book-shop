const dataFetch = (data) => {
  return { type: "fetchBooks", payload: data };
};
export const dataFetchAsync = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        //create a not found page if there is no matching book!
        let booksArray = result.items.map((item) => {
          return {
            ...item,
            price: Math.floor(Math.random() * 20 + 1),
            quantity: 1,
          };
        });
        dispatch(dataFetch(booksArray));
      });
  };
};
