import React from "react";
import { Typography } from "@mui/material";

const DescriptionLink = (props) => {
  return (
    <React.Fragment>
      <h2 style={{ textAlign: "left" }}>{props.header}</h2>

      <p style={{ textAlign: "left" }}>
        {props.content &&
          props.content.split(" ").map((e, index) => {
            return (
              <a
                style={{ textAlign: "left" }}
                target="_blank"
                href={e}
                key={index}
              >
                {e}
              </a>
            );
          })}
      </p>
    </React.Fragment>
  );
};

export default DescriptionLink;
