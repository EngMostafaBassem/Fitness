import React, { useState } from 'react'
import styles from './index.module.scss'
import { IoAddOutline } from "react-icons/io5";
import { IoRemoveOutline } from "react-icons/io5";
const Collpase=({label,content})=>{
    const [toggle,setToggle]=useState(false)
    const collapseStyle={
       height:'auto'
    }
    return(
        <div className={styles['collapse-wrapper']} style={toggle?collapseStyle:null}>
            <div className={styles['collapse-wrapper_title']}>
                <p  className={styles['collapse-wrapper_title-label']}>{label}</p>
                <span  className={styles['collapse-wrapper_title-icon']} onClick={()=>setToggle(toggle=>!toggle)}>
                    {toggle?<IoRemoveOutline size={25}/>:<IoAddOutline size={25}/>}           
                </span>        
            </div>
            <div className={styles['collapse-wrapper_content']} >
              {content}
            </div>
        </div>
    )

}
export default Collpase