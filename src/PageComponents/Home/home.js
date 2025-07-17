import React from 'react'
import NavBar from '../NavBar/navbar.js';
import HomeHeader from './homeHeader.js';
import HomeCookbook from './homeCookbook.js';

const home = () => {
  return (
    <div>
    <NavBar/>
    <HomeHeader />
    <HomeCookbook />
    </div>
  )
}

export default home