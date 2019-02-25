import React from 'react';
import {Router, Route, Link, hashHistory, BrowserRouter, Switch} from 'react-router-dom';

import App from '../components/App';
import Register from '../components/register';

const RegisterRouter = () => {
 
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/register" component={Register}/>
                </Switch>
            </BrowserRouter>
            
        </div>
    )
  };
  
  export default RegisterRouter;
