import React from "react";
import { useParams } from "react-router-dom";
import "./CheckOut.css";

const CheckOut = () => {
  const { checkoutId } = useParams();
  return (
    <div>
      <h2 className="title">Your Service Number is : {checkoutId}</h2>
    </div>
  );
};

export default CheckOut;
