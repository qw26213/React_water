import React from 'react'
export default React.createClass({
   componentDidMount() {
      document.title = "意见反馈";document.getElementById('pageTit').innerText = "意见反馈";
  },
  render() {
    return (
        <div>
                <div className="plr15 mt10 bgb btbc">
                    <div className="ub ub-ac bbc">
                        <div className="w70">用&nbsp;户&nbsp;名</div>
                        <input  type="text" className="ub-f1 h45 mr15 ulev1 ml05" placeholder="请输入用户名"  />
                        <div className="red">*</div>
                    </div>
                    <div className="ub bgb ub-ac">
                        <div className="w70">联系电话</div>
                        <input  type="text" className="ub-f1 h45 mr15 ulev1 ml05" placeholder="请输入电话" />
                        <div className="red">*</div>
                    </div>
                </div>
                <div className="plr15 mt10 bgb btbc">
                    <div className="ub ub-ac bbc">
                        <div className="w70">联系地址</div>
                        <input  type="text" className="ub-f1 h45 mr15 ulev1 ml05" placeholder="请输入地址" />
                    </div>
                    <div className="ub ub-ac">
                        <div className="w70">邮&nbsp;&nbsp;&nbsp;&nbsp;箱</div>
                        <input  type="text" className="ub-f1 h45 mr15 ulev1 ml05" placeholder="请输入邮箱" />
                    </div>
                </div>
                <div className="plr15 mt10 bgb btbc">
                    <div className="ub ub-ac">
                        <textarea className="ub-f1 h100 ulev1 lh36" placeholder="请留下您的宝贵建议"></textarea>
                    </div>
                </div>
                <p className="plr15 bc h24 ulev-1 mt10">感谢您对我们的工作及服务提出良好宝贵的意见及建议，为了更好地服务为您服务，请认真填写以上信息。
                </p>
                <div className="nextFoot tx-c plr15">
                    <button className="w100 h36" type="submit">提 交</button>
                </div>
        </div>
    );
  }
})
