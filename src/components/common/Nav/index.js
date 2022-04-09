import React, { useState } from 'react'
import { IoMenuOutline } from "react-icons/io5";
import styles from './index.module.scss'
const Navbar=()=>{
    const [toggle,setToggle]=useState(false)
    return(
        <div className={styles['fitness_nav']}>
           <img className={styles['fitness_nav-logo']} src={require('../../../assets/images/logo.png')}  alt='logo'/>
           <ul  className={styles['fitness_nav-links']}>
             <li  className={styles['fitness_nav-links-item']}><a href='#'>Home</a></li>
             <li  className={styles['fitness_nav-links-item']}><a href='#about-us'>About</a></li>
             <li  className={styles['fitness_nav-links-item']}><a href='#testimonials'>Testimonials</a></li>
             <li  className={styles['fitness_nav-links-item']}><a href='#contacts'>Contact</a></li>
           </ul>
           <div className={styles['fitness_nav-btns']}>
             <button className={styles['fitness_nav-btns-signIn']}>Sign in</button>
             <button  className={styles['fitness_nav-btns-signUp']}>Sign Up</button>
             <div className={styles['fitness_nav-btns-menu']}>
                 <IoMenuOutline className={styles['icon']} onClick={()=>setToggle(toggle=>!toggle)}/>
                 {
                     toggle&&(
                     <ul className={styles['fitness_nav-btns-menu-list']}>
                       <li  className={styles['fitness_nav-btns-menu-list-item']}><a href='#'>Home</a></li>
                       <li  className={styles['fitness_nav-btns-menu-list-item']}><a href='#about-us'>About</a></li>
                       <li  className={styles['fitness_nav-btns-menu-list-item']}><a href='#testimonials'>Testimonials</a></li>
                       <li  className={styles['fitness_nav-btns-menu-list-item']}><a href='#contacts'>Contact</a></li>
                    </ul>
                     )}
              
             </div>
           </div>
        </div>
    )

}
export default Navbar