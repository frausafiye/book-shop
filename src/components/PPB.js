import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";
import Spinner from "./Spinner";
import { withRouter} from "react-router-dom";

let PayPalButton = null;

class PPB extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showButtons: false,
      loading: true,
      paid: false,
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
      this.setState({ loading: false, showButtons: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

    const scriptJustLoaded =
      !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PayPalButton = window.paypal.Buttons.driver("react", {
          React,
          ReactDOM
        });
        this.setState({ loading: false, showButtons: true });
      }
    }
  }
  createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: +"BookShopper books",
          amount: {
            currency_code: "USD",
            value: this.props.total
          }
        }
      ]
    });
  };

  onApprove = (data, actions) => {
    actions.order.capture().then(details => {
      const paymentData = {
        payerID: data.payerID,
        orderID: data.orderID
      };
      this.setState({ showButtons: false, paid: true });
    });
  };

  render() {
    const { showButtons, loading, paid } = this.state;

    return (
      <div className="main">
        {loading && <Spinner/>}

        {showButtons && (
          <PayPalButton
            createOrder={(data, actions) => this.createOrder(data, actions)}
            onApprove={(data, actions) => this.onApprove(data, actions)}
          />
        )}
        <button 
          onClick={()=>{this.setState({paid:true})}}
          className="btn">Paid True-Testing</button>
        {paid && 
          this.props.history.push({pathname:"/sendingInfo",state:{total:this.props.total, paypal:window.paypal}})
        }
      </div>
    );
  }
}

export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=ATfnR8lDqSthpSx1-nzhIOXuzajVh5dwHMXvIXvoe6vqBplDhH4GRgvQAAC-6G9FGv8PEmo0MhRYgWG8`)(withRouter(PPB))
