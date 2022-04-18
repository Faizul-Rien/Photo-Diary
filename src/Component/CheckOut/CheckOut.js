import React from "react";
import { useParams } from "react-router-dom";
import "./CheckOut.css";
import thanks from '../../Images/thanks.jpg'

const CheckOut = () => {
  const { checkoutId } = useParams();
  return (
    <div className="checkout">
      <h2 className="title">Thank you for choosing Service Number : {checkoutId}</h2>
      <img src={thanks} alt="" />
    </div>
  );
};

export default CheckOut;
