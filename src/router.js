import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";

const Root = ( ) => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Homepage } />
            <Route path="/about_us" component={ AboutUs } />
        </Switch>
    </BrowserRouter>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root