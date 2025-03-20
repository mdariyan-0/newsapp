import React from "react";
import loading from "/src/assets/loading.gif"

function Spinner() {
    return (
      <div className="container d-flex justify-content-center">
        <img src={loading} alt="loading..." />
      </div>
    );
  }

export default Spinner;
