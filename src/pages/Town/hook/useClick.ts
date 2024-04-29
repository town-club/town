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
        text: "设计岗位的创意和想法不可少，看看有什么适合你的方向吧！",
      },
      {
        team: "code",
        text: "高薪岗位首选研发，来看看有哪些细分领域等你探索！",
      },
      {
        team: "gov",
        text: "什么企业都离不开行政！行政岗位入职门槛低，提升空间大，是许多求职人员的优秀选择！",
      },
      {
        team: "product",
        text: "爆火的产品经理一职，背后有什么求职诀窍呢？",
      },
      {
        team: "operate",
        text: "运营岗位掌控着业务流程和数据分析，贯穿公司的各个环节，是推动企业发展的关键力量！",
      },
      {
        team: "game",
        text: "想在酷酷的游戏行业大展身手？这里有你需要的独家攻略！",
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
