import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProfileSettings from '../ProfileSettingsComponent/ProfileSettingsComponent';
import ChangePassword from '../ChangePasswordComponent/ChangePasswordComponent';
class SettingsContent extends Component{
    render(){
        return (
            <Switch>
              <Route exact path="/settings" component={ProfileSettings} />
              <Route
                exact
                path="/settings/change-password/"
                component={ChangePassword}
              />
              <Route
                exact
                path="/settings/email-sms"
                component={ProfileSettings}
              />
              <Route
                exact
                path="/settings/notification"
                component={ProfileSettings}
              />
              <Redirect to="/settings/" />
            </Switch>
        );
    }
}
export default (SettingsContent);
