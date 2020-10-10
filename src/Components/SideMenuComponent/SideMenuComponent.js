import React, { Component } from "react";
import { Menu } from "antd";
class SideMenu extends Component {
    render() {
        return (
             <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    style={{ height: "100%" }}
                >
                    <Menu.Item key="1">Edit Profile</Menu.Item>
                    <Menu.Item key="2">Change Password</Menu.Item>
                    <Menu.Item key="3">Email and SMS</Menu.Item>
                    <Menu.Item key="4">Notification</Menu.Item>
                
                
                </Menu>
        );
    }
}
export default SideMenu;
