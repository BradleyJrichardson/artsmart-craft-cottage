import React from "react";

const { Consumer, Provider } = React.createContext();

export const ThemeConsumer = Consumer;
export const ThemeProvider = Provider;

// provider
// class ProductProvider extends Component {
//   state = {
//     products: null,
//     cart: [],
//     cartSubTotal: 0,
//     cartTotal: 90
//   };

//   async componentDidMount() {
//     if (this.state.products === null) {
//       try {
//         const response = await axios.get("/store/index");
//         this.setState({
//           products: response.data
//         });
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     // console.log("from context", this.state.products);
//   }

/// TODO
// addToCart = () => {};
// increment = () => {};
// decrement = () => {};
// getTotals = () => {};
// addTotals = () => {};
// removeItem = id => {};
// clearCart = () => {
//   this.setState(() => {
//     return { cart: [] };
//   });
// };

//   render() {
//     return (
//       <ProductContext.Provider value={this.state}>
//         {this.props.children}
//       </ProductContext.Provider>
//     );
//   }
// }
