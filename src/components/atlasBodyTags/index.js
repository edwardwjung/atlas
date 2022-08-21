import { Chip } from "@mui/material";
import React from "react";

const AtlasBodyTags = ({ text }) => {
  return (
    <React.Fragment >
      <div style={{ marginTop: 20, display: "flex", justifyContent: "flex-start" }}>
        {text.split(" ").map((e,index) => (
          <Chip style={{marginRight:10}} label={e} key = {index}/>
        ))}
      </div>
      {/* react fragment does not style */}
    </React.Fragment>
  );
};

// badges or icons or chip

export default AtlasBodyTags;
