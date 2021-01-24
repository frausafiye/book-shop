import React from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/reducer'

 const persistedState = localStorage.getItem('reduxState-shopping-app') 
                      ? JSON.parse(localStorage.getItem('reduxState-shopping-app'))
                      : {books:[],cart:[],favorites:[],totalCartPrice:0}

 const myStore=createStore(reducer,persistedState,applyMiddleware(thunk))
  myStore.subscribe(()=>{
    localStorage.setItem('reduxState-shopping-app', JSON.stringify(myStore.getState()))
   })

export default function Container(props) {

  return (
    <Provider store={myStore}>
      {props.children}
    </Provider>
  )
}
