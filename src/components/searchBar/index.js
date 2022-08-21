import React from "react";
import { Search, SearchInput, SearchIconWrapper } from "..";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { onSearchInput } from "../../store/excel";

const SearchBar = () => {
  const dispatch = useDispatch();
  const handleOnChange = (event) => {
    dispatch(onSearchInput(event.target.value));
  };
  return (
    <React.Fragment>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <SearchInput
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={handleOnChange}
        />
      </Search>
    </React.Fragment>
  );
};

export default SearchBar;
