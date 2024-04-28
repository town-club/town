import { useEffect } from "react";
import anime from "animejs";
import { useDialogStore, useShowNoticeStore } from "@/store/store";
import { treeDialog, grassDialog } from "@/Constant/DialogData";
import scan from "@/assets/png/surprise/scan.png";
import work from "@/assets/png/surprise/work.png";
import niuke from "@/assets/png/surprise/niuke.png";
import ReactGA4 from "react-ga4";
const surpriseData = [
  {
    text: " 其实有些部门中有内推码哦，点点看看吧！",
    img: scan,
    title: "内推码",
  },
  {
    text:"每一个独特的灵魂都值得拥有最特别的聘书！",
    img: work,
    title: "聘书",
  },
  {
    text:"听说家园还有开创副业，不会是美容美发美甲吧？",
    img: niuke,
    title:"牛客"
  }
]


const useActive = (ref: any) => {
  const setDialog = useDialogStore((state) => state.setDialog);
  const setShowNotice = useShowNoticeStore((state) => state.setShowNotice);
  useEffect(() => {
    //等待所有js完成在执行timeOut
    setTimeout(() => {
      for (let i = 1; i <= 3; i++) {
        document
          .getElementById(`treeClick${i}`)
          .addEventListener("click", () => {
            anime({
              targets: `#tree${i} g`,
              opacity: [0, 1],
              scale: [0.7, 1],
              translateX: [-50, 0],
            });
            const dialog =
              treeDialog[Math.floor(Math.random() * treeDialog.length)];
            setDialog([dialog]);
          });
      }
      for (let i = 4; i <= 7; i++) {
        document
          .getElementById(`treeClick${i}`)
          .addEventListener("click", () => {
            anime({
              targets: `#tree${i} image`,
              scale: [0.7, 1],
              translateX: [-50, 0],
            });

            const dialog =
              treeDialog[Math.floor(Math.random() * treeDialog.length)];
            setDialog([dialog]);
            //console.log("treeClick", i);
          });
      }

      /*彩蛋监听*/
      for (let i = 1;i<=3;i++){
        console.log("i")
        document.getElementById(`eggClick${i}`).addEventListener("click",()=>{
          anime({
            targets: `#egg${i} image`,
            scale: [0.7, 1],
          })
          console.log("click")
          setShowNotice("SURPRISE",surpriseData[i-1])
          ReactGA4.event({
            category: "surprise",
            action: "click surprise",
          })
        })
      }

      for (let i = 1; i <= 7; i++) {
        document
          .getElementById(`glassClick${i}`)
          .addEventListener("click", () => {
            anime({
              targets: `#grass${i} image`,
              scale: [0.7, 1],
              translateX: [-50, 0],
            });
            const dialog =grassDialog[Math.floor(Math.random() * grassDialog.length)];
            setDialog([dialog]);
            ReactGA4.event({
              category: "grass",
              action: "click grass",
            })
          });
      }
    });
  }, [ref]);
};
export default useActive;
