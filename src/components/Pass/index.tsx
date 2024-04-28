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
        "NCUer你好，家园小镇正在对外开放中，欢迎你的到来！",
        "顶部有标识的建筑可以参观游玩  PS：在某些角落还藏着彩蛋喔~",
        "右下角的按钮设有报名通道,随时欢迎你加入我们",
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
