import React from "react";

const AtlasBodyHeader = ({ title }) => {
  return (
    <React.Fragment>
      <h2 style={{textAlign:"left",textTransform:'capitalize'}}>
        {title}
      </h2>
    </React.Fragment>
  );
};

export default AtlasBodyHeader;
