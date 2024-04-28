import style from "./index.module.css";
import icon from "@assets/png/info/icon.png";
import WorkCard from "@components/Info/WorkCard";
import workData from "./work";
import envData from "./env";
import teamData from "./team";
import DetailCard from "@components/Info/DetailCard";
import { useEffect, useRef } from "react";
export default function index() {
  const envRef = useRef(null);
  const teamRef = useRef(null);
  useEffect(() => {
    if (envRef.current) {
      envRef.current.onwheel = (e) => {
        e.preventDefault();
        envRef.current.scrollLeft += e.deltaY;
      };
    }
    if (teamRef.current) {
      teamRef.current.onwheel = (e) => {
        e.preventDefault();
        teamRef.current.scrollLeft += e.deltaY;
      };
    }
  }, [envRef,teamRef]);
  return (
    <div className={style.x}>
      <div className={style.envX}>
        <h1 className={style.h1}>工作环境</h1>
        <h2 className={style.h2}>
          修贤七栋零层处，一群有想法有创造力的人聚集于此处
        </h2>
        <div className={style.scrollX} ref={envRef}>
          <div className={style.scroll}>
            {envData.map((item, index) => {
              return (
                <DetailCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  value={item.value}
                ></DetailCard>
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.organizationX}>
        <h1 className={style.h1}>组织架构</h1>
        <h2 className={style.h2}>清晰明确的分工，推动家园发展</h2>
        <div className={style.organization}>
          <img className={style.icon} src={icon}></img>
          <p>
            家园的组织架构分为六个人力部门团队，代表了以分工的职能组；同时又分为多个横向项目团队。
          </p>
        </div>
      </div>
      <div className={style.workTeamX}>
        <h1 className={style.h1}>职能团队</h1>
        <h2 className={style.h2}>六个组，共同搭建家园小镇</h2>
        <div className={style.workTeam}>
          {workData.map((item, index) => {
            return (
              <WorkCard
                key={index}
                link={item.link}
                title={item.title}
                text={item.text}
                styleBox={{
                  ...item.styleBox,
                  transform: `rotate(${index % 2 == 0 ? 3 : -3}deg)`,
                }}
              />
            );
          })}
        </div>
      </div>
      <div className={style.teamX}>
        <h1 className={style.h1}>横向团队</h1>
        <h2 className={style.h2}>想法落地，创造精彩</h2>
        <div className={style.scrollX} ref={teamRef}>
          <div className={style.scroll}>
            {teamData.map((item, index) => {
              return (
                <DetailCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  value={item.value}
                ></DetailCard>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
