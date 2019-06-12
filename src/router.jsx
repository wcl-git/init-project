/*
 * @Author: wdy
 * @Date: 2019-04-19 13:57:46
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-06-12 09:27:49
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

// import Login from 'pages/login';
// import Root from 'pages/root';

// loading 必须传，但可以返回空
const Loading = ({ error }) => {
  if (error) {
    console.log(error);
    return 'Oh nooess!';
  }
  return <div>{null}</div>;
};

//  登陆
const Login = Loadable({
  loader: () => import(/* webpackChunkName: "Login" */ 'pages/login'),
  loading: Loading,
});
// test Root
const Root = Loadable({
  loader: () => import(/* webpackChunkName: "Root" */ 'pages/root'),
  loading: Loading,
});

class Routers extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/login" />} />
          <Route path="/login" component={Login} />
          <Route path="/Root" component={Root} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Routers;
