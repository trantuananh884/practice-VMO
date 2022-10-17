import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../store/user/user.selector";
import { cartSelector } from "../store/cart/cart.selector";
import { store } from "../store/store";
const Cart = (props) => {
  console.log("rerendered");
  const dispatch = store.dispatch;
  const inputRef = useRef();
  const inputRef2 = useRef();
  const handleClick = () => {
    const value = inputRef.current.value;
    dispatch({ type: "user", payload: value });
  };
  const handleClick2 = () => {
    const value = inputRef2.current.value;
    dispatch({ type: "cart", payload: value });
  };
  const user = useSelector(userSelector);

  return (
    <>
      <div>
        <button onClick={handleClick}>Fire Action</button>
        <input type={"text"} ref={inputRef}></input>
        <span>{user.userName}</span>
      </div>
      <div>
        <button onClick={handleClick2}>Fire Action 2</button>
        <input type={"text"} ref={inputRef2}></input>
      </div>
    </>
  );
};

export default Cart;
