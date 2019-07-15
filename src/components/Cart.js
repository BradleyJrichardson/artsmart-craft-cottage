import React from "react";
import { ThemeConsumer } from "../context/theme";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <React.Fragment>
      <ThemeConsumer>
        {value => {
          console.log(value);

          if (value.cart.length > 0) {
            return (
              <div className="cart">
                <h1>Cart</h1>
                <hr />
                {/* need to refactor this into a seperate component */}
                {value.cart.map(item => {
                  return (
                    <React.Fragment>
                      <p>Item: {item.title}</p>
                      <p>Price: {item.price}</p>
                      <p>---------</p>
                    </React.Fragment>
                  );
                })}
                <p>Total: {value.cartTotal}</p>
                <hr />
                <Link to="/checkout">
                  <button>Checkout</button>
                </Link>
                <br />
                <button
                  onClick={() => {
                    value.clearCart();
                  }}
                >
                  Clear cart
                </button>
              </div>
            );
          } else {
            return (
              <div className="cart">
                <h1>Cart</h1>
                <h3>Cart is empty</h3>
              </div>
            );
          }
        }}
      </ThemeConsumer>
    </React.Fragment>
  );
};

export default Cart;
