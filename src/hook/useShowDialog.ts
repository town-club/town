import React, { useEffect } from 'react'
import { useDialogStore , useInnerPassStore} from '@/store/store';
const buildings = {
    design: "设计岗位的创意和想法不可少，看看有什么适合你的方向吧！",
    dev: "高薪岗位首选研发，来看看有哪些细分领域等你探索",
    gov: "什么企业都离不开行政！行政岗位入职门槛低，提升空间大，是许多求职人员的优秀选择！",
    product:"爆火的产品经理一职，背后有什么求职诀窍呢？",
    operate:"运营岗位掌控着业务流程和数据分析，贯穿公司的各个环节，是推动企业发展的关键力量！",
    game: "想在酷酷的游戏行业大展身手？这里有你需要的独家攻略！",
  };
export type KeyOfObject<T> = keyof T

export default function useShowDialog(
    type:KeyOfObject<typeof buildings>
) {
    const isInnerPass = useInnerPassStore((state) => state.isInnerPass);
    const setDialog = useDialogStore(state=>state.setDialog);
    useEffect(()=>{
        if (!isInnerPass){
            // console.log("dialog")
            setDialog([buildings[type], "点击房间内物品开始探索"]);
        }
    },[isInnerPass])
}
