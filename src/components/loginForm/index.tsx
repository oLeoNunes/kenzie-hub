import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {FormLogin,InputContainerLogin} from "./style"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
interface ILogin{
  email:string
  password:string
}
function LoginForm() {
  const history = useHistory();
  const {login} = useContext(AuthContext)

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(formSchema),
  });

  return (
    <FormLogin onSubmit={handleSubmit(login)}>
      <h1>Login</h1>
      <label>
        Email
        <InputContainerLogin>
          <input className={`inputEmail`} placeholder="Digite aqui seu Email" {...register("email")} />
        </InputContainerLogin>
        <span className={'error'}>{errors.email?.message}</span>
      </label>
      <label >
        Senha
        <InputContainerLogin >
          <input className={`inputPassword`}
            placeholder="Digite aqui sua senha"
            type="password"
            {...register("password")}
          />
        </InputContainerLogin>
        <span className={"error"}>{errors.password?.message}</span>
      </label>
      <button className="btnLogin" type="submit">Login</button>

      <span className="slogan">Ainda não possui uma conta?</span>
      <button className="btnRegister" onClick={() => history.push("/register")}>Cadastre-se</button>
    </FormLogin>
  );
}
export default LoginForm;
