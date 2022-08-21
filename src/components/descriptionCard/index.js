import React from "react";
import { AtlasBodyTags } from "../../components";

const DescriptionCard = (props) => {
  return (
    <React.Fragment>
      <h2 style={{marginTop:'-5px', textAlign: 'left'}}>{props.header}</h2>
      <p style={{textAlign: 'left'}}>{props.content}</p>
      {props.text && <AtlasBodyTags text={props.text} />}
    </React.Fragment>
  );
};

export default DescriptionCard;
