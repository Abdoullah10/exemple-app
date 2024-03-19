

import center from './style/center.module.css'
export default function racine({children}) {
  return (<html>
    <body className={center.background} style={{backgroundImage: "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHU1aHRtdGh5MWt2cjlhZGVpeXBsemMzMzhhc292NGFkZXE1NXBhNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BHNfhgU63qrks/giphy.gif')" , backgroundSize: "cover" }} >{children}</body>
  </html>)
}
