import { useRef, useEffect } from "react";
import css from "./index.module.css";
import useShowAnimation from "@/hook/useShowAnimation";
import pro from "@assets/png/pro.png";
import game from "@assets/png/game.png";
import gov from "@assets/png/gov.png";
import operate from "@assets/png/operate.png";
import dev from "@assets/png/dev.png";
import design from "@assets/png/design.png";
import building from "@assets/lottie/pass/proPass.json";
import ncuer from "@assets/svg/ncuer/tip-homer.svg";
import { useInnerPassStore, useDialogStore } from "@store/store";


const imgList: {
  [key: string]: any;
} = {
  pro: {
    img: pro,
    style: {
      background:
        "linear-gradient(180deg, #FFE8FD 0%, #E7D6FE 39.96%, #D0C5FF 100%)",
    },
    bottomStyle: {
      background: "#AB9FEB",
    },
  },
  game: {
    img: game,
    style: {
      background:
        "linear-gradient(180deg, #CDFFF6 0%, #C7F5D8 40.48%, #B1F5B3 100%)",
    },
    bottomStyle: {
      background: "#5AA896",
    },
  },
  dev: {
    img: dev,
    style: {
      background: "linear-gradient(180deg, #FDE4FF 0%, #F4BDEA 100%)",
    },
    bottomStyle: {
      background: "#DDA5FF",
    },
  },
  design: {
    img: design,
    style: {
      background: "linear-gradient(180deg, #FADDBB 0%, #FFE391 100%)",
    },
    bottomStyle: {
      background: "#FFC15C",
    },
  },
  operate: {
    img: operate,
    style: {
      background: "linear-gradient(180deg, #FADDBB 0%, #FFBF91 100%)",
    },
    bottomStyle: {
      background: "#FFB28C",
    },
  },
  gov: {
    img: gov,
    style: {
      background: "linear-gradient(180deg, #CDF0F0 0%, #BBD0FA 100%)",
    },
    bottomStyle: {
      background: "#7CA9DE",
    },
  },
};
const style = {
  width: window.innerWidth,
  height: window.innerWidth * 1.5,
};
export default function InnerPass({
  department,
  detail,
  time,
  img,
}: {
  department: string;
  detail: string;
  time: number;
  img: "pro" | "game" | "gov" | "operate" | "dev" | "design";
}) {
  const setIsInnerPass = useInnerPassStore((state) => state.setIsInnerPass);
  const lottieRef: any = useRef(null);
  const boxRef = useRef(null);
  const ani: any = useShowAnimation({
    data: building,
    ref: lottieRef,
    type: "svg",
    name: "InnerPass",
  });
  useEffect(() => {
    const imgElement = document.querySelector("#passImg image");
    if (imgElement) {
      imgElement.setAttribute("href", imgList[img].img);
    }
  }, [ani]);
  useEffect(() => {
    //刚开始进行监听
    if (time == 0) {
      setIsInnerPass(false);
    } else {
      setTimeout(() => {
        boxRef.current.style.opacity = "0";
      }, time);
    }
    boxRef.current.addEventListener("transitionend", () => {
      setIsInnerPass(false);
    });
  }, [time, boxRef]);
  return (
    <div className={css.x} ref={boxRef} style={imgList[img].style}>
      <div className={css.lottieX}>
        <div className={css.lottie} ref={lottieRef} style={style} />
      </div>
      <div className={css.tips} style={imgList[img].bottomStyle}>
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
