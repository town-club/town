import React from 'react'
import style from "./index.module.css"
export default function EnvCard({
    img,
    title,
    value
}:{
    img:string,
    title:string,
    value:string
}) {
  return (
    <div className={style.x}>
        <img className={style.img} src={img} alt="图片"></img>
        <h1 className={style.title}>
            {title}
        </h1>
        <p className={style.value}>
            {value}
        </p>
    </div>
  )
}
