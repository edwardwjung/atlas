import { Button } from "@mui/material";
import React from "react";
import Link from "../../../node_modules/@mui/material/Link/Link";

const AtlasCardFooter = (data) => {
  const link = `/detail?id=${data.data}`;

  return (
    <React.Fragment>
      <a
        href={link}
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noreferrer"
      >
        <Button size="small">Learn More</Button>
      </a>
      {/* entire button is a link */}
    </React.Fragment>
  );
};

export default AtlasCardFooter;
