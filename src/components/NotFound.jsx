import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <React.Fragment>
      <p>404 Not Found</p>
      <Link to="/">Go to Home</Link>
    </React.Fragment>
  );
};

export default NotFound;
