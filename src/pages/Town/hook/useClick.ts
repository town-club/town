import { useEffect, useState } from "react";
import { RefObject } from "react";
import { useNavigate } from "react-router-dom";
import { useInnerPassStore, useDialogStore } from "@/store/store";
import ReactGA4 from "react-ga4"
export default function useClick(
  lottieBox: any,
  townRef: RefObject<HTMLDivElement>
) {
  const setDialog = useDialogStore((state) => state.setDialog);
  const navigate = useNavigate();
  const setIsInnerPass = useInnerPassStore((state) => state.setIsInnerPass);
  const [path, setPath] = useState("");
  //组件刷新完成进行此项，监听各个建筑的点击
  const callBack = (path: string) => {
    setPath(path);
    townRef.current.style.opacity = "0";
  };
  useEffect(() => {
    const buildings = [
      {
        team: "design",
        text: "哇，你发现了设计妙妙屋！太酷了！快看看妙妙屋里面都有什么东西吧~",
      },
      {
        team: "code",
        text: "欢迎来到研发实验室，这里是家园小镇的开发中心，快点击实验室器材进行探索吧！",
      },
      {
        team: "gov",
        text: "你发现了行政档案馆诶！快去看看执行官们是怎么守护家园的文化基因,让小镇气息历久弥新的。",
      },
      {
        team: "product",
        text: "这里是产品梦工厂，是创造idea的地方！快看看魔法师是怎么将创意转化为酷炫的产品吧！",
      },
      {
        team: "operate",
        text: "这里是运营实验室，是家园的智囊中心。快去看看各种奇思妙想是怎么迸发的吧！",
      },
      {
        team: "game",
        text: "这里是游戏电玩城，是家园世界开拓者和创新者汇聚的地方。快去看看新世界是怎么被创造的吧~",
      },
    ];

    buildings.forEach((item) => {
      document.getElementById(item.team).addEventListener("click", () => {
        // callBack(`/home/${item.team}`);
        callBack(`/home/${item.team}`);
      });
    });
    //信息页跳转
    document.getElementById("NCUHOME").addEventListener("click", () => {
      ReactGA4.event({
        category: "",
        action:"click NCUHOME"
      });
      setDialog(["NCUHOME是我们家园工作室的简称哦"])
    });
    //报名跳转页
    document.getElementById("join").addEventListener("click", () => {
      //切换到hr2023.ncuos.com
      ReactGA4.event({
        category: "Message",
        action:"Message with Door"
      });
      navigate("/info")
    });
  }, [lottieBox]);

  useEffect(() => {
    townRef.current.addEventListener("transitionend", () => {
      setIsInnerPass(true);
      navigate(path);
      return () => {
        townRef.current.removeEventListener("transitionend", () => {
          navigate(path);
        });
      };
    });
  }, [townRef, path]);
}
