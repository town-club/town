import  { useEffect } from "react";
import css from "./index.module.css";
import Index from "@components/Info/Index";
import process from "@assets/png/info/process.png"
export default function index() {
  useEffect(() => {
    const box: any = document.getElementsByClassName("css-all-x");
    if (box.length > 0) {
      box.item(0).style.position = "relative";
    }
  }, []);
  useEffect(() => {
    history.pushState('', '', document.URL || '')
    window.addEventListener('popstate', function () {
      history.pushState('', '', document.URL || '')
    })
  }, [history])
  return (
    <div
      className={css.box}
      style={{
        maxWidth: "600px",
        width: window.innerWidth,
      }}
    >
      <div className={css.buttonX}>
        <button className={css.back} onClick={()=>{
          window.location.href = "https://town.ncuos.com/home/town";
        }}>返回</button>
      </div>
      <div className={css.x}>
        <Index />
        <img className={css.process} src={process}></img>
        {/* <TeamProduct />
        <Detail />
        <div className={css.joinX}>
          <h1>加入我们</h1>
          <p className={css.joinContent}>
            一个好的产品离不开各个部门的齐心协作，离不开每个家园人的付出和贡献。在筑梦过程中不仅可以跟前辈们收获宝贵的工作学习经验，还可以认识到一群志同道合的小伙伴们。
          </p>
          <p className={css.joinImportant}>
            <b>加入招新群,可以了解更多详细信息喔~</b>
          </p>
          <div className={css.qqNumX}>
            <img src={qqParty} className={css.qqParty}></img>
            <p>招新总群：853882202</p>
            <p>游戏组招新群：655868534 </p>
            <p>设计组招新群：725835459</p>
            <p>运营组招新群：495172366 </p>
            <p>研发组招新群：787312363</p>
            <p>行政组招新群：614398959</p>
            <p>产品组招新群：649883656</p>
          </div>
        </div>

        <div className={css.foot}>
          <p className={css.footNotice}>家园在你身后</p>
          <p className={css.footNotice}>世界在你眼前</p>
          <p className={css.footSign}>@NCUHOME.2023</p>
        </div> */}
      </div>
    </div>
  );
}
