import { FC, useEffect, useState } from "react";
import css from './index.module.css'
import { loginApi } from "@/util/loginApi";
import { useNavigate } from "react-router-dom";

export type User = {
  username:string,
  password:string
}
const Login:FC<{}> = ()=>{
  const [value,setValue] = useState<User>({
    username:'',
    password:''
  })
  const navigate = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/home/town')
    }
  },[])
  const login = ()=>{
    if (!value.username || !value.password) {
      alert('输入不能为空')
      return
    }
    loginApi.Login(value.username,value.password).then((res)=>{
      if (res.status == 200){
        alert('登录成功')
        localStorage.setItem('token',res.data.token)
        window.location.href = '/home/town'
      }
    }).catch((err)=>{
      alert("用户名密码错误或服务器错误，错误信息:"+err)
    })
  }
  return (
    <div className={css.loginBox}>
      <div className={css.formBox}>
        <div style={{
          fontSize:'32px',
        }}>登录</div>
        <input type="text" placeholder="请输入用户名" value={value.username} onChange={(e)=>{
          setValue({
            ...value,
            username:e.target.value
          })
        }}/>
        <input type="password" placeholder="请输入密码" value={value.password} onChange={(e)=>{
          setValue({
            ...value,
            password:e.target.value
          })
        }}/>
        <button onClick={login}>登录</button>
        <span>没有账号，点我去<a href="/register">注册</a></span>
      </div>
    </div>
    
  )
}
export default Login;