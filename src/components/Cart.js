import React from "react";
import { ThemeConsumer } from "../context/theme";
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = () => {
  return (
    <React.Fragment>
      <ThemeConsumer>
        {value => {
          if (value.cart.length) {
            return (
              <div className="cart">
              <h1>Cart</h1>
                  {value.cart.map(item => {
                    return(
                      <div class="table-responsive">
                        <table className="table">
                          <thread>
                            <tr>
                              <th scope="col">Item</th>
                              <th scope="col">Quantity</th>
                              <th scope="col">Price</th>
                            </tr>
                          </thread>
                          <tbody>
                            <tr>
                              <td>{item.title}</td>
                              <td>{item.quantity}
                              <button
                                className="btn1"
                                onClick={(e) => {
                                  value.increment(item.product_id);
                                }}
                              >
                                +
                              </button>

                              <button
                                className="btn1"
                                onClick={() => {
                                  value.decrement(item.product_id);
                                }}
                              >
                                -
                              </button>

                              <button
                                className="btn1"
                                onClick={() => {
                                value.removeItem(item.product_id);
                                }}
                              >
                                x
                              </button>
                              </td>
                              <td>{item.price}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )
                  })}
                <p>Total: {value.cartTotal}</p>
                <hr />
                <br />
                <Link to="/checkout">
                  <button className="btn1">Checkout</button>
                </Link>

                <br />
                <br />
                <button className="btn1" onClick={value.clearCart}>
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
