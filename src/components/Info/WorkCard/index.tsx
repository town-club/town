import React from "react";
import icon from "@assets/png/info/icon.png";
import style from "./index.module.css";
export default function index({
  link,
  title,
  text,
  styleBox,
}: {
  link: string;
  title: string;
  text: string;
  styleBox?: React.CSSProperties;
}) {
  return (
    <div className={style.x} style={styleBox}>
      <div className={style.titleX}>
        <h1>{title}组</h1>
        <a href={link}>{`点击进入${title}档案馆`}</a>
      </div>
      <p className={style.content}>{text}</p>
      <img className={style.icon} src={icon}></img>
    </div>
  );
}
