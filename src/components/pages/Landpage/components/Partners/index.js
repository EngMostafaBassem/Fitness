import React from 'react'
import styles from './index.module.scss'
const Partners=()=>{
    return(
        <div className={styles['fitness_partners']}>
         <div className={styles['fitness_partners-content']}>
            <p className={styles['fitness_partners-content-title']}>Our Partners</p>
            <p  className={styles['fitness_partners-content-subtitle']} >Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
         </div>
         <img  className={styles['fitness_partners-img']} src={require('../../../../../assets/images/partners.png')} alt='partners images'/>
         <img  className={styles['fitness_partners-dots']} src={require('../../../../../assets/images/DOTS.png')} alt='partners images'/>
        </div>
    )

}
export default Partners