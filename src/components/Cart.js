import React from "react";
import { ThemeConsumer } from "../context/theme";
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = () => {
  return (
    <React.Fragment>
      <ThemeConsumer>
      {/* <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
        </table> */}

        {value => {
          if (value.cart.length) {
            return (
              <div className="cart">
                <table>
                  <thread>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">#</th>
                    </tr>
                  </thread>
                </table>
                <h1>Cart</h1>
                <hr />
                {/* need to refactor this into a separate component */}
                {value.cart.map(item => {
                  return (
                    <React.Fragment>
                      <p>{item.quantity}</p>
                      <p>
                        Item: {item.title}
                        <button
                          className="btn1"
                          onClick={() => {
                            value.removeItem(item.product_id);
                          }}
                        >
                          x
                        </button>
                        <button
                          className="btn1"
                          onClick={() => {
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
                      </p>
                      <p>Price: {item.price}</p>
                      <p />
                      <p>---------</p>
                    </React.Fragment>
                  );
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
