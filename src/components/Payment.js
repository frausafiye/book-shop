import React from 'react'
import PaymentSteps from './payment-steps/PaymentSteps'
import {Link} from "react-router-dom"

export default function Payment() {
  return (
    <div>
     <PaymentSteps active='second'/>
     <div style={{margin:'20px 10px',position:'absolute',right:'10px'}}>
     <Link to='/sendingInfo'><button className='btn'>Check your order</button></Link>
    </div>
    </div>
  )
}
