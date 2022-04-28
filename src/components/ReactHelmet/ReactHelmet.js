import React from "react";
import { Helmet } from "react-helmet-async";

const ReactHelmet = ({title}) => {
  return (
    <div>
      <Helmet>
        <title>{title} - Travel Management</title>
      </Helmet>
    </div>
  );
};

export default ReactHelmet;
