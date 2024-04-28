import { useEffect } from "react";
import anime from "animejs";
export default function useScroll(
    scrollRef:React.RefObject<HTMLDivElement>,
    element:any,//任何元素都可以，怕又来什么稀奇古怪的需求
    distance:number,
    isPC:boolean
) {
    useEffect(()=>{
        if (isPC){
            return
        }
        console.log("yes")
        anime({
            targets: element.current,
            translateX:[-50,0],
            //循环
            loop:true,
            duration:1500,
            //循环间隔
            easing:"linear",
        })
        //监听scrollRef的水平向右滚动距离
        scrollRef.current.addEventListener("scroll",()=>{
            if (scrollRef.current.scrollLeft>distance){
                element.current.style.opacity="0"
                element.current.addEventListener("transitionend",()=>{
                    element.current.style.display="none"
                })
            }
            //考虑是否保留
            // else{
            //     element.current.style.display="block"
            //     element.current.style.opacity="0.8"
            // }
        })
    },[scrollRef.current,element.current,distance])
}
