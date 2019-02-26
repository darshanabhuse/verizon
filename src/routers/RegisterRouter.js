import React from 'react';
import {Router, Route, Link, hashHistory, BrowserRouter, Switch} from 'react-router-dom';

import AppDetails from '../components/AppDetails';
import App from '../components/App';
import Register from '../components/register';
import RegisterDetails from '../components/RegisterDetails';
import Home from '../components/Home';
import Home2 from '../components/Home2';

const RegisterRouter = () => {
 
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home2" component={Home2}/>
                    <Route exact path="/signin" component={App} />
                    <Route exact path="/signin/:id" component={AppDetails} />
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/register/:id" component={RegisterDetails} />
                </Switch>
            </BrowserRouter>
            
        </div>
    )
  };
  
  export default RegisterRouter;
