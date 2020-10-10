import React, { Component } from 'react';
import { Layout } from 'antd';
import './HomeComponent.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from '../NavBarComponent/NavBarComponent';
import SideMenu from '../SideMenuComponent/SideMenuComponent';
import SettingsContent from "../SettingsContentComponent/SettingsContentComponent";
const {  Content, Header, Sider, Footer } = Layout;
class Home extends Component {
    render() {
        return (
          <Layout className="home-main"  >
            <Header className="home-main-header">
              <NavBar />
            </Header>
            <Content className="home-main-content">
              <Layout className="home-main-content-layout">
                <Router>
                  <Sider className="home-layout-sider-left">
                    <SideMenu />
                  </Sider>
                  <Content className="home-layout-sider-right">
                    <SettingsContent />
                  </Content>
                </Router>
              </Layout>
            </Content>
            <Footer></Footer>
          </Layout>
        );
    }
}

export default Home;