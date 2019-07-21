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
                      <div className="table-responsive">
                        <table className="table">
                          <tr>
                            <th scope="col" className="w-50">Item</th>
                            <th scope="col" >Quantity</th>
                            <th scope="col" >Price</th>
                          </tr>
                          <tr>
                            <td >{item.title}</td>

                            <td className="">{item.quantity}
                            <button type="button" class="btn btn-outline-success" onClick={(e) => {
                                value.increment(item.product_id);
                              }} > + </button>

                            <button type="button" class="btn btn-outline-warning" onClick={() => {
                                value.decrement(item.product_id);
                              }} > - </button>
                            
                            <button type="button" class="btn btn-outline-danger" onClick={() => {
                              value.removeItem(item.product_id);
                              }} > x </button>
                            </td>

                            <td className="">{item.price}</td>
                          </tr>
                        </table>
                      </div>
                    )
                    })}
                  <p>Total: {value.cartTotal}</p>
                  <Link to="/checkout">
                    <button type="button" class="btn btn-success">Checkout</button>
                  </Link>
                  <button type="button" class="btn btn-danger" onClick={value.clearCart}>
                    Clear cart
                  </button>
              </div>
            );
            } else {
              return (
                <div className="cart">
                  <h1>I'm empty right now</h1>
                </div>
              );
            }
        }}
      </ThemeConsumer>
    </React.Fragment>
  );
};

export default Cart;
