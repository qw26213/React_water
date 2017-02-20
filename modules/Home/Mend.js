import React from 'react'
export default React.createClass({
   componentDidMount() {
      document.title = "在线报修";document.getElementById('pageTit').innerText = "在线报修";
  },
  render() {
    return (
        <form>
                <div className="plr15 mt10 bgb btbc">
                    <div className="ub-ac bbc">
                        <div className="w70">用&nbsp;户&nbsp;名</div>
                        <input  type="text" className="ub-f1 h45 mr15 ulev1 ml05" placeholder="请输入用户名"  id="mend_name" />
                        <div className="red">*</div>
                    </div>
                    <div className="ub-ac">
                        <div className="w70">联系电话</div>
                        <input  type="text" className="ub-f1 h45 mr15 ulev1 ml05" placeholder="请输入电话" id="mend_tel" />
                        <div className="red">*</div>
                    </div>
                </div>

                <div className="plr15 mt10 bgb btbc">
                    <div className="ub-ac bbc">
                        <div className="w70">报修地点</div>
                        <input  type="text" className="ub-f1 h45 ulev1 ml05" placeholder="请输入报修地点" id="mend_addre" />
                        <span className="red">*</span>
                    </div>
                    <div className="ub-ac">
                        <div className="w70">报修类型</div>
                        <select  type="text" className="ub-f1 h45 ulev1 ml05" id="mend_type">
                            <option value="">请输入报修类型</option>
                            <option value="1">水质水压</option>
                            <option value="2">管道漏损</option>
                            <option value="3">水表破坏</option>
                        </select>
                    </div>
                </div>
                <div className="plr15 mt15">
                    <p className="mendType">报修类型如下：</p>
                    <p className="bc lh30 ulev0">1、水质水压：出水过黄或有浑浊物、出水水流过低或间歇性无水；</p>
                    <p className="bc lh30 ulev0">2、管道漏损：标签主管、道路漏水；</p>
                    <p className="bc lh30 ulev0">3、水表破坏：水表玻璃破裂、水表不转、水表冻坏；</p>
                </div>
                <div className="nextFoot tx-c plr15">
                    <button className="w100 h36" type="submit">提 交</button>
                </div>
        </form>
    );
  }
})
