import { useEffect, useState } from 'react'
import Lottie from "lottie-react"
import DesignPage1 from '@/assets/images/design1.png'
import DesignPage2 from '@/assets/images/design2.png'
import DesignPage3 from '@/assets/images/design3.png'
import DesignPage4 from '@/assets/images/design4.png'
import designMovie from "@assets/lottie/Every/design.json"
import Modal from '@components/Modal/Module'
import InnerPass from '@components/InnerPass/InnerPass'
import { useInnerPassStore, useRatioStore } from '@/store/store'
import useShowPop from '@/hook/useShowPop'
import style from './index.module.css'
import useShowDialog from '@/hook/useShowDialog'
import back from "@assets/svg/back.svg"
import { useNavigate } from 'react-router-dom'
//ES6 way
const Dev = () => {
  const navigate = useNavigate()
  const setRatio = useRatioStore((state) => state.setRatio)
  const [openedNum, setOpenedNum] = useState<number>(0);
  const { isInnerPass } = useInnerPassStore((state) => state)
  //修改电脑端视口宽度
  useEffect(() => {
    setRatio(0.823)
  }, [])
  const closeModal = () => {
    setOpenedNum(0)
  }
  //事件监听钩子
  useShowPop(setOpenedNum,"design",4)
  //设置dialog钩子
  useShowDialog("design")
  const backTown = () =>{
    navigate(-1)
  }

  return (
    <div className={style.page}>
      <div
        className={style.container}
        style={{
          width: window.innerWidth,
          maxWidth: window.innerHeight * 0.823,
        }}>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div className={style.outter}>
          <Lottie
              animationData={designMovie}
              className={style.map}
              style={{
                width: window.innerHeight * 0.823,
              }}
            />
          </div>
        </div>
        <Modal
          isOpen={openedNum === 1}
          onClose={closeModal}
          title="小家园"
          type="des">
          <div className={style.modalOut}>
            <img src={DesignPage1} alt="design" className={style.modalImg1} />
            <div className={style.modalText1}>
            在设计的日常工作中，设计规范是非常重要的一环
            </div>
          </div>
        </Modal>
        <Modal isOpen={openedNum === 2} 
        onClose={closeModal} title="海报" type="des">
          <div className={style.modalOut}>
            <img src={DesignPage2} alt="design" className={style.modalImg1} />
            <div
              className={style.modalText1}
              style={{
                textAlign: 'center',
              }}>
              设计可以分为平面设计、UI、UX、交互设计、视觉设计等多个岗位
            </div>
          </div>
        </Modal>
        <Modal isOpen={openedNum === 3}
        onClose={closeModal} 
        title="海报" type="des"
        >
          <div className={style.modalOut}>
            <img src={DesignPage3} alt="design" className={style.modalImg1} />
            <div className={style.modalText1}>
            互联网行业的设计更侧重于页面设计，根据需求来完成设计
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={openedNum === 4}
          onClose={closeModal}
          title="创作合集"
          type="des">
          <div className={style.modalOut}>
            <img src={DesignPage4} alt="design" className={style.modalImg1} />
            <div className={style.modalText1}>设计需要长时间的积淀，多多阅读优秀作品是非常重要的</div>
          </div>
        </Modal>
      </div>
      <img className={style.back} src={back} onClick={backTown}></img>

      {isInnerPass &&
        (window.innerWidth < 600 ? (
          <InnerPass
            department="设计"
            detail={[
              "平面设计、用户体验设计、动画、插画职位任你挑选！",
              "每个设计职位都为你开放",
              "拥有独特的审美眼光和灵感迸发的才华"
            ][Math.floor(Math.random() * 3)]}
            time={5000}
            img="design"></InnerPass>
        ) : null)}
    </div>
  )
}

export default Dev
