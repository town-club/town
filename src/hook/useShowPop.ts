import React, { useEffect } from 'react'

//接收一个设置state函数，一个字符串类型函数,一个弹窗数量
export default function useShowPop(
    func:React.Dispatch<React.SetStateAction<number>>,
    type:"dev"|"design"|"game"|"gov"|"product"|"operate",
    number:number) {
  useEffect(()=>{
    for (let i=1; i<=number;i++){
        document.getElementById(`${type}${i}`)?.addEventListener("click",()=>{
            func(i)
        })
    }
    return ()=>{
        for (let i=1; i<=number;i++){
            document.getElementById(`${type}${i}`)?.removeEventListener("click",()=>{
                func(i)
            })
        }
    }
  },[func,type,number])
}
