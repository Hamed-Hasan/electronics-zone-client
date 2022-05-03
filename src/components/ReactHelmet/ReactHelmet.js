import React from "react";
import { Helmet } from "react-helmet-async";

const ReactHelmet = ({title}) => {
  return (
    <div>
      <Helmet>
        <title>{title} - Electronics Zone</title>
      </Helmet>
    </div>
  );
};

export default ReactHelmet;
