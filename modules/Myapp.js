import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import WeUI from 'react-weui';

const {Button} = WeUI;

export default React.createClass({
   componentDidMount() {
      document.title = "水币余额";document.getElementById('pageTit').innerText = "水币余额";
  },
  render() {
    return (
            <Button>hello wechat</Button>
    );
  }
})

