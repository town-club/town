import React, { useRef, useState, useEffect } from "react";
import css from "./index.module.css";
import useShowAnimation from "@/hook/useShowAnimation";
import pass from "@assets/lottie/pass/passImg.json";
import ncuer from "@assets/svg/ncuer/tip-homer.svg";
import { usePassStore, useShowNoticeStore, useDialogStore } from "@store/store";
// 临时判断不需要这个作为图片

import Lottie from "lottie-web";
const style = {
  width: window.innerWidth,
  height: window.innerWidth * 1.5,
};
export default function Pass({
  department,
  detail,
  time,
}: {
  department: string;
  detail: string;
  time: number;
}) {
  const setIsPass = usePassStore((state) => state.setIsPass);
  const lottieRef: any = useRef(null);
  const boxRef = useRef(null);
  const setDialog = useDialogStore((state) => state.setDialog);
  //防止再次修改
  // const setShowNotice = useShowNoticeStore((state) => state.setShowNotice)
  useShowAnimation({
    data: pass,
    ref: lottieRef,
    type: "canvas",
    name: "pass",
  });

  useEffect(() => {
    //刚开始进行监听
    if (time == 0) {
      setIsPass(false);
    } else {
      setTimeout(() => {
        boxRef.current.style.opacity = "0";
      }, time);
    }
  }, [time, boxRef]);
  useEffect(() => {
    boxRef.current.addEventListener("transitionend", () => {
      console.log("finished");
      setDialog([
        "欢迎来到互联网求职小镇，这里有最接近真实职场的职业信息和发展路径，一起来探索互联网行业吧！！",
        "小镇有六个互联网核心领域，四处点点会有惊喜哦",
        "每个部门都有着自己的特色，快来看看哪个职位更适合你吧！",
      ]);
      Lottie.play("town");
      setIsPass(false);
    });
  }, [boxRef]);
  return (
    <div className={css.x} ref={boxRef}>
      <div className={css.lottieX}>
        <div className={css.lottie} ref={lottieRef} style={style} />
        {/* <img src={logo} alt="logo" className={css.lottie} style={style}></img> */}
      </div>
      <div className={css.tips}>
        <div className={css.wrap}>
          <img src={ncuer} alt="小家园" className={css.ncuer}></img>
          <p className={css.intro}>
            {department} : {detail}
          </p>
        </div>
      </div>
    </div>
  );
}
