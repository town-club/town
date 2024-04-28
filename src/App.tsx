import { Suspense, useEffect } from "react";
import music from "@assets/music/walkGrass.mp3"
import { useRoutes,useLocation} from "react-router-dom";
import route from "@route/route";
import Loading from "@components/Loading/Loading"
import ReactGA4  from "react-ga4"
import "./App.css";

ReactGA4.initialize("G-9Y02H6YH28")


function App() {
  const element = useRoutes(route);
  const location = useLocation();
  //监听路由变化
  useEffect(()=>{
    ReactGA4.send({
      hitType: "pageview",
      page: location.pathname+location.search,
    })
  },[location])
  return (
    <Suspense fallback={
      <Loading></Loading>
    }>
    <div className="css-all-x" style={{}}>
        {element}
      {/*音乐*/}
      <audio id="ginshen-music">
        <source src={music} type="audio/mp3"
        ></source>
      </audio>
    </div> 
    </Suspense>
  );
}

export default App;
