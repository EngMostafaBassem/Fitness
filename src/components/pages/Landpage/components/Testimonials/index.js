import React from 'react'
import styles from './index.module.scss'
import TestimonialsCard from '../../../../common/Testimonials-card';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const  Testimonials=()=>{
    return(
        <div className={styles['fitness_testimonials']} id='testimonials'>
            <p  className={styles['fitness_testimonials-title']}>What Customes Say</p>
            <p className={styles['fitness_testimonials-subtitle']}>Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>     
               <AwesomeSlider className={styles['slider']}>
                   <div className={styles['fitness_testimonials-slideshow']}>
                      <TestimonialsCard 
                        avaterImg={'assets/images/Testimonials1.png'}
                        title='Great Service!!'
                        subtitle='“On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”'
                        name='Dragos Gontari'
                        role='Mareting Manager'
                        />

                   </div>   

                    <div className={styles['fitness_testimonials-slideshow']}>
                      <TestimonialsCard 
                        avaterImg={'assets/images/Testimonials1.png'}
                        title='Great Service!!'
                        subtitle='“On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”'
                        name='Dragos Gontari'
                        role='Mareting Manager'
                        />

                   </div>       
               </AwesomeSlider>
           
        </div>
    )

}
export default Testimonials