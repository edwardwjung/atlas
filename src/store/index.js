import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux';
import excel from './excel';

const reducer = combineReducers({excel})
const store = configureStore({reducer})
// simplify

export default store;