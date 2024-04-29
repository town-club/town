import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import Modal from "@components/Modal/Module";
import InnerPass from "@components/InnerPass/InnerPass";
import { useInnerPassStore, useRatioStore } from "@/store/store";
import useShowPop from "@/hook/useShowPop";
import useShowDialog from "@/hook/useShowDialog";
import style from "./index.module.css";
import operateMovie from "@/assets/lottie/Every/operate.json";
import OperatePage2 from "@/assets/images/operate2.png";
import OperatePage3 from "@/assets/images/operate3.jpg";
import OperatePage4 from "@/assets/images/operate4.png";
import OperatePage5 from "@/assets/images/operate5.png";
import back from "@assets/svg/back.svg";


//ES6 way
const Operate = () => {
  const navigate = useNavigate();
  const setRatio = useRatioStore((state) => state.setRatio);
  const [openedNum, setOpenedNum] = useState<number>(0);
  const { isInnerPass } = useInnerPassStore((state) => state);
  //修改电脑端视口宽度
  useEffect(() => {
    setRatio(0.822);
  }, []);
  const closeModal = () => {
    setOpenedNum(0);
  };
  useShowPop(setOpenedNum, "operate", 5);
  useShowDialog("operate");
  const backTown = () => {
    navigate(-1);
  };
  return (
    <div className={style.page}>
      <div
        className="presenter"
        style={{
          width: window.innerWidth,
          maxWidth: window.innerHeight * 0.822,
        }}
      >
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
              animationData={operateMovie}
              className={style.map}
              style={{
                width: window.innerHeight * 0.822,
              }}
            />
          </div>
        </div>
        <Modal
          isOpen={openedNum === 1}
          onClose={closeModal}
          title="运营数据分析"
          type="ope"
        >
          <div className={style.modalOut}>
            <img src={OperatePage4} alt="operate" className={style.modalImg1} />
            <div className={style.modalText1}>
            运营岗位中很重要的一环是数据分析，也许比你想象的投简历门槛要低哦
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={openedNum === 2}
          onClose={closeModal}
          title="运营工作"
          type="ope"
        >
          <div className={style.modalOut}>
            <img
              src={OperatePage3}
              alt="operate"
              className={style.modalImg1}
              style={{
                width: "60%",
              }}
            />
            <div className={style.modalText1}>
            运营不只是发推文，查看用户流失、分析数据有时也是运营的工作哦
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={openedNum === 3}
          onClose={closeModal}
          title="运营平台"
          type="ope"
        >
          <div className={style.modalOut}>
            <img src={OperatePage2} alt="operate" className={style.modalImg1} />
            <div className={style.modalText1} style={{ textAlign: "center" }}>
            运营产品也是一个新型职位，要抓住信息差更有竞争力哦
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={openedNum === 4}
          onClose={closeModal}
          title="运营岗位"
          type="ope"
        >
          <div className={style.modalOut}>
            <img src={OperatePage5} alt="operate" className={style.modalImg1} />
            <div className={style.modalText1}>运营的入职门槛相对较低，但是提升空间很高哦</div>
          </div>
        </Modal>
      </div>
      <img className={style.back} src={back} onClick={backTown}></img>
      {isInnerPass &&
        (window.innerWidth < 600 ? (
          <InnerPass
            department="运营"
            detail={[
              "互联网世界的连接者",
              "宣发全靠运营跑，互联网职业的关键一环！",
            ][Math.floor(Math.random() * 2)]}
            time={5000}
            img="operate"
          ></InnerPass>
        ) : null)}
    </div>
  );
};

export default Operate;
