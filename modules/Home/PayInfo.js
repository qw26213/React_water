import React from 'react'
export default React.createClass({
  render() {
    return (
<div className="bgb">
    <div className="plr15 bc1 ulev0 h30 ub-ac">账单信息</div>
    <div className="plr15 bgb btbc">
        <div className="ub-apj h45 bbc">
            <div className="ulev0">缴费单位</div><div className="ulev0">江西鹰潭水司</div>
        </div>
        <div className="ub-apj h40 bbc">
            <div className="ulev0 bc1">水表号</div><div className="ub-f1 tx-r bc1 ulev0"></div>
        </div>
        <div className="ub-apj h40 bbc">
            <div className="ulev0 bc1">开始时间</div><div className="ub-f1 tx-r bc1 ulev0"></div>
        </div>
        <div className="ub-apj h40 bbc">
            <div className="ulev0 bc1">结束时间</div><div className="ub-f1 tx-r bc1 ulev0"></div>
        </div>
        <div className="ub-apj h40 bbc">
            <div className="ulev0 bc1">账单金额</div><div className="ub-f1 tx-r bc1 ulev0"></div>
        </div>
        <div className="ub-apj h40">
            <div className="ulev0 bc1">账户余额</div><div className="ub-f1 tx-r bc1 ulev0"></div>
        </div>
    </div>
    <div className="plr15 bc1 ulev0 h30 ub-ac">缴费信息</div>
    <div className="plr15 bgb btbc">
        <div className="ub-apj h60 bbc">
            <div className="ulev0 bc1">优惠劵</div>
                <div className="ub-f1 tx-r bc1 ulev0">
                    <span className="red ulev1">-￥30.00</span>
                    <span className="sc1 ulev0 mt05">使用优惠劵后，缴费金额不可更改</span>
                </div>
            <span className="arrow-right ub-img7 ml10"></span>
        </div>
        <div className="ub-apj h40 bbc">
            <div className="ulev0 bc1">余额支付</div><div className="ub-f1 tx-r bc1 ulev0"></div>
        </div>
        <div className="ub-apj h40">
            <div className="ulev0 bc1">应付金额</div><div className="ub-f1 tx-r bc1 ulev0"></div>
        </div>
    </div>
    <div className="plr15 sc1 ulev0 h30 ub-apc">享受优惠：<em className="red">每次缴水费赠送100水币</em></div>
    <div className="plr15 sc1 ulev1 h30 ub-apc">查询缴费历史>></div>
    <div className="ub-ac h50 bgb w100 btc ufix bottom0">
        <div className="ml15 mr10 ulev1 w80">缴费金额：</div>
        <input className="ub-f1 h40 ulev1 bgs2 pl05" type="text" disabled="disabled"/>
        <div className="bgs br05 h40 w80 ub-apc ulev1 ml10 mr15" onclick="toPay()">缴 费</div>
    </div>
</div>
    );
  }
})
