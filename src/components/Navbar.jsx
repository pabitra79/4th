import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const item = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">Redux Store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          cart
        </Link>
        <span className="cartCount">Cartitems: {item.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
