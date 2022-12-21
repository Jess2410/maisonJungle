// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <div>
      <Banner />
      <Cart />
      <ShoppingList />
    </div>
  );
}

export default App;
