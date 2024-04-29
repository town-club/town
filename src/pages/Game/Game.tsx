import { useEffect, useState } from 'react'
import InnerPass from '@components/InnerPass/InnerPass'
import Modal from '@components/Modal/Module'
import { useInnerPassStore, useRatioStore } from '@/store/store'
import Lottie from 'lottie-react'
import gameMovie from "@/assets/lottie/Every/game.json"
import back from "@assets/svg/back.svg"
import GamePage1 from '@/assets/images/game1.png'
import GamePage2 from '@/assets/images/game2.png'
import GamePage3 from '@/assets/images/game3.png'
import GamePage4 from '@/assets/images/game4.png'
import style from './index.module.css'
import useShowPop from '@/hook/useShowPop'
import useShowDialog from '@/hook/useShowDialog'
import { useNavigate } from 'react-router-dom'
export default function Game() {
  const navigate = useNavigate();
  const setRatio = useRatioStore((state) => state.setRatio)
  const [openedNum, setOpenedNum] = useState<number>(0);
  const { isInnerPass } = useInnerPassStore((state) => state)
  //修改电脑端视口宽度
  useEffect(() => {
    setRatio(0.646)
  }, [])
  const closeModal = () => {
    setOpenedNum(0)
  }
  useShowPop(setOpenedNum,"game",4)
  useShowDialog("game")
  const backTown = () =>{
    navigate(-1)
  }
  return (
    <div
      className={style.page}
      style={{
        width: window.innerWidth,
        maxWidth: window.innerHeight * 0.646,
      }}>
      <div className="presenter">
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div className={style.outter}>
            <Lottie
              animationData={gameMovie}
              className={style.map}
              style={{
                width: window.innerHeight * 0.646,
              }}
            />
          </div>
          <Modal
            isOpen={openedNum === 1}
            onClose={closeModal}
            title="游戏执行策划"
            type="game">
            <div className={style.modalOut}>
              <img src={GamePage1} alt="game" className={style.modalImg1} />
              <div
                className={style.modalText1}
                style={{
                  fontSize: '16px',
                }}>
                游戏执行策划岗位是一个门槛相对较低的岗位，快了解一下吧！
              </div>
            </div>
          </Modal>

          <Modal
            isOpen={openedNum === 2}
            onClose={closeModal}
            title="游戏岗位"
            type="game">
            <div className={style.modalOut}>
              <img src={GamePage2} alt="game" className={style.modalImg1} />
              <div className={style.modalText1}>
              游戏岗位主要分为游戏策划、游戏美术、程序设计三部分，选择你适合的方向非常重要！
              </div>
            </div>
          </Modal>

          <Modal
            isOpen={openedNum === 3}
            onClose={closeModal}
            title="游戏公司"
            type="game">
            <div className={style.modalOut}>
              <img src={GamePage3} alt="game" className={style.modalImg1} />
              <div className={style.modalText1}>
              许多游戏公司都是起源于一个游戏
              </div>
            </div>
          </Modal>
          <Modal
            isOpen={openedNum === 4}
            onClose={closeModal}
            title="Unity"
            type="game">
            <div className={style.modalOut}>
              <img src={GamePage4} alt="game" className={style.modalImg1} />
              <div className={style.modalText1}>
              Unity是主流的游戏编程引擎，掌握他对于日后求职非常有帮助
              </div>
            </div>
          </Modal>
        </div>
      </div>
      <img className={style.back} src={back} onClick={backTown}></img>
      {isInnerPass &&
        (window.innerWidth < 600 ? (
          <InnerPass
            department="游戏"
            detail={[
              "越来越多的游戏公司开始提供职位了！",
              "不要忘记游戏行业还有策划、美术等职位哦",
              "游戏作为一种文化形式，影响着现代社会的娱乐和科技领域"
            ][Math.floor(Math.random() * 3)]}
            time={5000}
            img="game"></InnerPass>
        ) : null)}
    </div>
  )
}
