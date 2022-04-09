import React from 'react'
import Collpase from '../../../../common/Collpase'
import styles from './index.module.scss'
const HowItWorks=()=>{
    return(
        <div className={styles['fitness_how-it-works']}>
           <div className={styles['fitness_how-it-works-content']}>
               <p className={styles['fitness_how-it-works-content-title']}>How it Works?</p> 
               <p className={styles['fitness_how-it-works-content-subtitle']}>Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
               <div className={styles['fitness_how-it-works-content-btns']}>
                   <button className={styles['fitness_how-it-works-content-btns-account']}>Create Account </button>
                   <button className={styles['fitness_how-it-works-content-btns-support']}>Need Help ? </button>
               </div>

           </div>
           <div className={styles['fitness_how-it-works-collapse']}>
             <Collpase label='Create Account on Fitness.co' content=''/>
             <Collpase label='View Daily Task Tutorials' content='Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common.'/>
             <Collpase label='Practice on your own' 
             content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen  It has survived not only five , but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem '/>
           </div>
           <img   className={styles['fitness_how-it-works-dots']} src={require('../../../../../assets/images/DOTS2.png')}  alt='dots-2'/>
        </div>
    )

}
export default HowItWorks