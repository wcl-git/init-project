import React, { Component } from 'react';
import { Layout } from 'antd';
import LoginForm from './components/LoginForm';
import * as Api from './server';
import './login.less';

const { Header, Footer, Sider, Content } = Layout;

export default class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {

  }

  // 登录
  loginFunction = async (form) => {
    const res = await Api.loginInfo(form);
    console.log(res);
  }

  render() {
    return (
      <Layout className="mainLayout">
        <Header className="header" />
        <Layout className="subLayout">
          <Sider className="siderLeft" />
          <Content className="content">
            <LoginForm loginFunction={this.loginFunction} />
          </Content>
          <Sider className="siderRight" />
        </Layout>
        <Footer className="footer" />
      </Layout>
    );
  }
}
