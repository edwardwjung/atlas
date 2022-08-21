import { Grid } from "@mui/material";
import React, { useState,useEffect } from "react";
import { Navbar, AtlasCard } from "../../components";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { data,searchInput } = useSelector((state) => state.excel);
  const [displayData, setDisplayData] = useState('');

  const returnedFilterResult = (dataArr,searchInput)=>{
    if(!searchInput){ // if user is not typing anything then return entire arr
      return dataArr;
    }
    return dataArr.filter((e)=>{
        if(e.Name.includes(searchInput)){
          return e;
        }
        if(e.Labels.includes(searchInput)){
          return e;
        }
        return false;
    })
  }
  useEffect(()=>{
      console.log(searchInput);
      if(data.length > 0){
          setDisplayData([...returnedFilterResult(data,searchInput)])
      }
  },[data,searchInput])

  return (
    <React.Fragment>
      <Navbar title="Atlas" showSearch />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {/* whenever iterating, add key=index as a prop */}
        {displayData.length &&
          displayData.map((elem, index) => {
            // use calibrace for javascript to return
            return (
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                key={index}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <AtlasCard
                  imageLink={elem.ImageLink}
                  title={elem.Name}
                  description={elem.Description}
                  labels={elem.Labels}
                  data={elem.Id}
                />
              </Grid>
            );
          })}
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
