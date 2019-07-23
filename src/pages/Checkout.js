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
                        <div className="title-details-separation">
                          <div>
                            <h1 className="checkout-font-col">Title: {item.title}</h1>
                          </div>
                          <div>
                            <h3 className="checkout-font-col">Individual Item Price: ${item.price}</h3>
                            <h3 className="checkout-font-col">Quantity: {item.quantity}</h3>
                            <h3 className="checkout-font-col">Total: ${item.totalPrice}</h3>
                          </div>
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
