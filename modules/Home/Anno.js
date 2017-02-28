import React from 'react'
export default React.createClass({
  render() {
    return (
    <div>
        <div className="mt10 btbc plr15 ub-apj bgb h40">
            <div className="anno ub-img7"></div>
            <div className="ub-f1 pl10 ub-ac blc h20 ml10"><span className="anno_mark mr10 br05">停水</span>
                <p className="ulev0 ub-f1 textnowarp" id="anno_text">文字介绍文字介绍文字介绍</p>
            </div>
            <div className="arrow-right ub-img7"></div>
        </div>
        <div className="mt10"><img src={require('../../images/banner1.png')} className="w100" /></div>
    </div>
    );
  }
})


