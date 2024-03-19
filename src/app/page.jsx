
import Image from "next/image";
import styles from "./style/page.module.css";
import Link from "next/link";
import center from './style/center.module.css'




export default function Home() {
  return (<div className={center.container}>
    <h1 style={{color:"rgba(255, 255, 255, 0.849)"}}>slem alaykom</h1>
    <br/>
    <Link href="/button-p" ><button className={center.b} >إبدإ التخمين</button></Link>
</div>  );
}
