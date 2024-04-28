import { useEffect, useRef, useState } from "react";
import css from "./index.module.css";
import { useNavigate } from "react-router-dom";
import ginshen from "@assets/png/ginshen/ginshen.png";
export default function index() {
  const boxRef = useRef(null);
  const navigate = useNavigate()
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 1000);
  }, [boxRef]);
  useEffect(() => {
    return () => {
      const music: any | null = document.getElementById("ginshen-music");
      if (music) {
        music.pause();
        music.currentTime = 0;
      }
    };
  }, []);
  return (
    <div className={css.x} style={{ opacity: opacity }} ref={boxRef}>
      <img className={css.img} src={ginshen}></img>
      <button 
      className={css.button}
      onClick={()=>{
        //history -1
        navigate(-1)
      }}
      >返回</button>
    </div>
  );
}
