import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm";
import{Container} from "./style"
function Register() {
  const history = useHistory()
  function returnLogin(){
    history.push('/')
  }

  return (
    <Container >
      <Header button={"Voltar"} hasButton={true} func={returnLogin}/>
      <RegisterForm/>
    </Container>
  );
}
export default Register;
