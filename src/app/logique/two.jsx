
"use client"
import React, { useState } from 'react';
import styles from '@/app/style/center.module.css';
import Link from 'next/link';


export default function SelectNumber() {
    const [nombre, setNombre] = useState(1);

    const incrementCounter = () => {
        setNombre(nombre + 1);
    };
    const descrementCounter = () => {
        setNombre(nombre - 1);
    };
    const max = () => {
        if (nombre>=3){return true}
        else{return false}
    }
    const min = () => {
        if (nombre<=1){return true}
        else{return false}
    }
    let a;
    if (nombre===1){a="/button-p/nextbyun"}
    else if (nombre===2){a="/button-p/nextbydeux"}
    else{a="/button-p/nextbytrois"}

    return (
        < div className={styles.container}>
            <h1 style={{color:"rgba(255, 255, 255, 0.849)"}}>{nombre}</h1><br/>
            <button onClick={incrementCounter} className={styles.b} disabled={max()}>+</button>
            <button onClick={descrementCounter} className={styles.b}disabled={min()}>-</button>
           <Link href ={a} > <button className={styles.b}>تأكيد</button></Link>
        </ div>
        
    );
    
    }
 