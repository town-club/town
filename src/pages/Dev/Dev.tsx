import React, { useEffect, useState, useRef } from 'react'
import anime from 'animejs'
import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'
import ReactGA4 from "react-ga4"
import devMovie from '@assets/lottie/Every/dev.json'
import DevPage1 from '@/assets/images/dev1.png'
import DevPage3 from '@/assets/images/dev3.png'
import DevPage4 from '@/assets/images/dev4.png'
import back from '@assets/svg/back.svg'
import Modal from '@components/Modal/Module'
import InnerPass from '@components/InnerPass/InnerPass'
import { useInnerPassStore, useRatioStore } from '@/store/store'
import useShowPop from '@hook/useShowPop'
import style from './index.module.css'
import useShowDialog from '@/hook/useShowDialog'

//ES6 way
const Dev = () => {
  const navigate = useNavigate()
  const setRatio = useRatioStore((state) => state.setRatio)
  const whiteRef = useRef(null)
  const allRef = useRef(null)
  const [openedNum, setOpenedNum] = useState<number>(0)
  const [opacity, setOpacity] = useState(0)
  const [isDisplay, setIsDisplay] = useState(false)
  const { isInnerPass } = useInnerPassStore((state) => state)
  
  //修改电脑端视口宽度
  useEffect(() => {
    setRatio(0.646)
  }, [])
  //点击事件监听钩子
  useShowPop(setOpenedNum, 'dev', 3)
  //设置dialog钩子
  useShowDialog('dev')
  //原神独有彩蛋
  useEffect(() => {
    document.getElementById('ginshen').addEventListener('click', () => {
      ReactGA4.event({
        category: "ginshen",
        action:"ginshen-impart surprise"
      })
      const music: any | null = document.getElementById('ginshen-music')
      music.play()
      const ani = anime({
        targets: allRef.current,
        scale: [1, 5],
        translateX: ['0%', '20%'],
        duration: 6000,
        easing: 'linear',
      })
      ani.finished.then(() => {
        setIsDisplay(true)
      })
    })
  }, [])
  //此处可以使用策略模式，复盘建议吸取
  const closeModal = () => {
    setOpenedNum(0)
  }
  useEffect(() => {
    if (isDisplay) {
      const ani = anime({
        targets: whiteRef.current,
        opacity: [0, 1],
        duration: 1000,
        easing: 'linear',
      })
      ani.finished.then(() => {
        navigate('/ginshen-impart')
      })
    }
  }, [isDisplay])
  const backTown = () => {
    navigate(-1)
  }
  return (
    <div
      ref={allRef}
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
              animationData={devMovie}
              className={style.map}
              style={{
                width: window.innerHeight * 0.646,
              }}
            />
          </div>
          {/*可以的话封装一下，现在感觉还是太抽象了*/}
          <Modal
            isOpen={openedNum === 1}
            onClose={closeModal}
            title="gopher"
            type="dev">
            <div className={style.modalOut}>
              <img
                src={DevPage1}
                alt="dev"
                className={style.modalImg1}
                style={{
                  width: '50%',
                }}
              />
              <div className={style.modalText1}>
                不会编程的土拨鼠不是好gopher
              </div>
            </div>
          </Modal>
          <Modal
            isOpen={openedNum === 3}
            onClose={closeModal}
            title="JS"
            type="dev">
            <div className={style.modalOut}>
              <img
                src={DevPage3}
                alt="dev"
                className={style.modalImg1}
                style={{
                  width: '60%',
                }}
              />
              <div className={style.modalText1}>
                技能大爆发！用js来写个页面吧~
              </div>
            </div>
          </Modal>
          <Modal
            isOpen={openedNum === 2}
            onClose={closeModal}
            title="1024程序节"
            type="dev">
            <div className={style.modalOut}>
              <img src={DevPage4} alt="dev" className={style.modalImg1} />

              <div className={style.modalText2}>1024程序员大揭秘</div>
              <div className={style.modalText1}>
                我们采访了这些同学,才发现程序员还有这一面
              </div>
            </div>
          </Modal>
        </div>
      </div>
      <div
        className={style.whiteBackground}
        style={{
          opacity: opacity,
          display: isDisplay ? 'block' : 'none',
        }}
        ref={whiteRef}></div>
      <img className={style.back} src={back} onClick={backTown}></img>
      {isInnerPass &&
        (window.innerWidth < 600 ? (
          <InnerPass
            department="研发"
            detail={[
              "准备好探索未知的代码世界了吗？",
              "写最优雅代码，享最高薪职位",
              "从hello world开始创造世界"
            ][Math.floor(Math.random() * 3)]}
            time={5000}
            img="dev"></InnerPass>
        ) : null)}
    </div>
  )
}

export default Dev
