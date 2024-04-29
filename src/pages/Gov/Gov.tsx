import { useEffect, useState } from 'react'
import Lottie from "lottie-react"

import Modal from '@components/Modal/Module'
import InnerPass from '@components/InnerPass/InnerPass'
import { useInnerPassStore, useRatioStore } from '@/store/store'
import style from './index.module.css'
import useShowPop from '@/hook/useShowPop'
import useShowDialog from '@/hook/useShowDialog'
import govMovie from "@/assets/lottie/Every/gov.json"
import back from "@assets/svg/back.svg"

import GovPage1 from '@/assets/images/gov1.png'
import GovPage2 from '@/assets/images/gov2.png'
import GovPage3 from '@/assets/images/gov3.png'
import GovPage4 from '@/assets/images/gov4.png'
import GovPage5 from '@/assets/images/gov5.png'

import { useNavigate } from 'react-router-dom'

//ES6 way
const Dev = () => {
  const navigate = useNavigate()
  const setRatio = useRatioStore((state) => state.setRatio)
  const [openedNum, setOpenedNum] = useState<number>(0);
  const { isInnerPass} = useInnerPassStore((state) => state)
  //修改电脑端视口宽度
  useEffect(() => {
    setRatio(0.82)
  }, [])
  const closeModal = () => {
    setOpenedNum(0)
  }
  useShowPop(setOpenedNum,"gov",5)
  useShowDialog("gov")
  const backTown = () =>{
    navigate(-1)
  }
  return (
    <div className={style.page}>
      <div
        className="presenter"
        style={{
          width: window.innerWidth,
          maxWidth: window.innerHeight * 0.82,
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
              animationData={govMovie}
              className={style.map}
              style={{
                width: window.innerHeight * 0.82,
              }}
            />
          </div>
        </div>
        <Modal
          isOpen={openedNum === 1}
          onClose={closeModal}
          title="技能学习"
          type="gov">
          <div className={style.modalOut}>
            <img src={GovPage2} alt="gov" className={style.modalImg1} />
            <div className={style.modalText1}>
            行政往往需要有多项技能，是互联网公司的连结关键
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={openedNum === 2}
          onClose={closeModal}
          title="活动协调"
          type="gov">
          <div className={style.modalOut}>
            <img src={GovPage3} alt="gov" className={style.modalImg1} />
            <div className={style.modalText1}>
            短时间内组织会议、协调活动或处理突发事件是互联网行政的特色
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={openedNum === 3}
          onClose={closeModal}
          title="团建安排"
          type="gov">
          <div className={style.modalOut}>
            <img src={GovPage4} alt="gov" className={style.modalImg1} />
            <div className={style.modalText1}>
            互联网大厂通常重视员工体验和企业文化，行政需要妥当安排事务
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={openedNum === 4}
          onClose={closeModal}
          title="行政"
          type="gov">
          <div className={style.modalOut}>
            <img src={GovPage5} alt="gov" className={style.modalImg1} />
            <div className={style.modalText1}>
            行政需要熟悉各种数字工具和软件，项目管理软件，以及内部通信平台等
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={openedNum === 5}
          onClose={closeModal}
          title="行政组"
          type="gov">
          <div className={style.modalOut}>
            <img
              src={GovPage1}
              alt="gov"
              className={style.modalImg1}
              style={{
                width: '60%',
              }}
            />
            <div className={style.modalText1}>
            基于互联网将组织变得扁平化，行政需要掌握跨职能团队沟通能力
            </div>
          </div>
        </Modal>
      </div>
      <img className={style.back} src={back} onClick={backTown}></img>
      {isInnerPass &&
        (window.innerWidth < 600 ? (
          <InnerPass
            department="行政"
            detail={[
              "连接各个部门的关键！",
              "管理办公资源、协调会议和活动",
              "行政求职范围非常广阔！"
            ][Math.floor(Math.random() * 2)]}
            time={5000}
            img="gov"></InnerPass>
        ) : null)}
     
    </div>
  )
}

export default Dev
