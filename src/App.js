import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Routes, Route } from "react-router-dom";
import HomeBeforeLogin from "./Components/Pages/HomeBeforeLogin";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  // const [currentForm, setCurrentForm] = useState("register");
  // const toggleForm = (formName) => {
  //   console.log(formName);
  //   setCurrentForm((prev) => (prev = formName));
  // };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeBeforeLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* {currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} */}
    </>
  );
}

export default App;
