import React from 'react'
import { Link } from 'react-router' 
export default React.createClass({
  render() {
    return (
    <div className="bgb mt10 btbc">
        <div className=" bbc clearfix pb10">
            <Link to="/MeterInfo">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_01 iconwh ub-img7"></div>
                <h3>我的水表</h3>
            </div>
            </Link>
            <Link to="/pauseReport">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_02 iconwh ub-img7"></div>
                <h3>停水公告</h3>
            </div>
            </Link>
            <Link to="/QuickPay">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_03 iconwh ub-img7"></div>
                <h3>表号缴费</h3>
            </div>
            </Link>
            <Link to="/Laws">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_04 iconwh ub-img7"></div>
                <h3>政策法规</h3>
            </div>
            </Link>
            <Link to="/Feedback">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_08 iconwh ub-img7"></div>
                <h3>意见反馈</h3>
            </div>
            </Link>
            <Link to="/Mount">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_08 iconwh ub-img7"></div>
                <h3>在线报装</h3>
            </div>
            </Link>
            <Link to="/Mend">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_08 iconwh ub-img7"></div>
                <h3>在线报修</h3>
            </div>
            </Link>
            <Link to="/Contactus">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_08 iconwh ub-img7"></div>
                <h3>行业热线</h3>
            </div>
            </Link>
            <Link to="/MapSite">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_08 iconwh ub-img7"></div>
                <h3>网点导航</h3>
            </div>
            </Link>
            <Link to="/WaterPrice">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_08 iconwh ub-img7"></div>
                <h3>水价详情</h3>
            </div>
            </Link>
            <Link to="/WaterQuality">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_08 iconwh ub-img7"></div>
                <h3>水质详情</h3>
            </div>
            </Link>
            <Link to="/AddMeter">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_08 iconwh ub-img7"></div>
                <h3>添加水表</h3>
            </div>
            </Link>
            <Link to="/CompileMeter">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_08 iconwh ub-img7"></div>
                <h3>编辑水表</h3>
            </div>
            </Link>
            <Link to="/MeterDetail">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_08 iconwh ub-img7"></div>
                <h3>水表详情</h3>
            </div>
            </Link>
            <Link to="/AllFunction">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_08 iconwh ub-img7"></div>
                <h3>全部应用</h3>
            </div>
            </Link>
            <Link to="/Myapp">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_08 iconwh ub-img7"></div>
                <h3>水币余额</h3>
            </div>
            </Link>
            <Link to="/PayWays">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_08 iconwh ub-img7"></div>
                <h3>支付方式</h3>
            </div>
            </Link>
            <Link to="/Coupon">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_08 iconwh ub-img7"></div>
                <h3>优惠劵</h3>
            </div>
            </Link>
            <Link to="/PayFee">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_08 iconwh ub-img7"></div>
                <h3>缴费</h3>
            </div>
            </Link>
            <Link to="/PayInfo">
            <div className="w25 ub-apc pt10 ub-ver">
                <div className="icon_08 iconwh ub-img7"></div>
                <h3>缴费详情</h3>
            </div>
            </Link>
        </div>
    </div>
    );
  }
})
