import React from "react";
import error from '../../Images/404.webp';

const NotFound = () => {
  return (
    <div>
      <img height={'558px'} className="w-100" src={error} alt="" />
    </div>
  );
};

export default NotFound;
