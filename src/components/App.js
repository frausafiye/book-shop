import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {dataFetchAsync} from '../reducer/middleWare'
import {HashRouter,Route,Switch} from 'react-router-dom'
import Header from './header/Header'
import Books from './books/Books'
import SendingInfo from './SendingInfo'
import Payment from './Payment'
import CartInfo from './cart-info/CartInfo'
//icons:
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch,faHeart,faCartPlus,faShoppingCart,faEuroSign,faShippingFast,faArrowCircleRight,faBars } from '@fortawesome/free-solid-svg-icons'
library.add(fab,faSearch,faCartPlus,faHeart,faShoppingCart,faEuroSign,faShippingFast,faArrowCircleRight,faBars)

const App=()=>{
  const dispatch = useDispatch()
  
  const addInputToState=({arg:a,type:b})=>{
    if (b==="category"){
      let urlToPass=`https://www.googleapis.com/books/v1/volumes?q=subject:${a}&key=${process.env.REACT_APP_API_KEY}`
      dispatch(dataFetchAsync(urlToPass))
    }
    else{
      let urlToPass=`https://www.googleapis.com/books/v1/volumes?q=${a}}& key=${process.env.REACT_APP_API_KEY}`
      dispatch(dataFetchAsync(urlToPass))
    }
  }
   const initialCategory="horror";
   useEffect(()=>{addInputToState({arg:initialCategory,type:'category'})},[])

  return (
    <HashRouter>
        {/* <Header addInputToState={addInputToState}/> */}
        <Route render={(props)=><Header {...props} addInputToState={addInputToState}/>}></Route>
        <Switch>
            <Route exact path="/cart"><Books page="cart"/></Route>
            <Route exact path="/watch"><Books page="watch"/></Route>
            <Route exact path="/sendingInfo" component={SendingInfo}/>
            <Route exact path="/payment" component={Payment}/>
            <Route exact path="/cartInfo" component={CartInfo}/>
            <Route exact path="/"><Books page="home"/></Route>
        </Switch> 
    </HashRouter>
    )
}

export default App