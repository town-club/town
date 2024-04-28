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
            title="忏悔日"
            type="game">
            <div className={style.modalOut}>
              <img src={GamePage1} alt="game" className={style.modalImg1} />
              <div
                className={style.modalText1}
                style={{
                  fontSize: '16px',
                }}>
                游戏组自主研发的游戏《忏悔日》，入围了2023cusga
                最佳解密游戏，是接入了GPT的
                高自由度对话类解谜游戏，可以在招新群中获得下载链接喔～
              </div>
            </div>
          </Modal>

          <Modal
            isOpen={openedNum === 2}
            onClose={closeModal}
            title="梦境"
            type="game">
            <div className={style.modalOut}>
              <img src={GamePage2} alt="game" className={style.modalImg1} />
              <div className={style.modalText1}>
              “梦境”是游戏组自主研发的横版动作RPG游戏，可以在招新群中获得下载链接喔～
              </div>
            </div>
          </Modal>

          <Modal
            isOpen={openedNum === 3}
            onClose={closeModal}
            title="宝可梦球"
            type="game">
            <div className={style.modalOut}>
              <img src={GamePage3} alt="game" className={style.modalImg1} />
              <div className={style.modalText1}>
                来制作游戏的世界里进行一场大冒险吧~
              </div>
            </div>
          </Modal>
          <Modal
            isOpen={openedNum === 4}
            onClose={closeModal}
            title="游戏机"
            type="game">
            <div className={style.modalOut}>
              <img src={GamePage4} alt="game" className={style.modalImg1} />
              <div className={style.modalText1}>
                比起玩游戏，不觉得做游戏更酷一点吗~
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
