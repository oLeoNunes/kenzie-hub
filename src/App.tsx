import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Routes from "./Routes";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>      
      <div className="App">
          <Routes />
        <ToastContainer />
      </div>
    </AuthProvider>
  );
}

export default App;
