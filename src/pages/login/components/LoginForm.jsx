/**
 * 登陆的表单，后续扩展
*/
import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import logo from 'assets/images/common/logo.png';
import './loginForm.less';

// form 主体-配置
const formStyleConfig = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
// form item-配置
const formItemStyleConfig = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: {
        userName: '', //  用户名
        password: '', // 用户 password
      },
    };
  }

  // 渲染 label
  renderFormItemLabel = (label) => {
    return (
      <label className="formItem-label" htmlFor="">
        {label}
      </label>
    );
  }

  render() {
    const { loginForm } = this.state;
    const { loginFunction } = this.props;

    return (
      <div className="from-box">
        <div className="title-container">
          <img className="titleImg" alt={`${process.env.REACT_APP_TITLE}`} src={logo} />
          <p className="titleText">{process.env.REACT_APP_COMPANY_NAME}</p>
        </div>

        <Form className="form-content" labelAlign="left" {...formStyleConfig}>
          <Form.Item label={this.renderFormItemLabel('用户名')} colon={false}>
            <Input
              className="formItem-input"
              autoComplete="false"
              type="text"
              value={loginForm.userName}
              placeholder="请输入用户名"
              onChange={(e) => {
                const newValue = e.target.value;
                this.setState((prevState) => {
                  return {
                    loginForm: { ...prevState.loginForm, userName: newValue },
                  };
                });
              }}
            />
          </Form.Item>
          <Form.Item label={this.renderFormItemLabel('密码')} colon={false}>
            <Input
              className="formItem-input"
              autoComplete="false"
              type="password"
              value={loginForm.password}
              placeholder="请输入密码"
              onChange={(e) => {
                const newValue = e.target.value;
                this.setState((prevState) => {
                  return {
                    loginForm: { ...prevState.loginForm, password: newValue },
                  };
                });
              }}
            />
          </Form.Item>
          <Form.Item {...formItemStyleConfig}>
            <div className="formItem-content">
              <Button
                className="login-btn"
                type="primary"
                onClick={() => {
                  loginFunction(loginForm);
                }}
              >
              登&emsp;录
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
