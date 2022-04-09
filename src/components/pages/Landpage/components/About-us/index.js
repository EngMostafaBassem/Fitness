import React from 'react'
import styles from './index.module.scss'
const AboutUs=()=>{
    return(
        <div className={styles['fitness_about']} id='about-us'>
           <p  className={styles['fitness_about-title']}>About Us</p>
           <p  className={styles['fitness_about-subtitle']}>Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
           <div className={styles['fitness_about-wtd']}>
              <div className={styles['fitness_about-wtd-img1']}>
                 <div className={styles['fitness_about-wtd-img1-border']}></div> 
                 <img  src={require('../../../../../assets/images/fit-girl1.png')} alt='fit-girl1'/>
              </div>
               <div  className={styles['fitness_about-wtd-content1']}>
                 <p className={styles['fitness_about-wtd-content1-title']}>What to do?</p>
                 <p className={styles['fitness_about-wtd-content1-subtitle']}>Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
               </div>
               <div className={styles['fitness_about-wtd-img2']}>
                   <div className={styles['fitness_about-wtd-img2-border']}></div> 
                   <img  src={require('../../../../../assets/images/fit-girl2.png')} alt='fit-girl1'/>
               </div>
               <div className={styles['fitness_about-wtd-content2']}>
                 <p className={styles['fitness_about-wtd-content2-text']}>Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn ample eat off doors money. Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
                 <p className={styles['fitness_about-wtd-content2-text']}>And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.</p>
                 <p className={styles['fitness_about-wtd-content2-text']}>Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment settling outweigh. Worse linen an of civil jokes leave offer. Parties all clothes removal cheered calling prudent her. And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help. Latter person am secure of estate genius at.</p>
               </div>
           </div>
        </div>
    )

}
export default AboutUs