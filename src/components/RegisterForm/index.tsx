import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { FormRegister, InputContainer } from "./style";
import { useHistory } from "react-router-dom";
import api from "../../services/api";


interface ICreateUserData{
  name:string
  email:string
  password:string
  confirmPassword?:string
  bio:string
  contact:string
  course_module:string
}
interface IHandleSubmit{

}
function RegisterForm() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("nome obrigatório"),
    email: yup.string().email("Email Inválido").required("Email obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Senha curta")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*])[0-9a-zA-Z!@#$%&*]{8,}$/,
        "Senha inválida"
      ),
    confirmPassword: yup
      .string()
      .required("Confirme Sua Senha")
      .oneOf([yup.ref("password")], "Senhas precisam ser iguais"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Selecione um módulo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateUserData>({
    resolver: yupResolver(formSchema),
  });

  async function createUser(data:ICreateUserData) {
    delete data.confirmPassword;
    const response = await api.post("/users", data);

    toast.success("Conta criada com sucesso!");
    history.push("/");
  }
  return (
    <FormRegister onSubmit={handleSubmit(createUser)}>
      <h1>Crie sua conta</h1>
      <span>Rapido e grátis, vamos nessa</span>
      <label>
        Nome
        <InputContainer>
          <input placeholder="Digite aqui seu Nome" {...register("name")} />
        </InputContainer>
        <span className={"error"}>{errors.name?.message}</span>
      </label>
      <label>
        Email
        <InputContainer>
          <input placeholder="Digite aqui seu Email" {...register("email")} />
        </InputContainer>
        <span className={"error"}>{errors.email?.message}</span>
      </label>
      <label>
        Senha
        <InputContainer>
          <input
            placeholder="Digite aqui sua senha"
            type="password"
            {...register("password")}
          />
        </InputContainer>
        <span className={"error"}>{errors.password?.message}</span>
      </label>
      <label>
        Confirmar Senha
        <InputContainer>
          <input
            placeholder="Digite novamente sua senha"
            type="password"
            {...register("confirmPassword")}
          />
        </InputContainer>
        <span className={"error"}>{errors.confirmPassword?.message}</span>
      </label>
      <label>
        Bio
        <InputContainer>
          <input placeholder="Fale sobre você" {...register("bio")} />
        </InputContainer>
        <span className={"error"}>{errors.bio?.message}</span>
      </label>
      <label>
        Contato
        <InputContainer>
          <input placeholder="Opção de contato" {...register("contact")} />
        </InputContainer>
        <span className={"error"}>{errors.contact?.message}</span>
      </label>
      <label>
        Selecionar módulo
        <InputContainer>
          <select
            {...register("course_module")}
          >
            <option value="Primeiro módulo">Primeiro módulo</option>
            <option value="Segundo módulo">Segundo módulo</option>
            <option value="Terceiro módulo">Terceiro módulo</option>
            <option value="Quarto módulo">Quarto módulo</option>
            <option value="Quinto módulo">Quinto módulo</option>
            <option value="Sexto módulo">Sexto módulo</option>
          </select>
        </InputContainer>
        <span className={"error"}>{errors.course_module?.message}</span>
      </label>
      <button type="submit">
        cadastrar
      </button>
    </FormRegister>
  );
}
export default RegisterForm;
