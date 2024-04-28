import DevModal from '@/assets/svg/Page/Modal/DevModal.png'
import ProModal from '@/assets/svg/Page/Modal/ProModal.png'
import GameModal from '@/assets/svg/Page/Modal/DevModal.svg'
import GovModal from '@/assets/svg/Page/Modal/GovModal.svg'
import OperateModal from '@/assets/svg/Page/Modal/OpeModal.svg'
import DesignModal from '@/assets/svg/Page/Modal/DesModal.svg'
import DevCloseBtn from '@/assets/svg/Page/ModalClose/DevCloseBtn.svg'
import ProCloseBtn from '@/assets/svg/Page/ModalClose/ProCloseBtn.svg'
import GameCloseBtn from '@/assets/svg/Page/ModalClose/GameCloseBtn.svg'
import GovCloseBtn from '@/assets/svg/Page/ModalClose/GovCloseBtn.svg'
import OperateCloseBtn from '@/assets/svg/Page/ModalClose/OpeCloseBtn.svg'
import DesignCloseBtn from '@/assets/svg/Page/ModalClose/DesCloseBtn.svg'
import React, { useEffect, useRef, useState } from 'react'
import './index.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  type: 'pro' | 'game' | 'gov' | 'ope' | 'dev' | 'des'
  title: string
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  type,
}) => {
  const [backgroundImage, setBackgroundImage] = useState(DevModal)
  const [closeBtn, setCloseBtn] = useState(DevCloseBtn)
  const [childTop, setChildTop] = useState(null)
  const [titleTop, setTitleTop] = useState(3)
  const [opacity,setOpacity] = useState(0)
  const boxRef = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    if (isOpen){
      setOpacity(1)
    }
  },[isOpen])

  const handleCloseClick = () => {
    setOpacity(0)
    boxRef.current.addEventListener('transitionend', () => {
      onClose()
      boxRef.current.removeEventListener('transitionend', () => {})
    })
  }


  useEffect(() => {
    switch (type) {
      case 'pro':
        setBackgroundImage(ProModal)
        setCloseBtn(ProCloseBtn)
        setTitleTop(8)
        break
      case 'game':
        setBackgroundImage(GameModal)
        setCloseBtn(GameCloseBtn)
        setTitleTop(4)
        break
      case 'gov':
        setBackgroundImage(GovModal)
        setCloseBtn(GovCloseBtn)
        setTitleTop(3)
        setChildTop(20)
        break
      case 'ope':
        setBackgroundImage(OperateModal)
        setCloseBtn(OperateCloseBtn)
        setTitleTop(2)
        setChildTop(20)
        break
      case 'des':
        setBackgroundImage(DesignModal)
        setCloseBtn(DesignCloseBtn)
        setTitleTop(12)
        break
      default:
        setBackgroundImage(DevModal)
        setCloseBtn(DevCloseBtn)
        setTitleTop(3)
    }
  }, [type])

  return (
    <>
      {isOpen && (
        <div 
        className="modalOverlay" 
        ref={boxRef}
        style={{opacity:opacity}}
        >
          <div className={`modal ${isOpen ? 'modal--open' : 'modal--close'}`}>
            <img className="backgroundImage" src={backgroundImage} />
            <div className="modal__title" style={{ top: `${titleTop}%` }}>
              {title}
            </div>
            <div
              className="child"
              style={childTop !== null ? { top: `${childTop}%` } : {}}>
              {children}
            </div>
            <img
              src={closeBtn}
              alt="Close"
              className="closeBtn"
              onClick={handleCloseClick}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
