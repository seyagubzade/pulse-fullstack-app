import React from 'react'
import Slider from '../../components/Slider'
import Welcome from './Welcome'
import OurServices from './OurServices'
import Menu from './Menu'
import Helmet from "react-helmet";

const Home = () => {
  return (
    <div>
        <Helmet title="Home page" />
        <Slider />
        <Welcome />
        <OurServices />
        <Menu />
    </div>
  )
}

export default Home