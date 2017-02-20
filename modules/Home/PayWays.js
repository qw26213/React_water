import React from 'react'
export default React.createClass({
   getInitialState(){
    return { 
        money:0.00,
        meterNum:10000000,
        walletBalance:0.00,
        walletBalance:0.00
    }
  },
    componentDidMount() {
        document.title = "支付方式";document.getElementById('pageTit').innerText = "支付方式";
    },
  render() {
    return (
        <div>
                <div className="plr15 btbc bgb mt10">
                    <div className="h40 ub-apj bbc">
                        <div className="ulev0">总额</div>
                        <div className="red ulev0">￥{this.state.money}</div>
                    </div>
                    <div className="h40 ub-apj">
                        <div className="bc1 ulev0">水表号</div>
                        <div className="bc1 ulev0">{this.state.meterNum}</div>
                    </div>
                </div>
                <div className="ub-apc bgb btbc ub-ver mt10">
                    <div className="ulev1 bc1 h40 ub-ac">钱包支付<i className="ulev0 ml15">余额（{this.state.walletBalance}元）</i></div>
                    <div className="ub-apc h50">
                        <div className="ulev3 bc1">￥</div>
                        <div className="h50 lh50 w120 ulev3 ml15">{this.state.money}</div>
                    </div>
                    <div className="ulev1 bc1 w200 h40 ub-apc btc">还需支付:<i className="red ulev1 ml15">￥0.01元</i></div>
                </div>
                <div className="h30 plr15 ulev0">支付方式</div>
                <div className="h60 ub-apj btbc bgb plr15">
                    <div className="rewh icon_1 ub-img7"></div>
                    <div className="ub-f1 ml15">
                        <div className="ulev1">微信支付</div>
                        <div className="ulev-1 mt05 bc">微信支付更便捷</div>
                    </div>
                    <input type="radio" name="payMethod" name="payway"/>
                </div>
        </div>
    );
  }
})


