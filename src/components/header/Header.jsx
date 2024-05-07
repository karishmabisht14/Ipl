import React from "react";
import { Layout, theme, Button, Menu } from "antd";
import { AuthData } from "../../auth/AuthWrapper";
import { useNavigate, Link } from "react-router-dom";
import { isAuthorisedRoute } from "../../auth/RenderNavigation";
import { items } from "./navbar/Navigation";
import Navbar from "./navbar/Navbar";

//const labels = ["Home", "Movies", "Events", "Artist", "Shows"];

const Header = () => {
  const nav = useNavigate();
  const { user, logout } = AuthData();

  // console.log('location from state', user)

  const list = items.map((r, i) => {
    if (isAuthorisedRoute(user, r, true)) return { key: r.path, label: r.name };
  });

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigateUrl = (e) => {
    console.log("click ", e);
    nav(e.key);
    //setCurrent(e.key);
  };

  return (
    <Layout>
      <Navbar />
      <Menu
        // theme="dark"
        onClick={navigateUrl}
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={list}
        style={{
          flex: 0.5,
          minWidth: 0,
          backgroundColor: "GhostWhite",
          marginLeft: "90px",
        }}
      />

      <div
        style={{
          flex: 0.6,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {user.isAuthenticated ? (
          <div className="menuItem">
            <Link to={"#"} onClick={logout}>
              <Button style={{ backgroundColor: "rgb(248,68,100)" }}>
                Log out
              </Button>
            </Link>
          </div>
        ) : (
          <div className="menuItem">
            <Link to={"login"}>
              <Button style={{ backgroundColor: "rgb(248,68,100)" }}>
                Log in
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};
export default Header;
