import React from 'react';
import ReactDOM from 'react-dom';
import RegisterRouter from './routers/RegisterRouter';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<RegisterRouter />
, document.querySelector('.root'));