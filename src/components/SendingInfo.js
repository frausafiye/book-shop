import React,{useState} from 'react'
import PaymentSteps from './payment-steps/PaymentSteps'

export default function SendingInfo(props) {
  console.log(props.history.location.state)
  const [totalInfo,setTotalInfo]=useState(props.history.location.state)
  return (
    <div>
    <PaymentSteps active='third'/>
    {totalInfo? <div style={{padding:"5px",width:"fit-content",margin:"10px auto"}}><h3>Payment of {totalInfo.total}$ is successful. Thank you for your purchase!</h3></div>:
    <div style={{width:"fit-content",margin:"0 auto"}}>
      <h1>404</h1>
    </div> }
    </div>

  )
}
