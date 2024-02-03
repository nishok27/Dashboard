import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Fileupload from "./components/Fileupload";
import GoogleAuth from "./components/auth/GoogleAuth";
import Login from "./components/signin/Login";
import Signup from "./components/signin/Signup";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const user = localStorage.getItem("email");
      setEmail(user);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <>
                <div className="sideContent">
                  <Sidebar />
                </div>
                <div className="navContent">
                  <Navbar /> <Fileupload />
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
