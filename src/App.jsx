import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Stats from "./component/Stats";
import Products from "./component/Products";
import CreateAccount from "./component/CreateAccount";
import Pricing from "./component/Pricing";
import Workflow from "./component/Workflow";
import Footer from "./component/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (!exist) {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const proceedToCheckout = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <Products
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        proceedToCheckout={proceedToCheckout}
      />
      <CreateAccount />
      <Pricing />
      <Workflow />
      <Footer />
    </div>
  );
}

export default App;
