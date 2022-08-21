import React from "react";
import { Typography } from "@mui/material";
import { AtlasBodyTags } from "../../components";

const DescriptionCard = (props) => {
  return (
    <React.Fragment>
      <h2 style={{textAlign: 'left'}}>{props.header}</h2>
      <p style={{textAlign: 'left'}}>{props.content}</p>
      {props.text && <AtlasBodyTags text={props.text} />}
    </React.Fragment>
  );
};

export default DescriptionCard;
