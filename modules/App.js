import React from 'react'
import MeterList from './Home/MeterList'
import Grid from './Home/Grid'
import Anno from './Home/Anno'
import WaterFinance from './Home/WaterFinance'
import MyCenter from './Home/MyCenter'
import Drinking from './Home/Drinking'
import ShopCity from './Home/ShopCity'
import Sociality from './Home/Sociality'
import Friend from './Home/Friend'

export default React.createClass({
  render() {
    return (
            <div>
              <MeterList />
              <Grid />
              <Anno />
              <WaterFinance />
              <MyCenter />
              <Drinking />
              <ShopCity />
              <Sociality />
              <Friend />
            </div>      
    )
  }
})
