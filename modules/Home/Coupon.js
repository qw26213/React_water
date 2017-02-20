import React from 'react'
export default React.createClass({
    componentDidMount() {
        document.title = "优惠劵";document.getElementById('pageTit').innerText = "优惠劵";
    },
  render() {
    return (
                <div className="ub m10 ub-img7 bg_coupon">
                    <div className="ub ub-f2 ub-ver ptb10 ml10 w0">
                        <div className="h30 ub-ac">
                            <div className="white ulev3 mr05">水杯抵扣劵</div>
                            <div className="h20 ub-apc white ulev-1 br05 plr05 bgtransgray">还有50天过期</div>
                        </div>
                        <div className="white ulev1 mt15">抵用现金不找零</div>
                        <div className="white textSize1 mt10 lh24">有效期:2015-02-05至2015-05-02</div>
                    </div>
                    <div className="ub-apc ub-f1 tx-c w0 ub-ver ptb10">
                        <div className="ub-apc ub-f1"><span className="ulev36 white">500</span><i className="ulev2 white">￥</i></div>
                        <div className="tx-c lh24 white textSize2 w100">限缴水费使用</div>
                    </div>
                </div>
  );
  }
})

// <div className="white ulev1 mt15">订单满100元立减</div>
// <div className="white ulev1 mt15">最高抵扣20元</div>
// <div className="ub-apc ub-f1 ulev36 white"><i className="ulev2 white">折</i></div>