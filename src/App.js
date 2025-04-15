import { useState, useEffect } from "react";
// Add useNavigate to import
import { Outlet, useNavigate, Navigate} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
    // Add code to mock user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () =>{
    setIsLoggedIn(true);
  }

  const logout = () =>{
    setIsLoggedIn(false);
  };

    // Add programmatic navigation for login and logout
  useEffect(() =>{
    if (isLoggedIn) {
        // navigates to Home route if user is logged in
      navigate("/");
    } else {
        // navigates to Login route if user is logged out
      navigate("/login");
    };
  }, [isLoggedIn]);

  return (
    <div className="app">
      {isLoggedIn ? <NavBar logout={logout}  /> : null}
        { /*Pass login function to Outlet as context */}
      <Outlet context={login}/>
    </div>
  );
};

export default App