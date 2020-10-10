import React, { Component } from 'react';
import {  Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute";

class SettingsContent extends Component{
    render(){
        return (
          
            <Switch>
              <PrivateRoute
                exact
                path="/home/meeting/:id"
                component={}
              />
              <PrivateRoute
                exact
                path="/home/profile/"
                component={}
              />
              <PrivateRoute
                exact
                path="/home/"
                component={}
              />
            </Switch>
          
        );
    }
}

export default SettingsContent;