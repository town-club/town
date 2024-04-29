import { useEffect, useRef } from "react";
import ComponentTable from "@components/ComponentTable/ComponentTable";
import { Outlet } from "react-router-dom";
import join from "@assets/lottie/join/join.json";
import css from "./index.module.css";
import Lottie from "lottie-web";
import Dialog from "@components/Dialog";
import { useRatioStore, useDialogStore } from "@/store/store";
import ReactGA4 from "react-ga4"
export default function Home() {
  const ratio = useRatioStore((state) => state.ratio);
  const joinRef = useRef();
  useEffect(() => {
    //加入的按钮动画
    Lottie.loadAnimation({
      container: joinRef.current,
      animationData: join,
      renderer: "canvas",
      loop: true,
      autoplay: true,
    });
  }, []);
  
  //路由登录保护
  useEffect(()=>{
    const token = localStorage.getItem('token')
    console.log(token)
    if (!token) {
      window.location.href = '/login'
    }
  },[])
  const isDialog = useDialogStore((state) => state.isDialog);
  const text = useDialogStore((state) => state.text);
  const img = useDialogStore((state) => state.img);
  
  
  
  return (
    <div
      className={css.x}
      style={{
        maxWidth: window.innerHeight * ratio,
      }}
    >
      <Outlet />
      <div
        className={css.joinX}
        onClick={() => {
          //切换到hr2023.ncuos.com
          ReactGA4.event({
            category: "join",
            action:"join with movie button"
          });
          window.location.href = "";
        }}
      >
        <div ref={joinRef} className={css.join}></div>
      </div>
      <ComponentTable />
      {isDialog ? <Dialog text={text} img={img} /> : null}
    </div>
  );
}
