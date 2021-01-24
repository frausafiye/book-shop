
const initialBooks={books:[],cart:[],favorites:[],totalCartPrice:0}

const reducer=(state=initialBooks,action)=>{
  switch(action.type){
    case 'fetchBooks':{
      return {...state,books:[...action.payload]}
    }
    case 'addFavorites':{
      if(state.favorites.includes(action.payload)){
        return state
      }
      return{...state,favorites:[...state.favorites,action.payload]}
    }
    case 'addCart':{
      return {...state,cart:[...state.cart,action.payload],totalCartPrice:state.totalCartPrice+action.payload.price} 
      }
    case 'removeFromCart':{
      
      let otherCartItems=state.cart.filter(book=>book!==action.payload)
      return {...state,cart:otherCartItems,totalCartPrice:state.totalCartPrice-=action.payload.price*action.payload.quantity}
    }
    case 'removeFromFavorites':{
      let otherFavoritesItems=state.favorites.filter(book=>book!==action.payload)
      return {...state,favorites:otherFavoritesItems}
    }
    case 'changeAmount':{
      let copyState={...state};
      let bookInBooks=copyState.cart.find(item=>{
      return item.id===action.payload.book.id})
      let index=copyState.books.indexOf(bookInBooks);
      bookInBooks.quantity=parseInt(action.payload.newAmount);
      copyState.books.splice(index,1,bookInBooks)
      console.log(copyState);
      return {...copyState}}
    default: 
      return state
  }
}
export default reducer;