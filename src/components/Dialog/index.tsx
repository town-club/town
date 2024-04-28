//对话窗口
//推荐做两个，一个设置一定时间滚蛋，另一个设置需要点击下一步
import css from "./index.module.css";
import { useEffect, useRef, useMemo, useState } from "react";
import dialog from "@assets/lottie/Dialog/dialog.json";
import useShowAnimation from "@/hook/useShowAnimation";
import anime from "animejs";
import { ncuerDialog } from "@/Constant/DialogData";
import { useDialogStore } from "@/store/store";
export default function Dialog({
  text,
  img = [],
}: {
  text: string[];
  img?: string[];
}) {
  const [check, setCheck] = useState(0);
  //开始的时候不需要防抖
  const [pre, setPre] = useState(0);
  const setDialog = useDialogStore((state) => state.setDialog);
  const clearDialog = useDialogStore((state) => state.clearDialog);
  const value = useMemo(() => {
    return text[check];
  }, [check, text]);

  const showImg = useMemo(() => {
    try {
      return img[check];
    } catch (e) {
      return "";
    }
  }, [check, img]);

  const avatar = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const dialogText = useRef<HTMLDivElement>(null);

  //设置节流,使用闭包保留函数状态
  const showWithThrottle = (func, delay) => {
    //使用时间戳设置节流

    if (Date.now() - pre > delay) {
      func();
      setPre(Date.now());
    }
  };
  const showMovie = () => {
    dialogText.current.style.opacity = "1";
    anime({
      targets: dialogText.current,
      scale: [0, 1],
      duration: 1000,
      //左下角
      transformOrigin: "5% 100%",
    });
  };

  //配置文件出入设置关闭时间m,设置防抖
  useEffect(() => {
    let dialogTime = null;
    if (text.length == 1) {
      //如果只有一个，展示一段时间结束
      dialogTime = setTimeout(() => {
        closeMovie();
      }, 3000);
    }
    return () => {
      if (dialogTime) {
        clearTimeout(dialogTime);
      }
    };
  }, [text]);

  const closeMovie = () => {
    const ani = anime({
      targets: dialogText.current,
      scale: [1, 0],
      duration: 1000,
      //左下角
      transformOrigin: "20% 100%",
    });
    ani.finished.then(() => {
      clearDialog();
    });
  };

  useShowAnimation({
    ref: avatar,
    data: dialog,
    type: "canvas",
    loop: true,
    autoplay: true,
    name: "dialog",
  });
  //监听文字传入
  useEffect(() => {
    if (text.length >= 1) {
      // closeMovie()
      setCheck(0);
      showWithThrottle(showMovie, 4000);
    }
  }, [text, img]);

  //监听文字传入，执行播放动画
  useEffect(() => {
    if (text.length >= 1) {
      setCheck(0);
      console.log(pre, Date.now());
      showWithThrottle(showMovie, 4000);
    }
    //方便初始化，目测逻辑需要修改，暂定
    if (text[0] == "欢迎来到小家园") {
      showMovie();
    }
  }, [text, img]);

  //场景点击事件监听
  useEffect(() => {
    avatar.current.addEventListener("click", () => {
      const dialog =
        ncuerDialog[Math.floor(Math.random() * ncuerDialog.length)];
      setDialog([dialog]);
    });
  }, []);
  return (
    <div className={css.x} ref={box}>
      <div className={css.dialogX} ref={dialogText}>
        {showImg == "" ? null : <img className={css.img} src={showImg}></img>}
        <p>{value}</p>
        <div className={css.buttonX}>
          {text.length <= 1 ? null : check == text.length - 1 ? (
            <button className={css.button} onClick={closeMovie}>
              结束
            </button>
          ) : (
            <button
              onClick={() => {
                setCheck(check + 1);
              }}
              className={css.button}
            >
              下一步
            </button>
          )}
        </div>
      </div>
      <div className={css.dialogImgX}>
        <div className={css.dialogLottie} ref={avatar}></div>
      </div>
    </div>
  );
}
