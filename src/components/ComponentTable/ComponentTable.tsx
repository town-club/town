import { useMemo } from "react";
import Surprise from "@components/Surprise";
import { useShowNoticeStore } from "@/store/store";
//策略模式
const useComponentTable = () => {
  const props = useShowNoticeStore((state) => state.props);
  const showNotice = useShowNoticeStore((state) => state.showNotice);
  const componentTable = useMemo(() => {
    return {
      DEFAULT: null,
      SURPRISE: (
        <Surprise text={props.text} img={props.img} title={props.title} />
      ),
    };
  }, [props]);
  return componentTable[showNotice];
};
export default useComponentTable;
