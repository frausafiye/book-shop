import React from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./payment-steps.css";

export default function PaymentSteps({active}) {
  return (
    <div className='buying steps'>
                <Link to="/cartInfo">
                <div className={active==='first'? 'active-step':undefined}>
                <div className='step-box'>
                  <FontAwesomeIcon icon={["fas", "shopping-cart"]} className='buying step'/>
                </div>
                </div>
                </Link>
                <div className='arrow-box'>
                  <FontAwesomeIcon icon={["fas", "arrow-circle-right"]} className='buying step'/>
                </div>
                <Link to="/payment">
                  <div className={active==='second'? 'active-step':undefined}>
                    <div className='step-box'><FontAwesomeIcon icon={["fas", "euro-sign"]} className='buying step'/>
                    </div>
                  </div>
                </Link>
                <div className='arrow-box'>
                  <FontAwesomeIcon icon={["fas", "arrow-circle-right"]} className='buying step'/>
                </div>
                <Link to="/sendingInfo">
                  <div className={active==='third'? 'active-step':undefined}>
                    <div className='step-box'><FontAwesomeIcon icon={["fas", "shipping-fast"]} className='buying step'/>
                    </div>
                  </div>
              </Link>
              </div>
  )
}
