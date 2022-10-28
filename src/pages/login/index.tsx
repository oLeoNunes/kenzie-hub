import Header from "../../components/Header";
import LoginForm from "../../components/loginForm";
import { ContainerLogin } from "./style";
import { useHistory } from "react-router-dom";
import { Fragment, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const history = useHistory();
  const { user, loading} = useContext(AuthContext);
  if (loading) return <div>Carregando...</div>;

  return user ? <>
  {(history.push("/dashboard"))}
  </> 
  :(
    <ContainerLogin>
      <Header button={"Voltar"} hasButton={false}/>
      <LoginForm/>
    </ContainerLogin>
  )

}
export default Login;
