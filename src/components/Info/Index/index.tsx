import indexPng from "@assets/png/info/index.png";
import logo from "@assets/png/info/logo.png";
import back from "@assets/png/info/back.svg";
import css from "./index.module.css";
export default function index() {
  
  return (
    <div className={css.x}>
      <img className={css.img} src={indexPng}></img>
      <div className={css.contentX}>
        <div className={css.content}>
          <p>欢迎来到互联网求职小镇，</p>
          <p>是通往数字世界职业生涯的快捷通道！</p>
          <p>无论您热爱技术、设计、产品、运营还是行政，</p>
          <p>我们都为您提供了丰富的资源和实用的求职建议。</p>
          <p>准备好开启您的互联网职业之旅了吗？</p>
          <p>跟我们一起探索更多可能性吧</p>
        </div>
        <img className={css.next} src={back}></img>
      </div>
      <div className={css.logo}>
        <img src={logo}></img>
      </div>
    </div>
  );
}
