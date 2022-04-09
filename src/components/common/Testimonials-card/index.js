import React from 'react'
import styles from './index.module.scss'
const TestimonialsCard=({ avaterImg,title,subtitle,name,role})=>{
    return(
        <div className={styles['testimonials-card']}>
          <div  className={styles['testimonials-card_content']}>
            <p className={styles['testimonials-card_content-title']}>{title}</p>
            <p className={styles['testimonials-card_content-subtitle']}>{subtitle}</p>
            <img  className={styles['testimonials-card_content-rating']} src={require('../../../assets/images/rating.png')}  alt='rating'/>
            <p className={styles['testimonials-card_content-name']}>{name}</p>
            <p className={styles['testimonials-card_content-role']}>{role}</p>
          </div>
          <div  className={styles['testimonials-card_img']}>
            <img src={require(`../../../${avaterImg}`)} alt='person image'/>
          </div>
        </div>
    )

}
export default TestimonialsCard