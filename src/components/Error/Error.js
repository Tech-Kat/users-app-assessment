import React from "react";
import "./Error.css";

const Error = ({ error }) => {
  return (
    <div className="Error">
      There was an error: {error}
      <br />
      Please refresh the page or contact support.
    </div>
  );
};

export default Error;
