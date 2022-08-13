import { createSlice } from "@reduxjs/toolkit";
import Papa from "papaparse";

const slice = createSlice({
  name: "excel",
  initialState: {
    data: {},
  },
  reducers: {
    dataFetch: (state, action) => {
      // console.log(action.payload.data);
      state.data = action.payload.data;
    },
  },
});

const { dataFetch } = slice.actions;

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
    const data = await parseFile('https://raw.githubusercontent.com/taecoding/taecoding.github.io/master/data/titanic/test.csv');
    dispatch(dataFetch(data));
  } catch (e) {
    console.log("error", e);
  }
};

export default slice.reducer; // export all the reducers in the particular slice
