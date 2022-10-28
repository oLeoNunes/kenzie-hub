import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Techs from "../techs";
import AddTech from "../../AddTech";
import { DashContainer } from "./style";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <DashContainer>
      <div className="headerDashboard">
        <h1>Olá, {user?.name}</h1>
        <span>{user?.course_module}</span>
      </div>
      <main>
        <div className="headerTech">
          <h1>Tecnologias</h1>
          <AddTech />
        </div>
        <Techs />
      </main>
    </DashContainer>
  );
}
export default Dashboard;
