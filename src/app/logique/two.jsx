
"use client"
import React, { useState } from 'react';
import styles from '@/app/style/center.module.css';
import Link from 'next/link';
import Mtg from '../data';

let mtg =<Mtg/>
export default function SelectNumber() {
    const [nombre, setNombre] = useState(1);

    const incrementCounter = () => {
        setNombre(nombre + 1);
    };
    const descrementCounter = () => {
        setNombre(nombre - 1);
    };
    const max = () => {
        if (nombre>=Object.keys(mtg).length){return true}
        else{return false}
    }
    const min = () => {
        if (nombre<=1){return true}
        else{return false}
    }
    let a=`/button-p/${nombre}`
    

    return (
        < div className={styles.container}>
            <h1 style={{color:"rgba(255, 255, 255, 0.849)"}}>{nombre}</h1><br/>
            <button onClick={incrementCounter} className={styles.b} disabled={max()}>+</button>
            <button onClick={descrementCounter} className={styles.b}disabled={min()}>-</button>
           <Link href ={a} > <button className={styles.b}>تأكيد</button></Link>
           <Link href ="/add" > <button className={styles.b}>add</button></Link>
        </ div>
        
    );
    
    }
 