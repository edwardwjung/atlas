import React , {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Dashboard,Detail} from "./components"

import { dataFetchFn } from './store/excel';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(dataFetchFn())
  },[])
  
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />}/ >
             <Route path="detail" element={<Detail />} />
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
