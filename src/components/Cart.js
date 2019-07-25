import React, { Component } from "react";
import { ThemeConsumer } from "../context/theme";
import { Link } from "react-router-dom";
import "./Cart.css";

export default class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <ThemeConsumer>
          {value => {
            if (value.cart.length) {
              return (
                <div id="cart" className="cart">
                  <h1 className="brandTitle text-center">Cart</h1>
                  {value.cart.map(item => {
                    return (
                      <div className="table-responsive">
                        <table className="table">
                          <tr>
                            <th scope="col" className="w-50">
                              Item
                            </th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                          </tr>
                          <tr>
                            <td>{item.title}</td>
                            <div className="row ">
                              <td className="mr-3 w-100 d-flex justify-content-around">
                                {item.quantity}
                                <div className="d-flex justify-content-end">
                                  <button
                                    type="button"
                                    className="btn btn-outline-success mr-2"
                                    onClick={e => {
                                      value.increment(item.product_id);
                                    }}
                                  >
                                    {" "}
                                    +{" "}
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-warning mr-2"
                                    onClick={() => {
                                      value.decrement(item.product_id);
                                    }}
                                  >
                                    {" "}
                                    -{" "}
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() => {
                                      value.removeItem(item.product_id);
                                    }}
                                  >
                                    {" "}
                                    x{" "}
                                  </button>
                                </div>
                              </td>
                            </div>
                            <td>{item.price}</td>
                          </tr>
                        </table>
                      </div>
                    );
                  })}
                  <p className="float-right mr-5">Total: {value.cartTotal}</p>
                  <div className="container float-right mt-4">
                    <Link to="/checkout">
                      <button
                        type="button"
                        className="btn btn-success float-right ml-3 mr-5 mb-3"
                        onClick={value.hideCart}
                      >
                        Checkout
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger float-right mr-10"
                      onClick={value.clearCart}
                    >
                      Clear cart
                    </button>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="cart">
                  <h1 className="brandTitle">I'm empty right now</h1>
                </div>
              );
            }
          }}
        </ThemeConsumer>
      </React.Fragment>
    );
  }
}
