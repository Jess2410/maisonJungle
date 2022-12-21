import React from "react";

const Cart = () => {
  const monsteraPrice: number = 8;
  const ivyPrice: number = 10;
  const flowerPrice: number = 15;
  return (
    <div className="lmj-cart">
      <h2>Panier</h2>
      <ul>
        <li>Monstera : {monsteraPrice}€</li>
        <li>Lierre : {ivyPrice}€</li>
        <li>Fleurs : {flowerPrice}€</li>
      </ul>
      Total : {monsteraPrice + ivyPrice + flowerPrice}€
    </div>
  );
};

export default Cart;
