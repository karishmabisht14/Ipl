import { Dropdown, Menu, Layout, Image, Typography, Button } from "antd";
import React from "react";
import bgg from "../../../image/header-logo-bomb-left.svg";
import {
  InstagramOutlined,
  XOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { items } from "./Navigation";
import { AuthData } from "../../../auth/AuthWrapper";
import { isAuthorisedRoute } from "../../../auth/RenderNavigation";
import LanguageSelector from "../../../pages/home/LanguageSelector";
import { TranslateFunction } from "../../../utils/internationalisation";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  const labels = TranslateFunction("labels");
  const { user, logout } = AuthData();

  const list = items.map((r, i) => {
    if (isAuthorisedRoute(user, r, true))
      return r.submenu
        ? { key: r.path, label: r.label, submenu: r.submenu }
        : { key: r.path, label: r.label };
  });
  console.log("llllllllll", list);

  const subMenu = (submenu) => (
    <Menu style={{ backgroundColor: "#19398a" }}>
      {submenu.map((item) => (
        <Menu.Item key={item.key} style={{ color: "white" }}>
          <Link to={item.path}>{labels(item.label)}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <Header
        style={{
          height: 45,
          backgroundColor: "#061e59",
          display: "flex",
        }}
      >
        <a
          href="https://www.wplt20.com/?_gl=1*1bfjc6i*_ga*MTQwOTMyMTAzNy4xNzEwMzIwOTc1*_ga_VHLTEJRMR0*MTcxMjgyNDAzMS4zNC4xLjE3MTI4MzA2NjMuMTAuMC4w"
          alt="BCCI LOGO"
          style={{
            paddingLeft: 55,
            fontFamily: "Rubik, sans-serif",
            fontSize: "90%",
            lineHeight: 2.9,
            color: "white",
          }}
        >
          <Image
            preview={false}
            style={{ width: 40, paddingRight: 10 }}
            src="assets\home\BCCI_logo.png"
          />
          BCCI.TV
        </a>

        <a
          href="https://www.wplt20.com/?_gl=1*1a9oyce*_ga*MTQwOTMyMTAzNy4xNzEwMzIwOTc1*_ga_VHLTEJRMR0*MTcxMjgyNDAzMS4zNC4xLjE3MTI4MzM1OTAuNTAuMC4w"
          style={{ lineHeight: 2.3, paddingLeft: 40 }}
        >
          <Image preview={false} src="assets\home\wpl_logo.svg" />
        </a>
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: 40,
          }}
        >
          <LanguageSelector />
          <Typography
            style={{
              color: "white",
              paddingTop: 15,
              lineHeight: 1,
              fontWeight: "bold",
              opacity: 0.4,
              paddingRight: "10px",
            }}
          >
            Follow Us
          </Typography>

          <a href="https://www.instagram.com">
            <InstagramOutlined
              style={{
                color: "white",
                fontSize: "24px",
                opacity: 0.4,
                paddingRight: "10px",
              }}
            />
          </a>
          <a href="https://twitter.com/?lang=en">
            <XOutlined
              style={{
                color: "white",
                fontSize: "24px",
                opacity: 0.4,
                paddingRight: "10px",
              }}
            />
          </a>
          <a href="https://www.facebook.com">
            <FacebookOutlined
              style={{
                color: "white",
                fontSize: "24px",
                opacity: 0.4,
                paddingRight: "10px",
              }}
            />
          </a>
        </div>
      </Header>

      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#19398a",
        }}
      >
        <div style={{ marginLeft: "-100px" }}>
          <div
            style={{
              backgroundImage: `url(${bgg})`,
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "380px",
              backgroundSize: "100% auto",
              backgroundPosition: " left 5px",
              position: "absolute",
            }}
          >
            {" "}
          </div>
          <Link to={"/"}>
            {" "}
            <Image
              preview={false}
              style={{ width: 95, marginLeft: 145 }}
              width={200}
              src="assets\home\logo.png"
            />
          </Link>
        </div>

        <Menu
          mode="horizontal"
          style={{
            fontSize: 20,
            // display: "flex",
            // justifyContent: "space-",
            // padding: "0 60px",
            minWidth: 0,
            width: "100%",
            paddingLeft: 350,
            backgroundColor: "#19398a",
            transition: "none",
          }}
        >
          {list.map(
            (item) =>
              item && (
                <React.Fragment key={item.key}>
                  {item.label === "Matches" ? (
                    (console.log("okkkkkk"),
                    (
                      <Dropdown overlay={subMenu(item.submenu)} key={item.key}>
                        <Link
                          to={item.key}
                          className="ant-dropdown-link"
                          // onClick={navigateUrl}
                          style={{
                            // marginTop: "1px",
                            padding: "0 50px",
                            color: "white",
                          }}
                        >
                          {labels(item.label)}
                        </Link>
                      </Dropdown>
                    ))
                  ) : (
                    <Link to={item.key}>
                      <Menu.Item
                        key={item.key}
                        style={{
                          padding: "0px 50px",
                          color: "white",
                          backgroundColor: "transparent",
                        }}
                      >
                        {labels(item.label)}
                      </Menu.Item>
                    </Link>
                  )}
                </React.Fragment>
              )
          )}

          <div
            style={{
              // marginLeft: "30%",
              position: "absolute",
              right: 48,
            }}
          >
            {user.isAuthenticated ? (
              <div className="menuItem">
                <Link to={"#"} onClick={logout}>
                  <Button
                    style={{ backgroundColor: "#19398a", color: "white" }}
                  >
                    LOGOUT
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="menuItem">
                <Link to={"login"}>
                  <Button
                    style={{
                      backgroundColor: "#19398a",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    LOGIN
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </Menu>
      </Header>
    </>
  );
};
export default Navbar;
