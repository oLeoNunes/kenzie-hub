import { createContext, ReactNode, useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const AuthContext = createContext<IUserContext>({} as IUserContext);

interface IAuthProviderProps{
  children:ReactNode
}
interface dataLogin{
  email:string
  password:string
}
interface ITech{
  id:string
  title:string
  status:string
}
  interface IUser {
    id: string
    name: string
    email: string,
    course_module: string,
    bio: string,
    contact: string,
    created_at: string,
    updated_at:string,
    techs: ITech[],
    works: string[],
    avatar_url: boolean  
  }
  interface IUserContext{
    user:IUser | undefined
    setUser: (user:IUser) =>void
    login:(data:dataLogin)=>void
    loading:boolean
    attUser:()=>void
  }

const AuthProvider = ({ children }:IAuthProviderProps) => {
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    async function loadUser() {
      const token = window.localStorage.getItem("@TOKEN");
      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);
  async function attUser(){
    const atuUser = await api.get(`/profile`)
    setUser(atuUser.data)
  }


  const login = async (data:dataLogin) => {
    const response = await api.post("/sessions", data).then(response=>{
      const { user: userResponse, token } = response.data;
      api.defaults.headers.common.authorization = `Bearer ${token}`;
  
      setUser(userResponse);
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", token);
      window.localStorage.setItem("@USERID", userResponse.id);
      toast.success("Login realizado com sucesso");
      history.push("/dashboard");
  
    }).catch(async (err) => {
      toast.error(err.response.data.message);
    });
  };

  return (
    <AuthContext.Provider value={{user,setUser, login, loading, attUser}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
