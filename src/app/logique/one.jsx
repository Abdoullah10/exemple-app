"use client";
import mtg from '@/app/data';
import styles from '@/app/style/center.module.css';
import Link from 'next/link';
import { object } from 'prop-types';
import { useEffect, useState } from 'react';

export default function One(props){
const [number, setNombre]=useState(null)
const [t, setT]=useState(0)
const n= ({target})=>{setNombre(target.value)}
let clés=Object.keys(mtg)
let b=mtg[clés[props.n-1]];

function stop(){
    setT(t+1)
}
let control=false;
if (t>=1){
    control=true
}
function r(){

if (t>=1 && b===Number(number)){
    return (<h1 className={styles.b} style={{color:"rgba(255, 255, 255, 0.849)"}}>احسنت <Link href ="/button-p">منتجااخر</Link > احسنت جرب </h1>)}
else if (t>=1 && b!==Number(number)){
    return (<h1 className={styles.b} style={{color:"rgba(255, 255, 255, 0.849)"}}> توقع خاطئ اعد المحاولة بتحديث الصفحة</h1>)}}


return (<div className={styles.container}>
<label for="un" style={{color:"rgba(255, 255, 255, 0.849)"}} className={styles.b}>{clés[props.n-1]}خمن سعر ال</label>
<br/>
<input id="un" type="number" onChange={n} disabled={control} className={styles.b}/>
<h1 style={{color:"rgba(255, 255, 255, 0.849)"}} className={styles.b}>السعر بين 3-500</h1>
<button onClick={stop} className={styles.b}>تأكيد</button>
<br/>
<> {r()}</>

          </div>)
}
