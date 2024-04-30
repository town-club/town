import axios from "axios"

class LoginApi {
  private bath = "https://1.15.123.253:8081/api"
  private urls = {
    login: '/user/login',
    register: '/user/register',
  }

  Login(username:string,password:string){
    return axios.post<{
      token:string
    }>(this.bath + this.urls.login,{
      username,
      password
    })
  }

  Register(username:string,password:string){
    return axios.post(this.bath + this.urls.register,{
      username,
      password
    })
  }
}

export const loginApi = new LoginApi()