import React , {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { dataFetchFn } from './store/excel';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  // remove it from here and add it in component level 
  const {data} = useSelector((state)=>state.excel);
  // grabbing specific excel slice

  useEffect(()=>{
    if(data && data.length > 0){
      console.log('data',data);
    }

  },[data])

  // bad practice
  useEffect(()=>{
    dispatch(dataFetchFn())
  },[])
  
  return (
    <div className="App">
       
    </div>
  );
}

export default App;
