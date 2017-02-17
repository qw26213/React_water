import React from 'react'
export default React.createClass({
  render() {
    return (
        <div>
            <div className="plr15 bgb btbc mt10">
                <div className="h45 bbc ub-ac">
                    <div className="w60">水&nbsp;&nbsp;司</div>
                    <div className="h30 ulev0 ub-f1 lh30 ml10">请选择水司</div>
                    <div className="arrow-right ub-img1"></div>
                </div>
                <div className="h45 ub-ac">
                    <div className="w60">水表号</div>
                    <input type="text" placeholder="请输入水表号" className="h30 ulev0 ub-f1 ml10" />
                </div>
            </div>
            <div className="nextFoot tx-c plr15">
                <button className="w100 h40">下一步</button>
            </div>
        </div>
    );
  }
})


