import React, { Component } from 'react';
import { Layout } from 'antd';
import './HomeComponent.css';
import NavBar from '../NavBarComponent/NavBarComponent';
import SideMenu from '../SideMenuComponent/SideMenuComponent';

const {  Content, Header, Sider, Footer } = Layout;
class Home extends Component {
    render() {
        return (
          <Layout>
            <Header>
              <NavBar />
            </Header>
            <Content className="home-main-content">
              <Layout className="home-main-content-layout">

                <Sider className="home-layout-sider-left">
                  <SideMenu />
                </Sider>
                <Content className="home-layout-sider-right">
                    Hello
                </Content>
              </Layout>
            </Content>
            <Footer>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        );
    }
}

export default Home;