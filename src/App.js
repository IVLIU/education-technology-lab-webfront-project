import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

import Login from './pages/login';
import MenuRouter from './components/sider/sider';
import ContentRouter from './components/content/content';

const { Sider, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: 'stu',
      //建议存储在sessionStorage中，我做测试存在了localStorage
      //isLogin: Boolean(localStorage.getItem('loginStatus')) || false,
      isLogin: false,
    }
  }
  handleLogin = (loginStatus, role) => {
    this.setState({
      isLogin: loginStatus,
      role: role,
    })
  }
  render() {
    const { role, isLogin } = this.state;
    return (
      <div>
        {
          isLogin
          ? <Layout 
              style={{
                height: window.innerHeight,
              }}
            >
              <Sider
                collapsible={true}
                defaultCollapsed={true}
              >
                <MenuRouter role={role} route={window.location.pathname.split('/')[2]} />
              </Sider>
              <Layout>
                <Content style={{
                  margin: '20px 30px 0px 30px',
                  padding: 16,
                  backgroundColor: '#ffffff',
                }}>
                  <ContentRouter role={role} loginStatus={isLogin} />
                </Content>
                <Footer style={{
                  textAlign: 'center'
                }}>
                  教育技术实验室
                </Footer>
              </Layout>
            </Layout>
          : <Route path='/login' render={() => <Login loginCallback={this.handleLogin} />} />
        }
      </div>
    );
  }
}

export default App;
