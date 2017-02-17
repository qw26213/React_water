import React from 'react'
import NavLink from './NavLink'
import MeterList from './Home/MeterList'
import Grid from './Home/Grid'
import Anno from './Home/Anno'
import WaterFinance from './Home/WaterFinance'

export default React.createClass({
  render() {
    return (
            <div>
              <MeterList />
              <Grid />
              <Anno />
              <WaterFinance />
            </div>      
      // <div>
      //   <h1>React Router Tutorial</h1>
      //   <ul role="nav">
      //     <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
      //     <li><NavLink to="/about">About</NavLink></li>
      //     <li><NavLink to="/repos">Repos</NavLink></li>
      //   </ul>
      //   {this.props.children}
      // </div>
    )
  }
})
