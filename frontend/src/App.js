import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import DescribeSymptoms from "./pages/DescribeSymptoms";
import PersonalInformation from "./pages/PersonalInformation";
import Settings from "./pages/Settings";
import { useState } from "react";
import NavbarNoAuth from "./components/Navbar/NavbarNoAuth";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      {isAuth ? <NavbarNoAuth /> : <Navbar />}
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/describe-symptoms" element={<DescribeSymptoms />} />
          <Route
            path="/personal-information"
            element={<PersonalInformation />}
          />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
