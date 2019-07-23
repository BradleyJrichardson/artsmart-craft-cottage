import React from "react";
import CheckoutForm from "../components/CheckoutForm";
import { ThemeConsumer } from "../context/theme";
import '../components/Checkout.css'

export default class Checkout extends React.Component {
  // state = {};

  render() {
    return (
      <div className='checkout-container'>
        <ThemeConsumer>
          {value => {
            if(value.cart !== null) {
              return (
                <React.Fragment>
                  {value.cart.map((item, index) => {
                    return(
                      <div className='individual-item' key={index}>
                        <h1>Title: {item.title}</h1>
                        <h1>Individual Item Price: ${item.price}</h1>
                        <h1>Quantity: {item.quantity}</h1>
                        <h1>Total: ${item.totalPrice}</h1>
                      </div>
                    )
                  })}
                  <CheckoutForm value={value} />
                </React.Fragment>
              )
            }
            }
          }
        </ThemeConsumer>
      </div>
    );
  }
}
