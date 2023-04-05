import React from "react";
import Error from "../Components/Error";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

function ErrorPage() {
  return (
    <>
      <div className="content-container">
        <Header />
        <div className="container">
          <Navbar />
          <Error />
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
