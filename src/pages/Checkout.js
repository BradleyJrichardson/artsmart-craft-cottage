import React from "react";
import CheckoutForm from "../components/CheckoutForm";
import { ThemeConsumer } from "../context/theme";

export default class Checkout extends React.Component {
  state = {};

  render() {
    return (
      <section>
        <h1>make new order summary page</h1>
        <h1>Checkout</h1>
        <p>.....</p>
        <ThemeConsumer>{value => <CheckoutForm value={value} />}</ThemeConsumer>
      </section>
    );
  }
}
