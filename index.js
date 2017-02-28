import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute,hashHistory } from 'react-router'
import App from './modules/App'
import Myapp from './modules/Myapp'
import Anno from './modules/Home/Anno'
import Grid from './modules/Home/Grid'
import Laws from './modules/Home/Laws'
import Feedback from './modules/Home/Feedback'
import QuickPay from './modules/Home/QuickPay'
import pauseReport from './modules/Home/pauseReport'
import Mount from './modules/Home/Mount'
import Mend from './modules/Home/Mend'
import MapSite from './modules/Home/MapSite'
import Contactus from './modules/Home/Contactus'
import WaterPrice from './modules/Home/WaterPrice'
import WaterQuality from './modules/Home/WaterQuality'
import LawContent from './modules/Home/LawContent'
import MeterInfo from './modules/Home/MeterInfo'
import MeterDetail from './modules/Home/MeterDetail'
import AddMeter from './modules/Home/AddMeter'
import CompileMeter from './modules/Home/CompileMeter'
import PayInfo from './modules/Home/PayInfo'
import AllFunction from './modules/Home/AllFunction'
import PayWays from './modules/Home/PayWays'
import Coupon from './modules/Home/Coupon'
import PayFee from './modules/Home/PayFee'
import Chart from './modules/Home/Chart'
import Select from './modules/Home/Select'

import About from './modules/About'
import Repos from './modules/Repos'
import PtrDemo from './modules/PtrDemo'

var orignalSetItem = localStorage.setItem;
localStorage.setItem = function(action,params){
  var setItemEvent = new Event(action);
  setItemEvent.params = params;
  window.dispatchEvent(setItemEvent);
  orignalSetItem.apply(this,arguments);
}


render((
      <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/Myapp" component={Myapp}/>
        <Route path="/Anno" component={Anno}/>
        <Route path="/Grid" component={Grid}/>
        <Route path="/Laws" component={Laws}/>
        <Route path="/Feedback" component={Feedback}/>
        <Route path="/QuickPay" component={QuickPay}/>
        <Route path="/pauseReport" component={pauseReport}/>
        <Route path="/Mount" component={Mount}/>
        <Route path="/Mend" component={Mend}/>
        <Route path="/MapSite" component={MapSite}/>
        <Route path="/Contactus" component={Contactus}/>
        <Route path="/WaterPrice" component={WaterPrice}/>
        <Route path="/WaterQuality" component={WaterQuality}/>
        <Route path="/LawContent" component={LawContent}/>
        <Route path="/MeterInfo" component={MeterInfo}/>
        <Route path="/MeterDetail" component={MeterDetail}/>
        <Route path="/AddMeter" component={AddMeter}/>
        <Route path="/CompileMeter" component={CompileMeter}/>
        <Route path="/PayInfo" component={PayInfo}/>
        <Route path="/AllFunction" component={AllFunction}/>
        <Route path="/PayWays" component={PayWays}/>
        <Route path="/Coupon" component={Coupon}/>
        <Route path="/PayFee" component={PayFee}/>
        <Route path="/Chart" component={Chart}/>
        <Route path="/Select" component={Select}/>

        <Route path="/About" component={About}/>
        <Route path="/Repos" component={Repos}/>
        <Route path="/PtrDemo" component={PtrDemo}/>
      </Router>
), document.getElementById('app'))



