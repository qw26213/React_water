import React from 'react'
export default React.createClass({
  render() {
    return (
    <div className="swiper-container boxSizing">
        <div className="swiper-wrapper mt10" id="meterList">
            <div className="plr10 swiper-slide boxSizing">
                <div className="water_meter_box">
                    <div className="ub ub-pj plr15 mt15">
                        <div className="ub-ver ub-f1">
                            <div className="ub-ac ulev-1">
                                <div className="meterImg ub-img7 iconwh0 mr05"></div>刘美香<i className="sc ulev-1">(该起个什么名字...)</i>
                            </div>
                            <div className="ub-ac ulev-2">
                                <div className="meterImg2 ub-img7 iconwh0 mr05"></div>73264587
                                <div className="textnowarp ub-f1 mr20 sc ml05">北京朝阳凯旋城34单元302室</div>
                            </div>
                        </div>
                        <div className="ub-ac ulev0 sc">更多
                            <div className="more ub-img7 iconwh0 ml05"></div>
                        </div>
                    </div>
                    <div className="ub ub-pj plr15 mt15">
                        <div className="ub-ver ulev-2">
                            <div className="sc4 ulev-2">本期账单</div>
                            <div className="ub mt05"><span className="ulev4 font_dinbold">54.30</span><span className="mt03">元</span></div>
                        </div>
                        <div className="ub-ver ulev-2">
                            <div className="sc4 ulev-2">应付余额</div>
                            <div className="ub mt05"><span className="ulev4 font_dinbold">54.20</span><span className="mt03">元</span></div>
                        </div>
                        <div className="ub-ver ulev-2">
                            <div className="sc ulev-3 ub">20天后到期<span className="meterImg3 ub-img7 iconwh0"></span></div>
                            <div className="ub ub-pc mt05">
                                <div className="btn02 ulev-1">缴费</div>
                            </div>
                        </div>
                    </div>
                    <div className="ub ulev-2 sc3 mt05 plr15">水司余额：0.00元</div>
                    <div className="ub plr15 mt05 mb10">
                        <div className="sc ulev-2 ub-apc mr10">
                            <div className="iconwh-1"></div>上月用水40吨</div>
                        <div className="sc ulev-2 ub-apc">
                            <div className="iconwh-1 iconwh-2"></div>今年目前用水500吨</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
})
