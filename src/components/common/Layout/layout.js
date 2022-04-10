import React from 'react'
import Footer from '../Footer'
import Navbar from '../Nav'
import styles from './index.module.scss'
const Layout=({children})=>{
  return(
    <>
      <div className={styles['container']}>
        <Navbar/> 
         {children} 
      </div>
      <Footer/>
      </>
  )
}
export default Layout