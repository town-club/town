import  { useEffect, useRef, useState } from "react";
import css from "./index.module.css";
import sign from "@assets/svg/surprise/sign.svg";
import back from "@assets/svg/surprise/back.png";
import description from "@assets/svg/surprise/description.svg";
import { useShowNoticeStore } from "@store/store";
export default function Index({
  text,
  img,
  title,
}: {
  text: string;
  img: string;
  title: string;
}) {
  const [opacity, setOpacity] = useState(0);
  const setShowNotice = useShowNoticeStore((state) => state.setShowNotice);
  const backgroundRef = useRef(null);
  const desRef = useRef(null);
  useEffect(() => {
    setOpacity(1);
  }, [backgroundRef]);
  const close = () => {
    setOpacity(0);
    backgroundRef.current.addEventListener("transitionend", () => {
      setShowNotice("DEFAULT");
    });
  };
  return (
    //蒙版
    <div
      className={css.box}
      ref={backgroundRef}
      style={{
        opacity: opacity,
      }}
    >
      <div className={css.x}>
        <img className={css.description} src={description} ref={desRef}></img>
        <div className={css.content}>
          <img className={css.img} src={img}></img>
          <div className={css.textAll}>{text}</div>
          <img className={css.sign} src={sign}></img>
          <img className={css.back} onClick={close} src={back}></img>
          <p className={css.title}>{title}</p>
        </div>
      </div>
    </div>
  );
}
