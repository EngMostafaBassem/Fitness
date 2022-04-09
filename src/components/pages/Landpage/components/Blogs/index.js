import React from 'react'
import styles from './index.module.scss'
const Blogs=()=>{
    return(
        <div className={styles['fitness-blogs']}>
           <p className={styles['fitness-blogs-title']}>Our Regurlar Updated Blog and media</p>
           <div  className={styles['fitness-blogs-wrapper']}>
               <div className={styles['fitness-blogs-wrapper-box']}>
                   <img   className={styles['fitness-blogs-wrapper-box-img']} src={require('../../../../../assets/images/blog1.png')} alt='blog1'/>   
                   <p className={styles['fitness-blogs-wrapper-box-status']}>New !</p>
                   <p className={styles['fitness-blogs-wrapper-box-label']}>Supported me sweetness behaviour shameless excellent so arranging.</p>
                   <p className={styles['fitness-blogs-wrapper-box-desc']}>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.</p>             
                </div> 

                <div className={styles['fitness-blogs-wrapper-box']}>
                   <img   className={styles['fitness-blogs-wrapper-box-img']} src={require('../../../../../assets/images/blog2.png')} alt='blog2'/>   
                   <p className={styles['fitness-blogs-wrapper-box-label']}>Do believing oh disposing to supported allowance we.</p>
                   <p className={styles['fitness-blogs-wrapper-box-desc']}>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.</p>             
                </div> 
           </div>
           <img className={styles['fitness-blogs-dots']} src={require('../../../../../assets/images/DOTS.png')}/>
        </div>
    )

}
export default Blogs