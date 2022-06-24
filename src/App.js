import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Header from "./Pages/Header/Header";
import AuthProvider from "./Authentication/Context/AuthProvider";
import PrivateOutlet from "./Authentication/PrivateOutlet/PrivateOutlet";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
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
    </AuthProvider>
  );
}

export default App;
