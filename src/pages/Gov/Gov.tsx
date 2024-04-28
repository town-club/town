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
          title="精彩活动"
          type="gov">
          <div className={style.modalOut}>
            <img src={GovPage2} alt="gov" className={style.modalImg1} />
            <div className={style.modalText1}>
              什么？你居然还不知道全体大会和 Hackweek
              大赛！你简直错过了全世界最有意思的事情！
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={openedNum === 2}
          onClose={closeModal}
          title="特别时刻"
          type="gov">
          <div className={style.modalOut}>
            <img src={GovPage3} alt="gov" className={style.modalImg1} />
            <div className={style.modalText1}>
              在特定的日子里，我们会为每一位家园人送上祝福
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={openedNum === 3}
          onClose={closeModal}
          title="有趣团建"
          type="gov">
          <div className={style.modalOut}>
            <img src={GovPage4} alt="gov" className={style.modalImg1} />
            <div className={style.modalText1}>
              行政出动！好玩有趣的团建活动是我们的精心安排
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={openedNum === 4}
          onClose={closeModal}
          title="行政组"
          type="gov">
          <div className={style.modalOut}>
            <img src={GovPage5} alt="gov" className={style.modalImg1} />
            <div className={style.modalText1}>
            每一个精彩策划案，都离不开行政人背后的付出
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
              从前台到幕后，行政执行官们一丝不苟地照顾好每一处细节，大到举办活动，小到值班打卡考勤...
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
