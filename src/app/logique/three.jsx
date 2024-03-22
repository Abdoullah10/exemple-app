"use client";

import styles from '@/app/style/center.module.css';
import { useState } from 'react';



export  default function Three() {
  
  
  const [tt,setTt]=useState({})
  const [name, setName]=useState(null)
  const [prix, setPrix]=useState(null)
  const n= ({target}) =>  {
        setName(target.value)
  }
  const p= ({target}) =>  {
    setPrix(target.value)
  }
  const control= () =>  { if(name && prix){
    
    setTt({ [name]: prix })  
  }
   
  }
  
    return (
       
    <div className={styles.container}>
<label htmlFor="index" style={{color:"rgba(255, 255, 255, 0.849)"}} className={styles.b}>add name </label>
<input id="index" type="text"  className={styles.b} onChange={n}/>
    <br/>
<label htmlFor="index1" style={{color:"rgba(255, 255, 255, 0.849)"}} className={styles.b} >add prix </label>
<input id="index1" type="number"  className={styles.b} onChange={p}/>
    <br/><br/>
<button onClick={control} className={styles.b}> yes</button>
    
    
</div>
  )
}

