import React from "react";
import Typography from "@mui/material/Typography";


const AtlasBodyContent = ({description}) => {
    return <React.Fragment>
        <Typography textAlign="left" variant="body2" color="text.secondary">
          {description}
        </Typography>
    </React.Fragment>
}

export default AtlasBodyContent;