import React,{useEffect,useState} from 'react'
import PaymentSteps from '../payment-steps/PaymentSteps'
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom"
import "./cart-info.css"

export default function CartInfo() {
  let cartItems=useSelector(state => state.cart)
  const [total,setTotal]=useState(0);
  const [articles,setArticles]=useState(0)

  useEffect(() => {
    let totalOfCart=cartItems.reduce((acc,item)=>{
      return acc=acc+((item.price)*(item.quantity))
    },0)
    setTotal(totalOfCart)
    let totalArticles=cartItems.reduce((acc,item)=>{    
      return acc=acc+parseInt(item.quantity)
    },0)
    setArticles(totalArticles)
  }, [cartItems])

  return (
    <div>
      <PaymentSteps active='first'/>
      <div className="amount-box">
        <p>Amount of Artikel: {articles}</p>
        <p>Total Price:{total}€</p>
      </div>
      <div className="checkout-box">
      <Link to='/payment'><button className='btn'>Checkout</button></Link>
      </div>
    </div>
  )
}
