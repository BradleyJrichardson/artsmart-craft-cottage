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
                  {value.cart.map((item, index) => {
                    return (
                      <div className="table-responsive">
                        <thead>
                          <th scope="col" className="w-25">
                            Title
                          </th>
                          <th scope="col" className="w-25">
                            Individual Item Price
                          </th>
                          <th scope="col" className="w-25">
                            Quantity
                          </th>
                          <th scope="col" className="w-25">
                            Total
                          </th>
                          <th scope="col" className="w-25">
                            {" "}
                          </th>
                        </thead>
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
                      </div>
                    );
                  })}
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
