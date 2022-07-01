import React from "react";
import Spinn from "../Spinner/spinner.gif";
function Spinner() {
  return (
    <img
      src={Spinn}
      alt="Loading.."
      style={{ width: "50%", margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;
