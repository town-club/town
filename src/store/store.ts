import { create } from "zustand";
import NoticeName from "@/Constant/NoticeName";
interface ShowNoticeStore {
  showNotice: string;
  setShowNotice: (showNotice: string, props?: any) => void;
  props: any;
}
const useShowNoticeStore = create<ShowNoticeStore>((set) => ({
  showNotice: NoticeName.DEFAULT,
  props: {},
  setShowNotice: (showNotice: string, props = {}) => set({ showNotice, props }),
}));
interface PassStore {
  isPass: boolean;
  setIsPass: (isPass: boolean) => void;
}
const usePassStore = create<PassStore>((set) => ({
  isPass: true,
  setIsPass: (isPass: boolean) => set({ isPass }),
}));
interface cloudStore {
  iscloud: boolean;
  setIsCloud: (iscloud: boolean) => void;
}
const useCloudStore = create<cloudStore>((set) => ({
  iscloud: true,
  setIsCloud: (iscloud: boolean) => set({ iscloud }),
}));

interface InnerPassStore {
  isInnerPass: boolean;
  setIsInnerPass: (isInnerPass: boolean) => void;
}
const useInnerPassStore = create<InnerPassStore>((set) => ({
  isInnerPass: true,
  setIsInnerPass: (isInnerPass: boolean) => set({ isInnerPass }),
}));

interface DialogStore {
  isDialog: boolean;
  text: string[];
  img: string[];
  setDialog: (text: string[], img?: string[]) => void;
  clearDialog: () => void;
  uninsDialog: () => void;
}
//设置text为列表，后期会检测列表长度判断是否给与下一步，如果下一步就更改显示内容
const useDialogStore = create<DialogStore>((set) => ({
  isDialog: false,
  text: [],
  img: [],
  setDialog: (text: string[], img: string[] = []) =>
    set({ isDialog: true, text, img }),
  clearDialog: () => set({ text: [], img: [] }),
  uninsDialog: () => set({ isDialog: false, text: [], img: [] }),
}));
interface RatioStore {
  ratio: number;
  setRatio: (ratio: number) => void;
}
const useRatioStore = create<RatioStore>((set) => ({
  ratio: 0.93,
  setRatio: (ratio: number) => set({ ratio }),
}));

export {
  useShowNoticeStore,
  usePassStore,
  useCloudStore,
  useInnerPassStore,
  useDialogStore,
  useRatioStore,
};
