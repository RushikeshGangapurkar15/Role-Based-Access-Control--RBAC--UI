import React, { useContext, useEffect, useState } from "react";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import CreateMember from "./Pages/CreateMember";
import Edit from "./Pages/Edit";
import { getLocalStorage, setLocalStorage } from "./Utils/localStorage";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  const [user, setUser] = useState();
  const authData = useContext(AuthContext);
  // useEffect(() => {
  //   setLocalStorage();
  // }, []);

  const handleLogin = (email, password) => {
    const foundUser = authData?.members?.find(
      (e) => e.email === email && e.password === password
    );

    if (foundUser) {
      setUser(foundUser);
    } else {
      alert("Login Failed");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <Dashboard user={user} authData={authData} />
      )}
    </>
  );
};

export default App;
