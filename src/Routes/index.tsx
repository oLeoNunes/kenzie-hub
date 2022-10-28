import { Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import DashboardPage from "../pages/dashboard/DashboardPage";
import Register from "../pages/register/register";

function Routes() {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Login/>
      </Route>
      <Route path={"/register"}>
        <Register />
      </Route>
      <Route path={"/dashboard"}>
        <DashboardPage/>
      </Route>
    </Switch>
  );
}
export default Routes;
