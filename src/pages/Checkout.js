import React from "react";
import CheckoutForm from "../components/CheckoutForm";
import { ThemeConsumer } from "../context/theme";
import "../components/CheckoutForm.css";
import "../components/Checkout.css";

export default class Checkout extends React.Component {
  render() {
    return (
      <div className="checkout-container">
        <ThemeConsumer>
          {value => {
            if (value.cart !== null) {
              return (
                <React.Fragment>
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="thead-light ">
                        <th scope="col" className="w-25 ">
                          <p className="checkout-fonts">Title</p>
                        </th>
                        <th scope="col" className="w-25">
                          <p className="checkout-fonts">
                            Individual Item Price
                          </p>
                        </th>
                        <th scope="col" className="w-25">
                          <p className="checkout-fonts">Quantity</p>
                        </th>
                        <th scope="col" className="w-25">
                          <p className="checkout-fonts">Total</p>
                        </th>
                        <th scope="col" className="w-25">
                          {" "}
                        </th>
                      </thead>
                      {value.cart.map((item, index) => {
                        return (
                          <tbody>
                            <td>{item.title}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td>${item.totalPrice}</td>
                            <td>
                              <img
                                className="checkout-image"
                                src={item.images[0]}
                              />
                            </td>
                          </tbody>
                        );
                      })}
                    </table>
                  </div>
                  <CheckoutForm value={value} />
                </React.Fragment>
              );
            }
          }}
        </ThemeConsumer>
      </div>
    );
  }
}
