import { createContext, useContext, useState } from "react";
import { RenderRoutes } from "./RenderNavigation";
import users from "../services/users/users.json";
import FooterFile from "../components/footer/FooterFile";
import { BrowserRouter } from "react-router-dom";
// import MainHeader from "../components/header/MainHeader";
import Navbar from "../components/header/navbar/Navbar";

console.log("Users List", users);

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });

  console.log("AuthWrapper User", user);

  const login = (userName, password) => {
    return new Promise((resolve, reject) => {
      let validUser = users.find(
        (user) => password === user.password && userName === user.userName
      );
      if (validUser) {
        setUser({
          name: userName,
          permissions: validUser.permissions,
          isAuthenticated: true,
        });
        resolve("success");
      } else {
        reject("Incorrect Username or Password");
      }
    });
  };
  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <BrowserRouter>
        <Navbar />
        <RenderRoutes />
        <FooterFile />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};
