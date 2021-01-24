import React, {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import PaymentSteps from '../payment-steps/PaymentSteps'
import "./books.css"
  
const Books = (props) => {

  const books = useSelector(state => state.books)
  let favoriteItems=useSelector(state => state.favorites)
  let cartItems=useSelector(state => state.cart)

  const dispatch=useDispatch()

  const [alert,setAlert]=useState(false);

  const changeNumberFunc=(bookObj,e)=>{
    dispatch({type:'changeAmount',payload:{book:bookObj,newAmount:e.target.value}})
  }

  const toAddFavorites=(bookObj,e)=>{
      e.target.disabled=true;
      dispatch({type:'addFavorites',payload:bookObj})
  }
  const addToCart=(bookObj)=>{
    if(cartItems.includes(bookObj)){
        setAlert(true);
        setTimeout(()=>{setAlert(false)},2000)}
      else{
        dispatch({type:'addCart',payload:bookObj})
      }
  }

    let booksToExecute = props.page === 'home' ? books 
                        :props.page === 'watch'? favoriteItems
                        :props.page === 'cart' ? cartItems
                        :null
    return (<div>
              {props.page==="cart" &&
              <PaymentSteps/>
                }
              <section className = "section books" >
                <div className = "section-center books" > 
                {alert&& 
                <div className="warning-box">
                    <p
                    >You've added this book to your cart already. If you want to add it again, please go to your cart.
                    </p>
                </div> }
                {booksToExecute && booksToExecute.map((bookObj,i) => 
                
                  <div key={i} className = {alert? "book changedColor":"book"} >
                    <h3> {i + 1} </h3> 
                    <img 
                      src = {bookObj.volumeInfo.imageLinks ? bookObj.volumeInfo.imageLinks.smallThumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"}
                      alt = "book"
                      className = "book-img"/>
                    <div className = "book-info" >
                      <h4> {bookObj.volumeInfo.title} </h4> 
                      <p> {bookObj.volumeInfo.authors} </p> 
                      <p> Related Categories: {bookObj.volumeInfo.categories} </p> 
                      <p> Price:{bookObj.price}€ </p> 
                      <a href={bookObj.volumeInfo.infoLink} className='btn more'>More</a>
                    </div > 
                    <div >
                    {props.page==="home" && 
                    <>
                      <button 
                        className = "btn book-btn" 
                        onClick = {() => addToCart(bookObj)}
                        > Add to cart 
                      </button> 
                      < button 
                        className = "btn book-btn" 
                        onClick = {(e) => toAddFavorites(bookObj,e)} 
                        > Add to favorites 
                      </button></>  }
                    {props.page==="cart" && 
                      <><div>
                          <button 
                        className = "btn book-btn" 
                        onClick = {() =>  dispatch({type:'removeFromCart',payload:bookObj})}
                        > Remove from cart 
                          </button> 
                          < button 
                        className = "btn book-btn" 
                        onClick = {(e) => toAddFavorites(bookObj,e)} 
                        > Add to favorites 
                          </button>
                          </div>
                          <input type="number" name="number" min="0" value={bookObj.quantity} onChange={(e)=>changeNumberFunc(bookObj,e)} />
                        </>  }
                    {props.page==="watch" && 
                      <><button 
                        className = "btn book-btn" 
                        onClick = {() => addToCart(bookObj)}> Add to cart 
                      </button> 
                      < button 
                        className = "btn book-btn" 
                        onClick = {() => dispatch({type:'removeFromFavorites',payload:bookObj})} 
                        > Remove from favorites
                      </button></>  }
                  </div > 
                  </div>)}
            </div> 
            </section >
            </div>
            )
}
export default Books