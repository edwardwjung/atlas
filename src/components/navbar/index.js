import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { SearchBar } from "../../components";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={() => navigate("/")}
              >
                <HomeIcon />
              </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{ textTransform:'capitalize', textAlign: "left", marginLeft: 10 }}
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              {props.title}
            </Typography>
            {props.showSearch && <SearchBar />}
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
