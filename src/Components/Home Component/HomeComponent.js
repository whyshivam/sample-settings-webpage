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
            <Content style={{ padding: "0 50px" }}>
              <Layout
                className="site-layout-background"
                style={{ padding: "24px 0" }}
              >
                <Sider className="site-layout-background" width={200}>
                  <SideMenu />
                </Sider>

                <Content
                  style={{ padding: "0 24px", minHeight: 280 }}
                ></Content>
              </Layout>
            </Content>
            <Footer>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        );
    }
}

export default Home;