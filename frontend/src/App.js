import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import QuTorchHG from "./pages/QuTorch-HG";
import QuGANHG from "./pages/QuGAN-HG";
import Settings from "./pages/Settings";
import { useState } from "react";
import NavbarNoAuth from "./components/Navbar/NavbarNoAuth";

function App() {
  const [isAuth, setIsAuth] = useState(true); //change state to true to see navbar items, leave blank to see noAuth bar
  return (
    <div className="App">
      {!isAuth & (window.pathname !== "/login") ? <NavbarNoAuth /> : <Navbar />}
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="https://github.com/shaunsingh/QML-PM/blob/main/prototype/QMLImageClassification.ipynb"/>
          <Route path="https://github.com/shaunsingh/QML-PM/blob/main/prototype/qgan_example.ipynb"/>
          <Route path="/settings" element={<Settings setIsAuth={setIsAuth}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
