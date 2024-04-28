import Lottie from "lottie-web";
import { RefObject, useEffect ,useState} from "react";
//Div元素的ref
interface Props {
  data: any;
  ref: RefObject<HTMLDivElement>;
  type?: "canvas" | "svg";
  name: string;
  loop?: boolean;
  autoplay?: boolean;
  completeCallback?: () => void;
  DOMLoadedCallback?: () => void;
  speed?: number;
  time?: number;
}
const useShowAnimation = ({
  data,
  ref,
  type,
  name,
  completeCallback=null,
  DOMLoadedCallback=null,
  loop=true,
  autoplay=true,
  speed = 1,
  time = 30000,
}: Props) => {
  const [ani,setAni]=useState<any>(null)
  //所有动画统统节流
  useEffect(() => {
    let ani = Lottie.loadAnimation({
      container: ref.current,
      animationData: data,
      loop: loop,
      autoplay: true,
      renderer: type,
      name: name,
    });
    setAni(ani)
    if (completeCallback){
      ani.addEventListener("complete",completeCallback)
    }
    if (DOMLoadedCallback){
      ani.addEventListener("DOMLoaded",DOMLoadedCallback)
    }

    if (autoplay) {
      ani.play();
    }else{
      ani.addEventListener("DOMLoaded",()=>{
        ani.goToAndStop(0,true)
      })
    }
    ani.setSpeed(speed);
    Lottie.setQuality("medium");
    //节流设置，检测用户长时间未操作
    let timeOutId;
    function resetTimer() {
      ani.play();
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        ani.stop();
      }, time);
    }
    function handleMouseMove() {
      resetTimer();
    }
    //界面较小配置节流
    if (window.innerWidth < 600) {
      //手机拖动
      ref.current.addEventListener("touchmove", handleMouseMove);
      resetTimer(); //刚开始监听一下
    }
    return () => {
      if (window.innerWidth < 600){
        clearTimeout(timeOutId);
        document.removeEventListener("touchmove", handleMouseMove);
      }
      ani.destroy();
    };
  }, [data, ref, type]);

  return ani;
};
export default useShowAnimation;
