import 'bulma/css/bulma.min.css'
import React, {useState } from 'react'
import styles from '../../styles/Home.module.scss'
import { Field } from '../field/Field'
import User from '../user/User'

export const  About =()=>{
   

    
    return (
    <>
        <article className={styles.about}>
      <div className="message-header">
        <p>About</p>
      </div>
      <div className="message-body is-center"  >
    Hi!, Welcome to a new experience of editing documents for your office, school, etc.                    
    
    </div>
    </article>

     

    </>
    )
    }