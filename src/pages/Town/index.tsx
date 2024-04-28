import { useRef, useEffect, RefObject } from "react";
import css from "./index.module.css";
import town from "@assets/lottie/townLottie/town.json";
import useShowAnimation from "@/hook/useShowAnimation";
import useClick from "./hook/useClick";
import useActive from "./hook/useActive";
import useScroll from "./hook/useScroll"; 
//hook
import Pass from "@components/Pass";
import right from "@assets/svg/right.svg"
import { usePassStore, useDialogStore, useRatioStore } from "@/store/store";
//宽2060 高2211
const style = {
  width: window.outerHeight * 0.93,
  transform: "scale(1)",
  transition: "all 3s ease-in-out",
  margin: "auto",
};
export default function Town() {
  const isPass = usePassStore((state) => state.isPass);
  const setDialog = useDialogStore((state) => state.setDialog);
  const townRef = useRef(null);
  const rightRef = useRef(null);
  const lottieScrollRef = useRef(null)
  const setRatio = useRatioStore((state) => state.setRatio);

  const lottieRefBox: RefObject<any> = useRef(null);
  //useShowBox的监听，需要用的时候再激活
  //useShowBox(state);
  useActive(lottieRefBox);
  //向右的箭头的指向
  useScroll(lottieScrollRef,rightRef,150,window.innerWidth > 600)

  //lottie动画配置
  useShowAnimation({
    data: town,
    ref: lottieRefBox,
    type: "svg",
    name: "town",
    autoplay: window.innerWidth > 600,
  });
  //跳转的clcik监听
  useClick(lottieRefBox, townRef);
  //重置电脑端视口宽度
  useEffect(() => {
    setRatio(0.93);
  }, []);

  //初始偏向中间
  useEffect(() => {
    setTimeout(() => {
      //设置元素初始滚动位置
      lottieRefBox.current.scrollTo(150, 0);
    }, 1000);
  }, [lottieRefBox]);

  //电脑端取消动画，直接适配
  useEffect(() => {
    const playTown = () => {
      setDialog([
        "你好NCUer，我是小家园，欢迎你来到家园小镇！",
        "点击小镇中的建筑和物品，可能会有惊喜出现！PS：在某些角落还藏着彩蛋喔~",
        "点击右侧按钮查看家园详细信息哦~",
        "轮到你探索小镇啦！冲鸭~ 留意小镇中的惊喜彩蛋呦！",
      ]);
      return null;
    };
    if (window.innerWidth > 600) {
      playTown();
    }
  }, [lottieRefBox]);

  return (
    <div className={css.x} ref={townRef}>
      <div className={css.lottieX} ref={lottieScrollRef}>
        <div
          style={style}
          ref={lottieRefBox}
          className={css.lottie}
          id="lottie-code"
        ></div>
      </div>
      <img 
      ref={rightRef}
      className={css.rightArrow}
      src={right}>
      </img>
      {isPass ? (
        window.outerWidth < 600 ? (
          <Pass
            department="家园"
            detail={
              [
                "点击桌面上的物品有惊喜喔！",
                "欢迎来到求职小镇，无数求职迷茫人的家园",
                "地图上中藏着不少彩蛋呢！",
                "这里有求职秘诀哦，快来领取吧！"
              ][Math.floor(Math.random() * 4)]
            }
            time={5000}
          ></Pass>
        ) : null
      ) : null}
    </div>
  );
}
