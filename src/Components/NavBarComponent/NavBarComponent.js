import React, {Component} from 'react';
import {Menu} from 'antd';
import './NavBarComponent.css';
class NavBar extends Component {
    render(){
        return (

          <div className="navbar-header">
            <div className="navbar-logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Profile</Menu.Item>
              <Menu.Item key="3">Settings</Menu.Item>
            </Menu>
          </div>
        );
    }
}
export default NavBar;