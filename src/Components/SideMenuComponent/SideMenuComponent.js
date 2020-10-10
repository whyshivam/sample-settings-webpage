import React, { Component } from "react";
import { Menu } from "antd";
import {Link} from "react-router-dom";
class SideMenu extends Component {
    render() {
        return (
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
          >
            <Menu.Item key="1">
              <Link to="/settings/">Edit Profile</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/settings/change-password">Change Password</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/settings/">Email and SMS</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/settings/">Notification</Link>
            </Menu.Item>
          </Menu>
        );
    }
}
export default SideMenu;
