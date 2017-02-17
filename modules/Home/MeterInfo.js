import React from 'react'

export default React.createClass({
  render() {
    return (
<div>
        <div className="plr15 bgb bbc">
            <div className="ub ub-ac myclocks pt10">
                        <div className="meter br05 mr10">
                            <div className="clock_icon ub-img7"></div>
                            <h2 className="tx-c mt10 ulev0">王网娃</h2>
                            <p className="tx-c mt05 ulev0">100000</p>
                        </div>
                        <div className="meter br05 mr10">
                            <div className="clock_icon ub-img7"></div>
                            <h2 className="tx-c mt10 ulev0">王网娃</h2>
                            <p className="tx-c mt05 ulev0">100000</p>
                        </div>
                        <div className="meter br05 mr10">
                            <div className="clock_icon ub-img7"></div>
                            <h2 className="tx-c mt10 ulev0">王网娃</h2>
                            <p className="tx-c mt05 ulev0">100000</p>
                        </div>
            </div>
            <div className="ub-apj mt05">
                <div className=" h50">
                    <p className="h24 ub-ac ulev0 bc">表号：1000000</p>
                    <p className="h24 ub-ac ulev0 bc">地址：王网娃王网娃</p>
                </div>
                <div className="h50 ub">
                    <div className="control2 ub-img7 mr05"></div>
                    <div className="control1 ub-img7"></div>
                </div>
            </div>
        </div>
        <div className="btbc bgb h36 ub-apj plr15 ulev0 bc">
                <p>账单提醒：<i className="ulev-1 sc">开启后将自动扣费</i></p>
                <div className="icon-off ub-img7 ml10"></div>
        </div>
        <div className="bbc bgb h36 ub-apj plr15 ulev0 bc">
                <p>账单提醒：<i className="ulev-1 sc">开启后将自动扣费</i></p>
                <div className="icon-off ub-img7 ml10"></div>
        </div>
        <div className="mt05 bgb">
            <div className="h45 ub ub-pe ub-ac btbc plr15">
                   <input type="button" className="control4  ub-img7" value="缴水费" />
                    <input type="button" className="control3 ml15 ub-img7" value="上一年" />
                    <input type="button" className="control3 ml15 ub-img7" value="下一年" disabled="disabled" />
            </div>
        </div>
</div>
    );
  }
})
