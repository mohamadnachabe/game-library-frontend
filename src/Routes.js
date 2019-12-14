import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import AddGame from './AddGame'
import Home from './Home'
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <AddGame path="/AddGame" exact component={{AddGame}}/>
                </Switch>
            </Router>
        )
    }
}
