import React from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  const nav = useNavigate();
  return (
    <>
      <div className="mainContainer">
        <div className="error">
          <p>Oh no there was an error please refresh page</p>
        </div>
      </div>
    </>
  );
}

export default Error;
