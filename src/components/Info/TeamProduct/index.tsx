import  { useEffect, useRef } from "react";
import css from "./index.module.css";
import back from "@assets/png/info/TeamActive/back.svg";
import TeamCard from "@components/Info/InfoCard/TeamCard";
import ActiveCard from "@components/Info/InfoCard/ActiveCard";
import teamText from "./teamData";
import activeText from "./activeData";
export default function index() {
  const teamBox = useRef<HTMLDivElement>(null);
  const activeBox = useRef<HTMLDivElement>(null);
  useEffect(() => {
    /*在teamBox上鼠标竖向滚动会在元素上横向滚动*/
    if (teamBox.current) {
      teamBox.current.onwheel = (e) => {
        e.preventDefault();
        teamBox.current.scrollLeft += e.deltaY;
      };
    }
    /*在activeBox上鼠标竖向滚动会在元素上横向滚动*/
    if (activeBox.current) {
      activeBox.current.onwheel = (e) => {
        e.preventDefault();
        activeBox.current.scrollLeft += e.deltaY;
      };
    }
  }, []);
  return (
    <div className={css.x}>
      {/*活动1*/}
      <div className={css.activeX}>
        <h1>团队和产品</h1>
        <h2>重磅活动来袭</h2>
        <div className={css.scrollX} ref={teamBox}>
          <div className={css.scroll}>
            {teamText.map((item, index) => {
              return <TeamCard key={index} text={item.text} img={item.img} />;
            })}
          </div>
        </div>
      </div>
      {/*活动2*/}
      <div className={css.activeX}>
        <h1>活动和团建</h1>
        <h2>重磅活动来袭</h2>
        <div className={css.scrollX} ref={activeBox}>
          <div className={css.scroll}>
            {activeText.map((item, index) => {
              return (
                <ActiveCard
                  key={index}
                  text={item.text}
                  img={item.img}
                  title={item.title}
                />
              );
            })}
          </div>
        </div>
        <img className={css.next} src={back}></img>
      </div>
    </div>
  );
}
