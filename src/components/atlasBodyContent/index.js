import React from "react";
import Typography from "@mui/material/Typography";
import { formatText } from "../../helper"


const AtlasBodyContent = ({description}) => {
    return <React.Fragment>
        <Typography style={{textAlign:"justify"}} textAlign="left" variant="body2" color="text.secondary">
          {formatText(description,100)}
        </Typography>
    </React.Fragment>
}

export default AtlasBodyContent;