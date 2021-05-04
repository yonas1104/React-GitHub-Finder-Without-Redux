import spinner from "../layout/spinner.gif";

import React, { Fragment } from "react";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading Please Wait"
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
