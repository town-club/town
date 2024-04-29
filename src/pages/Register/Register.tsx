import { loginApi } from "@/util/loginApi"
import { FC, useEffect, useState } from "react"
import { User } from "../Login/Login"
import css from './index.module.css'
import { useNavigate } from "react-router-dom"
const Register:FC<{}> = () => {
  const [value,setValue] = useState<User & {
    ensurePassword:string
  }>({
    username:'',
    password:'',
    ensurePassword:''
  })
  const navigate = useNavigate()
  

  const login = ()=>{
    if (value.password !== value.ensurePassword) {
      alert('两次密码不一致')
      return
    }
    if (!value.username || !value.password || !value.ensurePassword) {
      alert('输入不能为空')
      return
    }
    loginApi.Register(value.username,value.password).then((res)=>{
      if (res.status === 200) {
        alert('注册成功')
        console.log(res)
        window.location.href = '/login'
      }else{
        alert("注册失败")  
      }
    }).catch((e)=>{
      alert("用户名已被注册或服务器错误，错误信息:"+e)
    })
  }
  return (
    <div className={css.loginBox}>
      <div className={css.formBox}>
        <div style={{
          fontSize:'32px',
        }}>注册</div>
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
        <input type="password" placeholder="确认密码" value={value.ensurePassword} onChange={(e)=>{
          setValue({
            ...value,
            ensurePassword:e.target.value
          })
        }}/>
        <button onClick={login}>注册</button>
        <span>已有账号，点我去<a href="/login">登录</a></span>
      </div>
    </div>
    
  )
}
export default Register