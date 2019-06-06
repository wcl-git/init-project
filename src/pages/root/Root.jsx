import React, { Component } from 'react';
import { Button } from 'antd';

export default class Root extends Component {
  click =() => {

  }

  render() {
    return (
      <React.Fragment>
        <Button>Root</Button>
        <Button>Root</Button>
      </React.Fragment>
    );
  }
}
