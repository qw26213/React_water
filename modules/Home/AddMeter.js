import React from 'react'
export default React.createClass({
  render() {
    return (
    <div>
        <div className="plr15 bgb mt10">
            <div className="h40 ub bbc ub-ac">
                <label className="w60">水&nbsp;&nbsp;&nbsp;司</label>
                <div className="h40 lh40 ulev0 ub-f1">请选择水司</div>
                <div className="arrow-right ub-img1"></div>
            </div>
            <div className="h40 ub bbc ub-ac">
                <label className="w60">水表号</label>
                <input type="text" placeholder="请输入水表号" className="h30 lh30 ulev0 ub-f1" />
            </div>
        </div>
        <div className="nextFoot tx-c plr15">
            <button className="w100 h40">下一步</button>
        </div>
    </div>
    );
  }
})
