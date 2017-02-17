import React from 'react'
export default React.createClass({
  render() {
    return (
        <div>
                <div className="plr15 mt10 bgb btbc">
                    <div className="ub-ac bbc h40">
                        <div className="w70">用&nbsp;户&nbsp;名</div>
                        <input  type="text" className="ub-f1 h30 mr15 ulev1 ml05" placeholder="请输入用户名"  />
                        <div className="red">*</div>
                    </div>
                    <div className="ub-ac h40">
                        <div className="w70">联系电话</div>
                        <input  type="text" className="ub-f1 h30 mr15 ulev1 ml05" placeholder="请输入电话"  />
                        <div className="red">*</div>
                    </div>
                </div>

                <div className="plr15 mt10 bgb btbc">
                    <div className="ub-ac bbc h40">
                        <div className="w70">缴&nbsp;费&nbsp;号</div>
                        <input  type="text" className="ub-f1 h30 ulev1 ml05" placeholder="分户或总表用户需提供原缴费号码" />
                        <span className="red">*</span>
                    </div>
                    <div className="ub-ac h40">
                        <div className="w70">报装地点</div>
                        <input  type="text" className="ub-f1 h30 ulev1 ml05" placeholder="请输入报装地点" />
                        <span className="red">*</span>
                    </div>
                </div>
                <div className="plr15 mt10 bgb btbc">
                    <div className="w100 ub h120 mt15">
                        <div className="ub-f1 ub-apc ub-ver mr20 w0">
                            <img src={require("../../images/upload.png")} width="66" height="66" className="mt10" />
                            <div className="tx-c mt15 bc">身份证/户口本</div>
                            <input type="file" accept="image/*" multiple />
                        </div>
                        <div className="ub-f1 ub-apc ub-ver w0">
                            <img src={require("../../images/upload.png")} width="66" height="66" className="mt10" />
                            <div className="tx-c mt15 bc">房产证</div>
                            <input type="file" accept="image/*" multiple />
                        </div>
                    </div>
                </div>
                <div className="plr15 mt15">
                    <p className="bc lh24 ulev0 tx-j">备注：自建房需下载<a className="link" href="http://www.jxytgs.com/fujian/%E4%B8%AA%E4%BA%BA%E6%8A%A5%E5%BB%BA%E5%AE%A1%E6%89%B9%E6%89%8B%E7%BB%AD.doc
                ">《个人审批手续》</a>到街道办事处（乡政府）和居委会（村小组）盖公章</p>
                </div>
                <div className="nextFoot tx-c plr15">
                    <button className="w100 h36" type="submit">提 交</button>
                </div>
        </div>
    );
  }
})
