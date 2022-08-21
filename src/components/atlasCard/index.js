import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { AtlasBody, AtlasCardFooter } from "../../components";

const AtlasCard = ({ imageLink, title, description, labels, data }) => {
  return (
    <React.Fragment>
      <Card
        style={{ marginTop: 30, marginBottom: 30 }}
        sx={{ maxWidth: 320, width: "100%" }}
      >
        <CardMedia component="img" height="140" image={imageLink} alt="image" />
        <CardContent>
          <AtlasBody title={title} description={description} labels={labels} />
        </CardContent>
        <CardActions>
          <AtlasCardFooter id={1} data={data} />
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default AtlasCard;
