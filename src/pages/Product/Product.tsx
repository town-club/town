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
            title="产品经理"
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
              产品经理非常看重逻辑思维能力和创新思考批判能力，还有不要忘记流程图、泳道图等必备能力
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
              常用的软件有思维导图、Axure、Figma，多尝试才能胜任此岗位哦
              </div>
            </div>
          </Modal>
          <Modal
            isOpen={openedNum === 3}
            onClose={closeModal}
            title="产品经理"
            type="pro"
          >
            <div className={style.modalOut}>
              <img src={ProPage3} alt="pro" className={style.modalImg1} />
              <div className={style.modalText1}>
              产品经理需要非常强的沟通能力和写作能力
              </div>
            </div>
          </Modal>
          <Modal
            isOpen={openedNum === 4}
            onClose={closeModal}
            title="产品岗位"
            type="pro"
          >
            <div className={style.modalOut}>
              <img src={ProPage4} alt="pro" className={style.modalImg1} />
              <div className={style.modalText1}>
              产品岗位是近些年兴起的、入职门槛相对较低的行业
              </div>
            </div>
          </Modal>
          <Modal
            isOpen={openedNum === 5}
            onClose={closeModal}
            title="产品经理"
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
              产品经理负责统筹项目的整体流程以及确保产品从构思到发布的每个阶段都符合客户需求和商业目标
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
