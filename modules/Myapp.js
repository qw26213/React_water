import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Dialog } from 'react-weui';
export default React.createClass ({
   componentDidMount() {
      document.title = "水币余额";$$('pageTit').innerText = "水币余额";
  },
   getInitialState(){
        return { 
        title:"提示",
        showAuto1: false,
        showAuto2: false,
        buttons1: [{
                    label: '确定',
                    onClick: this.hideDialog.bind(this)
                }],
        buttons2: [{
                    type: 'default',
                    label: '取消',
                    onClick: this.hideDialog.bind(this)
                },{
                    type: 'primary',
                    label: '确定',
                    onClick: this.hideDialog.bind(this)
                }]
        }
    },
    hideDialog() {
        this.setState({showAuto1: false});
        this.setState({showAuto2: false});
    },
    render() {
        return (
            <div>
                <Button type="default" onClick={ e=> this.setState({ showAuto1: true}) } >AutoDetect Style1</Button>
                <Button type="default" onClick={ e=> this.setState({ showAuto2: true}) } >AutoDetect Style1</Button>
                <Dialog title={this.state.title} show={this.state.showAuto1} buttons={this.state.buttons1} >
                    您确定删除这个水表吗？
                </Dialog>
                <Dialog title={this.state.title} show={this.state.showAuto2} buttons={this.state.buttons2} >
                    您确定删除这个水表吗？
                </Dialog>
                <Button>hello wechat</Button>
            </div>
        );
    }
});