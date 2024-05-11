import { changeLanguage, languages } from "../../utils/internationalisation";
import { Space } from "antd";
import { GlobalOutlined, DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button } from "antd";

const LanguageSelector = () => {
  const handleMenuClick = (e) => {
    changeLanguage(e.key);
  };

  const languageMenu = (
    <Menu
      style={{
        // width: 100,
        background: "rgb(6, 30, 89)",
      }}
      onClick={handleMenuClick}
    >
      {languages.map((lng) => (
        <Menu.Item
          key={lng.code}
          style={{
            background: "rgb(6, 30, 89)",
            color: "white",
            opacity: "0.4",
          }}
        >
          {lng.lang}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={languageMenu} placement="bottomRight">
      <Button
        style={{
          background: "none",
          border: "none",
          color: "white",
          paddingTop: 11,
          opacity: 0.4,
          fontWeight: "bold",
        }}
      >
        <Space>
          <GlobalOutlined />
          Language
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default LanguageSelector;
