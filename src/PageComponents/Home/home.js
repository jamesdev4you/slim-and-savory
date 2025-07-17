import React from 'react'
import NavBar from '../NavBar/navbar.js';
import HomeHeader from './homeHeader.js';
import HomeCookbook from './homeCookbook.js';
import HomeLearnMore from './homeLearnMore.js';
import HomeBlog from './homeBlog.js'


const home = () => {
  return (
    <div>
    <NavBar/>
    <HomeHeader />
    <HomeCookbook />
    <HomeLearnMore />
    <HomeBlog />
    </div>
  )
}

export default home