import React from "react";
import CheckoutForm from "../components/CheckoutForm";
import { ThemeConsumer } from "../context/theme";
import '../components/CheckoutForm.css'
import '../components/Checkout.css'

export default class Checkout extends React.Component {
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
                        <div>
                          <h1>Title: {item.title}</h1>
                          <h2>Individual Item Price: ${item.price}</h2>
                          <h2>Quantity: {item.quantity}</h2>
                          <h2>Total: ${item.totalPrice}</h2>
                        </div>
                        <div>
                          <img className='image-in-whatnew-section' src={item.images[0]}></img>
                        </div>
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
