import { Layout } from "antd";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { getTeams } from "../../services/teams/teams";
import { Image, Typography } from "antd";
import { Menu } from "antd";
import bg from "../../image/bottom-section-bg.svg";
import {
  InstagramOutlined,
  XOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const { Footer } = Layout;
const FooterFile = () => {
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    // Fetch teams data when component mounts
    getTeams().then((teams) => setTeams(teams));
  }, []);

  return (
    <Footer
      style={{ backgroundColor: "#11141C", backgroundImage: `url(${bg})` }}
    >
      <Row
        gutter={24}
        style={{
          backgroundColor: "#081e40",
          width: "100%",
          height: "auto",
          padding: "15px 0",
          borderRadius: "25px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Col span={7}>
          <h2 style={{ color: "#fef9c4", marginLeft: "45px" }}>
            Title Sponsor
          </h2>
          <a
            href="https://www.tata.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              preview={false}
              width={130}
              src="\assets\home\tataLogo.svg"
              style={{ marginLeft: "50px" }}
            />
          </a>
        </Col>
        <Col span={10}>
          <h2 style={{ color: "#fef9c4", textAlign: "center" }}>
            Associate Partner
          </h2>
          <a
            href="https://www.my11circle.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              preview={false}
              width={130}
              src="\assets\home\11Circle.svg"
              style={{ marginLeft: "20px" }}
            />
          </a>
          <a
            href="https://www.angelone.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              preview={false}
              style={{ marginLeft: "60px" }}
              width={130}
              src="\assets\home\angelone.svg"
            />
          </a>
          <a
            href="https://www.rupay.co.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              style={{ marginLeft: "90px" }}
              preview={false}
              width={100}
              src="\assets\home\rupayLogo.svg"
            />
          </a>
        </Col>
        <Col span={7}>
          <h2 style={{ color: "#fef9c4" }}>
            Official Digital Streaming Partner
          </h2>
          <a
            href="https://www.jiocinema.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              preview={false}
              width={130}
              style={{ marginLeft: "80px" }}
              src="\assets\home\jioCinema.svg"
            />
          </a>
        </Col>
      </Row>

      <Row>
        <Col span={6}>
          <h3 style={{ color: "white" }}>TEAMS</h3>
          {teams && (
            <ul style={{}}>
              {teams.map((team, index) => (
                <li
                  key={index}
                  style={{
                    color: "rgba(255, 255, 255, .6)",
                    fontSize: "13px",
                    padding: "8px 0",
                    textTransform: "capitalize",
                  }}
                >
                  {team.team_name}
                </li>
              ))}
            </ul>
          )}
        </Col>

        <Col span={6}>
          {" "}
          <h3 style={{ color: "white" }}>ABOUT</h3>
          <Typography style={{ color: "white" }}>
            <strong style={{ fontSize: "20px" }}>Address: </strong>
            BCCI-IPL 4th Floor, Cricket Centre. Wankhede Stadium 'D' Road,
            Churchgate Mumbai - 400020 India <br />
            <strong style={{ fontSize: "20px" }}>Contact us :</strong>
            +91 22 67598800 +91 22 61580300
          </Typography>
        </Col>

        <Col span={6}>
          <h3 style={{ color: "white" }}>CONTACT US</h3>
          <Menu theme="dark">
            <Menu.Item key="contact-us">contact us</Menu.Item>
            <Menu.Item key="privacy">Privacy and Policy</Menu.Item>
          </Menu>
        </Col>
        {/* <Col span={6}><h3 style={{ color: 'white' }}>CONTACTS US</h3></Col> */}

        <Col span={6}>
          <h3 style={{ color: "white" }}>SOCIAL MEDIA</h3>
          <div>
            <a href="https://www.facebook.com">
              <FacebookOutlined
                style={{
                  color: "white",
                  fontSize: "24px",
                  marginRight: "10px",
                }}
              />
            </a>
            <a href="https://www.google.com">
              <GoogleOutlined
                style={{
                  color: "white",
                  fontSize: "24px",
                  marginRight: "10px",
                }}
              />
            </a>
            <a href="https://www.instagram.com">
              <InstagramOutlined
                style={{
                  color: "white",
                  fontSize: "24px",
                  marginRight: "10px",
                }}
              />
            </a>
            <a href="https://twitter.com/?lang=en">
              <XOutlined
                style={{
                  color: "white",
                  fontSize: "24px",
                  marginRight: "10px",
                }}
              />
            </a>
          </div>
        </Col>
      </Row>
    </Footer>
  );
};
export default FooterFile;
