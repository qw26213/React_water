import React from 'react'
import $ from 'jquery'
export default React.createClass({
  getInitialState: function() {
    return {data: null};
  },
   componentDidMount() {
      document.title = "用水";$$('pageTit').innerText = "用水";
        sessionStorage.removeItem('meterInfo');console.log("清除水表列表页的数据");
        localStorage.removeItem("waterCorpIdIndex");
        var dataObj = {moduleId:26,province:"北京",city:"北京",county:"朝阳",token,token};
        var that = this;
        console.log(70)
        $.post(ip_url+'/v1/appFunction/getModuleData.json',{"requestPara": JSON.stringify(dataObj)},function(value){
                    that.setState({data: value});
                    console.log(100)
        });
  },
  getPageInit(){
    console.log(0)
  },
  render() {
    return (
    <div className="swiper-container boxSizing">
        <div className="bgb w_100 h40 ufix lfcover ult0"></div>
        <div className="swiper-wrapper mt10" id="meterList">
            <div className="plr10 swiper-slide boxSizing">
                <div className="water_meter_box">
                    <div className="ub ub-pj plr15 mt15">
                        <div className="ub-ver ub-f1">
                            <div className="ub-ac ulev-1">
                                <div className="meterImg ub-img7 iconwh0 mr05"></div>刘美香<i className="sc ulev-1">(该起个什么名字...)</i>
                            </div>
                            <div className="ub-ac ulev-2 mt05">
                                <div className="meterImg2 ub-img7 iconwh0 mr05"></div>73264587
                                <div className="textnowarp ub-f1 mr20 sc ml05">北京朝阳凯旋城34单元302室</div>
                            </div>
                        </div>
                        <div className="ub-ac ulev0 sc">更多
                            <div className="more ub-img7 iconwh0 ml05"></div>
                        </div>
                    </div>
                    <div className="ub ub-pj plr15 mt15">
                        <div className="ub-ver">
                            <div className="sc4 ulev-1">本期账单</div>
                            <div className="ub mt05"><span className="ulev4 font_dinbold">54.30</span><span className="mt03">元</span></div>
                        </div>
                        <div className="ub-ver">
                            <div className="sc4 ulev-1">应付余额</div>
                            <div className="ub mt05"><span className="ulev4 font_dinbold">54.20</span><span className="mt03">元</span></div>
                        </div>
                        <div className="ub-ver ulev-2">
                            <div className="sc ulev-3 ub-ac">20天后到期<span className="meterImg3 ub-img7 iconwh0"></span></div>
                            <div className="ub ub-pc mt05">
                                <div className="btn02 ulev0 mt10">缴费</div>
                            </div>
                        </div>
                    </div>
                    <div className="ub ulev-1 sc3 mt05 plr15 mb10">水司余额：0.00元</div>
                    <div className="ub plr15 mt10 mb10">
                        <div className="sc ulev-2 ub-apc mr10"><div className="iconwh-1"></div>上月用水40吨</div>
                        <div className="sc ulev-2 ub-apc"><div className="iconwh-1 iconwh-2"></div>今年目前用水500吨</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
})
