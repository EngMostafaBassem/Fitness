import React from 'react'
import Footer from '../Footer'
import Navbar from '../Nav'
const Layout=({children})=>{
  return(
      <>
        <Navbar/> 
        {children}
        <Footer/>
      </>
  )
}
export default Layout