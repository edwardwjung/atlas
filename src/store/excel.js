import { createSlice } from "@reduxjs/toolkit";
import Papa from "papaparse";
import { DataCsvUrl } from "../constant";

const slice = createSlice({
  name: "excel",
  initialState: {
    data: {},
    currentSelectedData:{},
    searchInput:''
  },
  reducers: {
    dataFetch: (state, action) => {
      state.data = action.payload.data;
    },
    setData:(state,action)=>{
      state.currentSelectedData = action.payload.data;
    },
    setSearch:(state,action)=>{
      state.searchInput = action.payload;
    }
  },
});

const { dataFetch, setData,setSearch } = slice.actions;

const parseFile = (file) => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function (result) {
        return resolve(result);
      },
      error: function (err) {
        return reject(err);
      },
    });
  });
};

export const dataFetchFn = () => async (dispatch) => {
  try {
    const data = await parseFile(DataCsvUrl);
    dispatch(dataFetch(data));
  } catch (e) {
    console.log("error", e);
  }
};

export const selectedDataForDetail = (data)=>(dispatch)=>{
  dispatch(setData(data));
}

export const onSearchInput = (data)=>(dispatch)=>{
  dispatch(setSearch(data));
}

export default slice.reducer; // export all the reducers in the particular slice
