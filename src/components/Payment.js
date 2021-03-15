import React,{useState} from 'react'
import PaymentSteps from './payment-steps/PaymentSteps'
import PPB from "./PPB"

export default function Payment(props) {
  const [showPaypal,setShowPaypal]=useState(true)
  return (
    <div>
      <PaymentSteps active='second'/>
      <div style={{width:"100%",textAlign:"center"}}>
      {showPaypal && <PPB total={props.location.query}/>}
      </div>
    </div>
);
}
