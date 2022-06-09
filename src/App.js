import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import PrivateOutlet from "./Authentication/PrivateOutlet/PrivateOutlet";
import About from "./Pages/About/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
