import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footers from '../Footers/Footers'

const Layout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footers />
    </div>
  )
}

export default Layout