import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp.js";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
