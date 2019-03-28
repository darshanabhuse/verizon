import React from 'react';
import { Router, Route, Link, hashHistory, BrowserRouter, Switch } from 'react-router-dom';
import AppDetails from '../components/AppDetails';
import App from '../components/App';
import Register from '../components/register';
import RegisterDetails from '../components/RegisterDetails';
import EditApplication from '../components/EditApplication';
import Home from '../components/Home';
import Design from '../components/Design';
import Home2 from '../components/Home2';
import Dashboard from '../components/dashboard';
import AppHome from '../components/apphome';

const RegisterRouter = () => {
    return (
        <div>
            <BrowserRouter basename="/genericusermanagement">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home2" component={Home2} />
                    <Route exact path="/signin" component={AppDetails} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/register/:id" component={RegisterDetails} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/application" component={AppHome} />
                    <Route exact path="/application/edit" component={EditApplication} />
					<Route exact path="/designnbuild" component={Design} />
                </Switch>
            </BrowserRouter>
            
        </div>
    )
};
  
export default RegisterRouter;
