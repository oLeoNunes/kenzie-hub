import {Tech, TechContainer} from "./styles"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { BsTrash } from "react-icons/bs";
import api from "../../services/api";
import { toast } from "react-toastify";
import { SyntheticEventData } from "react-dom/test-utils";

function Techs() {
  const {user, attUser} = useContext(AuthContext);
  async function deleteTech(id:string) {
    console.log(id)
    const response = await api
    .delete(`/users/techs/${id}`)
    .then((res) => toast.success("Deletado"));
    attUser()
  }
  
  
    const teches = user?.techs.map((tech) => (
      <Tech key={tech.id}>
      <p>{tech.title}</p>
      <p>{tech.status}</p>
      <button id={tech.id} onClick={()=>{deleteTech(tech.id)}}>
        <BsTrash />
      </button>
    </Tech>
  ));
  
  return <TechContainer >{teches}</TechContainer>;

}
export default Techs;
