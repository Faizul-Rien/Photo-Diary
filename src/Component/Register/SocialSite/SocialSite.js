import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../../Images/google.jpg";

const SocialSite = () => {
  const nevigate = useNavigate();
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);

  if (user) {
    nevigate("/home");
  }
  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-white rounded btn-outline-success w-50 mt-2"
      >
        <img className="me-2" style={{ width: "30px" }} src={google} alt="" />
        Google Sign In
      </button>
   
    </div>
  );
};

export default SocialSite;
