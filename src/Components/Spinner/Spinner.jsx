import React from "react";
import Spinn from "../Spinner/spinner.gif";
function Spinner() {
  return (
    <img
      src={Spinn}
      alt="Loading.."
      style={{ width: "50%", margin: "140px auto", display: "block" }}
    />
  );
}

export default Spinner;
