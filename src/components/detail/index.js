import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { Navbar, DescriptionCard, DescriptionLink } from "../../components";

const Detail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { data } = useSelector((state) => state.excel);
  const getDetailFromData = (id) => {
    return data.find((e) => e.Id === id);
  };
  const [detail, setDetail] = useState(""); // updates html
  useEffect(() => {
    if (data.length > 0) {
      setDetail(getDetailFromData(id));
    }
  }, [data, id]);
  return (
    <React.Fragment>
      <Navbar title={detail.Name} />
      <Box>
        
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box
              style={{
                paddingTop: "30px",
                paddingLeft: "30px",
              }}
            >
              <CardMedia
                component="img"
                height="400px"
                image={detail.ImageLink}
                alt="image"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              style={{
                paddingTop: "30px",
                paddingRight: "30px",
              }}
            >
              <Card
                style={{
                  height: "400px",
                }}
              >
                <CardContent>
                  <DescriptionCard
                    
                    header="Description:"
                    content={detail.Description}
                    text={detail.Labels}
                  />
                  <DescriptionLink
                    header="CAIDM Slack Channel Link:"
                    content={detail.SlackURL}
                  />
                  <DescriptionLink
                    header="Dataset Link:"
                    content={detail.DocumentationURL}
                  />
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Detail;
