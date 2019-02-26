import React from 'react';
import ReactDOM from 'react-dom';
import RegisterRouter from './routers/RegisterRouter';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createStore} from 'redux';
import { signinReducer } from './reducers/signinReducer'; 

const verizonCombinedReducers = combineReducers({signinReducer});
const store = createStore(verizonCombinedReducers, applyMiddleware(thunk));


ReactDOM.render(
    <RegisterRouter />
, document.querySelector('.root'));