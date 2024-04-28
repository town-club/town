import NoticeName from '@/Constant/NoticeName'
import { useShowNoticeStore } from '@/store/store'
import { useEffect, useMemo } from 'react'
import { KeyOfObject } from './useShowDialog'

type ShowBoxType = KeyOfObject<typeof NoticeName>
const useShowBox = (type: ShowBoxType, time: number = 0,props:any = {}) => {
  const componentType = useMemo(() => {
    return NoticeName[type]
  }, [type])

  const setShowNotice = useShowNoticeStore((state) => state.setShowNotice)

  useEffect(() => {
    //console.log("useShowBox",componentType)
    setShowNotice(componentType,props)
    if (time == 0) {
      return
    }
    //展示多久
    const timer = setTimeout(() => {
      setShowNotice(NoticeName.DEFAULT)
    }, time)
    return () => {
      clearTimeout(timer)
      setShowNotice(NoticeName.DEFAULT)
    }
  }, [componentType, time])
}
export type { ShowBoxType }
export default useShowBox
