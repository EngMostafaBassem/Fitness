import React from 'react'
import styles from './index.module.scss'
const Footer=()=>{
    return(
        <div className={styles['fitness_footer']} id='contacts'>
          <p className={styles['fitness_footer-title']}>Subscribe to our Newsletter</p>
          <form className={styles['fitness_footer-form']}>
              <div className={styles['fitness_footer-form-control']}>
                  <input className={styles['fitness_footer-form-control-input']}  name='email' type='email' placeholder='Enter your mail here' />
                  <button className={styles['fitness_footer-form-control-btn']} >Subscribe</button>
              </div>
          </form>
          <div className={styles['fitness_footer-info']}>
              <div className={styles['fitness_footer-info-sec']}>
                 <div className={styles['fitness_footer-info-sec-logo']}>
                     <img src={require('../../../assets/images/Logo-w.png')}  alt='logo'/>
                  </div>
               <p className={styles['fitness_footer-info-sec-address']}>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
              </div>

              <div className={styles['fitness_footer-info-sec']}>         
                <p className={styles['fitness_footer-info-sec-title']}>Links</p>
                <ul className={styles['fitness_footer-info-sec-list']}>
                    <li  className={styles['fitness_footer-info-sec-list-item']}><a href='#'>Overons</a></li>
                    <li  className={styles['fitness_footer-info-sec-list-item']}><a href='#'>Social Media</a></li>
                    <li  className={styles['fitness_footer-info-sec-list-item']}><a href='#'>Counters</a></li>
                    <li  className={styles['fitness_footer-info-sec-list-item']}><a href='#'>Contact</a></li>
                </ul>
              </div>

              <div className={styles['fitness_footer-info-sec']}>         
                <p className={styles['fitness_footer-info-sec-title']}>Company</p>
                <ul className={styles['fitness_footer-info-sec-list']}>
                    <li  className={styles['fitness_footer-info-sec-list-item']}><a href='#'>Terms & Conditions</a></li>
                    <li  className={styles['fitness_footer-info-sec-list-item']}><a href='#'>Privary Policy</a></li>
                    <li  className={styles['fitness_footer-info-sec-list-item']}><a href='#'>Contact</a></li>
                </ul>
              </div>

              <div className={styles['fitness_footer-info-sec']}>         
                <p className={styles['fitness_footer-info-sec-title']}>Get in touch</p>
                <ul className={styles['fitness_footer-info-sec-list']}>
                    <li  className={styles['fitness_footer-info-sec-list-item']}><a href='#'>Crechterwoord K12 182 DK Alknjkcb</a></li>
                    <li  className={styles['fitness_footer-info-sec-list-item']}><a href='#'>085-132567</a></li>
                    <li  className={styles['fitness_footer-info-sec-list-item']}><a href='#'>info@lobar.net</a></li>
                </ul>
              </div>
              
          </div>
          <p  className={styles['fitness_footer-cpyright']}>© 2021 Fitness.co . All rights reserved</p>

        </div>
    )

}
export default Footer