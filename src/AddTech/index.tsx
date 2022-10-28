import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import {ModalContainer} from "./styles"
// import Modal from "react-modal";
import api from "../services/api";
import { BsPlus } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Modal.setAppElement("#root");

interface ITech{
  id:string
  title:string
  status:string
}


function AddTech() {
  const {attUser } = useContext(AuthContext);
  const token = window.localStorage.getItem("@TOKEN");
  api.defaults.headers.common.authorization = `Bearer ${token}`;


  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  function addTech(data:ITech) {
    setModalIsOpen(false);
    const response = api
      .post(`/users/techs`, data)
      .then((res) => {
        toast.success("tech cadastrada com sucesso");
        attUser()
      })
      .catch((err) => toast.error(err.response.data.message));
  }
  const formSchema = yup.object().shape({
    title: yup.string().required("Tecnologia obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITech>({
    resolver: yupResolver(formSchema),
  });

  return (
    <ModalContainer >
      <button className={"openModal"} onClick={openModal}>
        <BsPlus />
      </button>
      <div
        className={"modal"}
        style={{display: modalIsOpen?"flex" : "none"}}
      >
        <div className={"header"}>
          <h1>Cadastrar Tecnologia</h1>
          <button onClick={closeModal}>X</button>
        </div>
        <form onSubmit={handleSubmit(addTech)} className={"form"}>
          <label className={"label"}>
            nome
            <input
              className={"inputTech"}
              type="text"
              {...register("title")}
              placeholder="Digite a Tecnologia"
            />
            <span>{errors.title?.message}</span>
          </label>
          <label>
            Selecionar status
            <select className={"selectTech"} {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </label>
          <button className={"btnAddTech"} type="submit">
            Cadastrar Tecnologia
          </button>
        </form>
      </div>
    </ModalContainer>
  );
}
export default AddTech;
