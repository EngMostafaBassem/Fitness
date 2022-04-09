import React from 'react'
import styles from './index.module.scss'
const Hero=()=>{
    return(
        <div className={styles ['fitness_hero']}>
           <div  className={styles ['fitness_hero-content']}>
              <img  className={styles ['fitness_hero-content-img']}  src={require('../../../../../assets/images/hero-logo.png')} alt='hero-logo'/>
              <p  className={styles ['fitness_hero-content-label']}>Always get adieus nature day course for common.</p>
              <p  className={styles ['fitness_hero-content-desc']}>Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
              <form  className={styles ['fitness_hero-content-form']}>
                 <div className={styles ['fitness_hero-content-form-control']}>
                    <input className={styles ['fitness_hero-content-form-control-input']} type='email' name='email' placeholder='Enter your email to get started' />
                    <button className={styles ['fitness_hero-content-form-control-btn']}>Get Started</button>
                 </div>
              </form>

           </div>
           <div className={styles ['fitness_hero-img']}>
               <div className={styles ['fitness_hero-img-container']}>
                   <img src={require('../../../../../assets/images/image 9.png')} alt='fitness-girl'/>
                </div> 
               <div className={styles ['fitness_hero-img-vector-1']} >  
                   <img  src={require('../../../../../assets/images/Vector1.png')} alt='vector1'/>
                </div> 
               <div className={styles ['fitness_hero-img-vector-2']}>
                  <img  src={require('../../../../../assets/images/Vector2.png')} alt='vector2'/>
               </div>
            
              <div  className={styles ['fitness_hero-img-background']}></div>
           </div>
        </div>
    )

}
export default Hero