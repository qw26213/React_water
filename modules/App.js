import React from 'react'
import MeterList from './Home/MeterList'
import Function from './Home/Function'
import Anno from './Home/Anno'
import WaterFinance from './Home/WaterFinance'
import MyCenter from './Home/MyCenter'
import Drinking from './Home/Drinking'
import ShopCity from './Home/ShopCity'
import Sociality from './Home/Sociality'
import Friend from './Home/Friend'
import $ from 'jquery'
export default React.createClass({
  getInitialState: function() {
    return {
      data:null,
      MeterData: [],
      FunctionData:[],
      AnnoData:[]
    };
  },
   componentDidMount() {
      document.title = "用水";$$('pageTit').innerText = "用水";
        sessionStorage.clear();   //清除各二级页面数据
        localStorage.removeItem("waterCorpIdIndex");

        if(localStorage.pageInfo){
              var pageInfo = JSON.parse(localStorage.pageInfo);
              this.setState({data: pageInfo});
              this.setState({MeterData: pageInfo.meterList});
              this.setState({FunctionData: pageInfo.functionList});
             return;
        }
        this.getPageInit(0);
  },
  componentWillUnmount(){
      localStorage.pageInfo = JSON.stringify(this.state.data);
  },
    getPageInit(moduleId){
        var dataObj = {moduleId:moduleId,"province":"江西省","city":"鹰潭市","county":"月湖区",token:token};
        var that = this;
        Loading();
        $.post(ip_url+'/v1/appFunction/getModuleData.json',{"requestPara": JSON.stringify(dataObj)},function(data){
                    closeLoading();
                    that.setState({data: data.data});
                    that.setState({MeterData: data.data.meterList});
                    that.setState({FunctionData: data.data.functionList});
        });
  },

  render() {
      if(this.state.data==null){ return ( <div></div>);}
      return (
              <div>
                <MeterList data={this.state.MeterData}/>
                <Function data={this.state.FunctionData}/>
                <Anno />
                <WaterFinance />
                <MyCenter />
                <Drinking />
                <ShopCity />
                <Sociality />
                <Friend />
              </div>      
      )
  }
})
