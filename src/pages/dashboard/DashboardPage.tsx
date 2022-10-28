import Dashboard from "../../components/dashboard";
import Header from "../../components/Header";
import { DashboardContainer } from "./style";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function DashboardPage() {
  const history = useHistory();
  const { user, loading} = useContext(AuthContext);

  function logout() {
    window.localStorage.clear();
    history.push("/");
  }

  if (loading) return <div>Carregando...</div>;
  return user ? (
    <DashboardContainer>
      <Header hasButton={true} button={"sair"} func={logout} />
      <Dashboard />
    </DashboardContainer>
  ) : (
    <>
    {history.push("/")}
    </>
  );
}
export default DashboardPage;
