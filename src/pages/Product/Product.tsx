import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

import Modal from "@components/Modal/Module";
import InnerPass from "@components/InnerPass/InnerPass";
import { useInnerPassStore, useRatioStore } from "@/store/store";
import useShowPop from "@/hook/useShowPop";
import useShowDialog from "@/hook/useShowDialog";

import style from "./index.module.css";

import productMovie from "@assets/lottie/Every/product.json";
import ProPage1 from "@/assets/images/pro1.png";
import ProPage2 from "@/assets/images/pro2.png";
import ProPage3 from "@/assets/images/pro3.png";
import ProPage4 from "@/assets/images/pro4.png";
import ProPage5 from "@/assets/images/pro5.png";
import back from "@assets/svg/back.svg";


const Pro = () => {
  const navigate = useNavigate();
  const setRatio = useRatioStore((state) => state.setRatio);
  const [openedNum, setOpenedNum] = useState<number>(0);
  const { isInnerPass, setIsInnerPass } = useInnerPassStore((state) => state);
  //修改电脑端视口宽度
  useEffect(() => {
    setRatio(0.63);
  }, []);
  const closeModal = () => {
    setOpenedNum(0);
  };
  useShowPop(setOpenedNum, "product", 5);
  useShowDialog("product");
  const backTown = () => {
    navigate(-1);
  };
  return (
    <div
      className={style.page}
      style={{
        width: window.innerWidth,
        maxWidth: window.innerHeight * 0.63,
      }}
    >
      <div className="presenter">
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={style.outter}>
            <Lottie
              animationData={productMovie}
              className={style.map}
              style={{
                width: window.innerHeight * 0.63,
              }}
            />
          </div>
          <Modal
            isOpen={openedNum === 1}
            onClose={closeModal}
            title="家园小镇"
            type="pro"
          >
            <div className={style.modalOut}>
              <img
                src={ProPage1}
                alt="pro"
                className={style.modalImg1}
                style={{
                  width: "60%",
                }}
              />
              <div className={style.modalText1}>
                你所在的小镇，是家园产品一步步构思出来的哦！
              </div>
            </div>
          </Modal>
          <Modal
            isOpen={openedNum === 2}
            onClose={closeModal}
            title="创作工具"
            type="pro"
          >
            <div className={style.modalOut}>
              <img src={ProPage2} alt="pro" className={style.modalImg1} />
              <div className={style.modalText1}>
                Figma是每个产品人的必备技能，产品组最常用的工具之一
              </div>
            </div>
          </Modal>
          <Modal
            isOpen={openedNum === 3}
            onClose={closeModal}
            title="“决战绿茵”"
            type="pro"
          >
            <div className={style.modalOut}>
              <img src={ProPage3} alt="pro" className={style.modalImg1} />
              <div className={style.modalText1}>
                世界杯期间家园活动产品，家园产品经理为南大人打造了自己的竞猜平台。
              </div>
            </div>
          </Modal>
          <Modal
            isOpen={openedNum === 4}
            onClose={closeModal}
            title="Hackweek大赛"
            type="pro"
          >
            <div className={style.modalOut}>
              <img src={ProPage4} alt="pro" className={style.modalImg1} />
              <div className={style.modalText1}>
                产品经理和其所在的项目组用七天将想法变成现实
              </div>
            </div>
          </Modal>
          <Modal
            isOpen={openedNum === 5}
            onClose={closeModal}
            title="漫游指北"
            type="pro"
          >
            <div className={style.modalOut}>
              <img
                src={ProPage5}
                alt="pro"
                className={style.modalImg1}
                style={{ width: "28%" }}
              />
              <div className={style.modalText1}>
                漫游指北是产品组构想，家园自主开发的一款解答校园生活问题的产品喔~可以到南大家园-微应用中体验
              </div>
            </div>
          </Modal>
        </div>
      </div>
      <img className={style.back} src={back} onClick={backTown}></img>
      {isInnerPass &&
        (window.innerWidth < 600 ? (
          <InnerPass
            department="产品"
            detail="产品是家园灵感的播种者"
            time={5000}
            img="pro"
          ></InnerPass>
        ) : null)}
    </div>
  );
};

export default Pro;
