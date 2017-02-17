import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Anno from './modules/Home/Anno'
import Grid from './modules/Home/Grid'
import Laws from './modules/Home/Laws'
import Feedback from './modules/Home/Feedback'
import QuickPay from './modules/Home/QuickPay'
import pauseReport from './modules/Home/pauseReport'
import Mount from './modules/Home/Mount'
import Mend from './modules/Home/Mend'
import Contactus from './modules/Home/Contactus'
import WaterPrice from './modules/Home/WaterPrice'
import WaterQuality from './modules/Home/WaterQuality'
import LawContent from './modules/Home/LawContent'
import MeterInfo from './modules/Home/MeterInfo'
import MeterDetail from './modules/Home/MeterDetail'
import AddMeter from './modules/Home/AddMeter'
import CompileMeter from './modules/Home/CompileMeter'
import PayInfo from './modules/Home/PayInfo'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/Anno" component={Anno}/>
    <Route path="/Grid" component={Grid}/>
    <Route path="/Laws" component={Laws}/>
    <Route path="/Feedback" component={Feedback}/>
    <Route path="/QuickPay" component={QuickPay}/>
    <Route path="/pauseReport" component={pauseReport}/>
    <Route path="/Mount" component={Mount}/>
    <Route path="/Mend" component={Mend}/>
    <Route path="/Contactus" component={Contactus}/>
    <Route path="/WaterPrice" component={WaterPrice}/>
    <Route path="/WaterQuality" component={WaterQuality}/>
    <Route path="/LawContent" component={LawContent}/>
    <Route path="/MeterInfo" component={MeterInfo}/>
    <Route path="/MeterDetail" component={MeterDetail}/>
    <Route path="/AddMeter" component={AddMeter}/>
    <Route path="/CompileMeter" component={CompileMeter}/>
    <Route path="/PayInfo" component={PayInfo}/>
  </Router>
), document.getElementById('app'))
