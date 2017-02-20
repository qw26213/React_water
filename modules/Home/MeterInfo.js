import React from 'react'
import Chart from './Chart'
import { Router,router, Route, browserHistory } from 'react-router'
import $ from 'jquery' 
export default React.createClass({
  getInitialState: function() {
    return {
      data: [{name:"马钢",number:"151903017",address:"中国12222234343"},{name:"王红果",number:"100892252",address:"中国11111123"},{name:"王红果",number:"1008954442",address:"中国14444423"}],
      curIndex:0,
      curMeternumber:"",
      curMeterAddr:"",
    };
  },
   componentDidMount() {
      document.title = "我的水表";document.getElementById('pageTit').innerText = "我的水表";
       this.setState({curMeternumber:this.state.data[0].number});
       this.setState({curMeterAddr:this.state.data[0].address});
  },
  handClick:function(i){
       this.setState({curIndex: i});
       this.setState({curMeternumber:this.state.data[i].number});
       this.setState({curMeterAddr:this.state.data[i].address});
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  ToPayFee:function(){
          this.context.router.push('/PayFee?number='+this.state.curMeternumber);
  },
  render() {
      var result = this.state.data;
      var self = this;
      var repoList = result.map(function (result,i) {
        return (
            <div className={i === self.state.curIndex ? 'active meter br05 mr10' : 'meter br05 mr10'} onClick={self.handClick.bind(null,i)} key={i}>
                <div className="clock_icon ub-img7"></div>
                <h2 className="tx-c mt10 ulev0">{result.name}</h2>
                <p className="tx-c mt05 ulev0">{result.number}</p>
            </div>
        );
      });
    return (
            <div className="mt05 btc">
                    <div className="plr15 bgb bbc">
                        <div className="ub ub-ac myclocks p10">
                                {repoList}
                        </div>
                        <div className="ub-apj mt05">
                            <div className=" h50">
                                <p className="h24 ub-ac ulev0 bc">表号：{this.state.curMeternumber}</p>
                                <p className="h24 ub-ac ulev0 bc">地址：{this.state.curMeterAddr}</p>
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
                                <input type="button" className="control4  ub-img7" value="缴水费" onClick={this.ToPayFee}/>
                                <input type="button" className="control3 ml15 ub-img7" value="上一年" />
                                <input type="button" className="control3 ml15 ub-img7" value="下一年" disabled="disabled" />
                        </div>
                    </div>
                    <Chart />
            </div>
    );
  }
})



