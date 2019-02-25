import React from 'react';
import {Router, Route, Link, hashHistory, BrowserRouter, Switch} from 'react-router-dom';

import App from '../components/App';
import Register from '../components/register';
import Home from '../components/Home';

const RegisterRouter = () => {
 
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/signin" component={App} />
                    <Route path="/register" component={Register}/>
                </Switch>
            </BrowserRouter>
            
        </div>
    )
  };
  
  export default RegisterRouter;
