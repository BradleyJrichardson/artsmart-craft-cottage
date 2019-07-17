import React from "react";
import CheckoutForm from "../components/CheckoutForm";
import { ThemeConsumer } from "../context/theme";

export default class Checkout extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <ThemeConsumer>
          {value => {
            if(value.cart !== null) {
              return (
                <React.Fragment>
                  {value.cart.map(item => {
                    return(
                      <>
                        <h1>Title: {item.title}</h1>
                        <h1>Individual Item Price: ${item.price}</h1>
                        <h1>Quantity: {item.quantity}</h1>

                        <h1>Total: ${item.totalPrice}</h1>

                      </>
                    )
                  })}
                  {/* <h1>Total Cart: ${value.cartTotal}</h1> */}
                  <CheckoutForm value={value} />
                </React.Fragment>
              )
            }
            }
          }
        </ThemeConsumer>
      </React.Fragment>
      // <section>
      //   <h1>make new order summary page</h1>
      //   <h1>Checkout</h1>
      //   <p>.....</p>
      //   <ThemeConsumer>{value => <CheckoutForm value={value} />}</ThemeConsumer>
      // </section>
    );
  }
}
