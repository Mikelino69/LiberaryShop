import React, { useContext } from "react";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faHeart,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { Store } from "../Store";

const Navbar = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, wish, userInfo } = state;
  
  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
     //window.location.href = "/signin";
      window.location.href = "/login";
  };
  return (
    <div className="n-container">
      <div className="n-row">
        <div className="n-col">
          {userInfo ? (
            <Link to="/account">
              <FontAwesomeIcon icon={faUser} /> {userInfo.name}
            </Link>
          ) : (
            <span>
              <FontAwesomeIcon icon={faUser} /> Guest
            </span>
          )}
        </div>
      </div>

      <div className="n-row">
        <div className="n-col">
          {/* <img src="/images/logo/logo.jpg" className="logo" alt="" /> */}
          <Link to="/">
            <img
              src="https://cdn.create.vista.com/api/media/medium/196748816/stock-photo-open-book-dark-surface-light?token="
              className="logo"
              alt=""
            />
            {/* <img
              src="https://img.freepik.com/premium-vector/open-book-for-reading-symbol-hand-drawn_599395-487.jpg"
              className="logo"
              alt=""
            /> */}
          </Link>
        </div>
        <div className="n-col">
          <div className="icons">
            {userInfo ? (
              <Link to="#signout" onClick={signoutHandler}>
                <span>
                  <FontAwesomeIcon icon={faArrowRightToBracket} /> LogOut
                </span>
              </Link>
            ) : (
              <a href="/login">
                <span>
                  <FontAwesomeIcon icon={faArrowRightToBracket} /> Login
                </span>
              </a>
            )}
            <a href="/wish">
              <span>
                <FontAwesomeIcon icon={faHeart} />
                {wish.wishItems.length > 0 && (
                  <span className="totalItems">{wish.wishItems.length}</span>
                )}
              </span>
            </a>
            <a href="/cart">
              <span>
                <FontAwesomeIcon icon={faShoppingBag} />
                {cart.cartItems.length > 0 && (
                  <span className="totalItems">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                )}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="n-row">
        <nav className="nav">
          <ul className="items">
            <li className="list">
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="list">
              <NavLink to="/shop" activeClassName="active">
                Shop
              </NavLink>
            </li>
            {/* <li className="list">
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            */}
            <li className="list">
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
            <li className="list">
              <NavLink to="/team" activeClassName="active">
                Team
              </NavLink>
            </li>
          </ul>
          <button className="btn">BTN</button>
        </nav>
      </div>
      <div className="section2"></div>
    </div>
  );
};

export default Navbar;
