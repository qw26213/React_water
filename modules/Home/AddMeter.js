import React from 'react'
import { Router, Route,hashHistory } from 'react-router'
import $ from 'jquery'
import Toast from './Toast'
export default React.createClass({
   getInitialState:function(){
      return {
          name:"请选择水司",number:''
      }
   },
  contextTypes: {
    router: React.PropTypes.object
  },
   componentDidMount() {
      document.title = "添加水表";$$('pageTit').innerText = "添加水表";
      var waterCorpIdIndex = localStorage.waterCorpIdIndex||0;
      var watercorList = ["江西鹰潭水司","余江水司"];
      this.setState({name:watercorList[waterCorpIdIndex]});
  },
   handlNameChange:function(event){
        this.setState({name:event.target.value});
   },
   handlNumberChange:function(event){
        this.setState({number:event.target.value});
   },
    toSelect(){
         this.context.router.push('/Select');
    },
    handleSubmit:function(event){
      if(this.state.name==""){
        this.refs.msg.showMsg("名字不能为空");return;
      }
      if(this.state.number==""){
        this.refs.msg.showMsg("水表号不能为空");return;
      }
      var dataObj = {
            waterCorpId:waterCorpId,
            token:token,
            meterName:"",
            userID:this.state.number
      }
      var that = this;
        $.post(ip_url+'/memeterinfo/queryMeter.json',{"requestPara": JSON.stringify(dataObj)},function(data){
                if(data.status==0){
                        localStorage.meterData = JSON.stringify(data.data[0]);
                        that.context.router.push('/MeterDetail');
                }else{
                        that.refs.msg.showMsg(data.message);
                }
        })
    },
   render() {
    return (
    <div>
        <div className="plr15 bgb mt10 btbc">
            <div className="h40 ub bbc ub-ac">
                 <label className="w60">水司名</label>
                 <div className="h30 ulev0 ub-f1 lh30 ml10" onClick = {this.toSelect}>{this.state.name}</div>
            </div>
            <div className="h40 ub ub-ac">
                <label className="w60">水表号</label>
                <input type="text" placeholder="请输入水表号" className="h30 lh30 ulev0 ub-f1" onChange={this.handlNumberChange}  />
            </div>
        </div>
        <div className="nextFoot tx-c plr15">
            <button className="w100 h40" onClick={this.handleSubmit}>下一步</button>
        </div>
        <Toast ref="msg" />
    </div>
    );
  }
})
