import { useEffect, useState } from "react"
import css from "./index.module.css"
export default function index({
    MaxTime = 5000,
}:{
    MaxTime?:number
}) {
    const [isGo,setIsGo] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setIsGo(true)
        },MaxTime)
    },[])
  return (
    <div className={css.loadingX}>
        <div className={css.loading}>
            <div className={css.loadingMovie}>
                {/*一个loadingDot类 还有一个loadingDot1类*/}
                <div className={[css.loadingDot,css.loadingDot1].join(" ")}></div>
                <div className={[css.loadingDot,css.loadingDot2].join(" ")}></div>
                <div className={[css.loadingDot,css.loadingDot3].join(" ")}></div>
            </div>
            <p className={css.text}>首次加载可能有点慢，耐心等待一会哦</p>
            {
                isGo?<p className={css.text}>网络太差？<a href="">你好呀</a></p>:null
            }
            </div>
        
    </div>
  )
}
