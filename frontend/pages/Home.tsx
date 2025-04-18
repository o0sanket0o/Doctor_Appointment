import React from 'react'
import { Navbar } from '../components/Navbar'
import {Header} from '../components/Header'
import { SpecialityMenu } from '../components/SpecialityMenu'
import { Doctors } from '../components/Doctors'
import { Banner } from '../components/Banner'

export const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <Doctors/>
      <Banner/>
    </div>
  )
}

