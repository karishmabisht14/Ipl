import { Button, Dropdown, Space, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
const Seasons = ({ searchObj, setSearchObj }) => {
  const items = [
    {
      label: "2024",
      key: "2024",
    },
    {
      label: "2023",
      key: "2023",
    },
  ];

  return (
    <Dropdown
      overlay={
        <Menu onClick={(e) => setSearchObj({ ...searchObj, season: e.key })}>
          {items.map((item) => (
            <Menu.Item
              className="seasons"
              style={{
                borderBottom: "1px solid #d9d9d9",
                borderRadius: "0px",
              }}
              key={item.key}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      }
    >
      <Button
        style={{
          border: "none",
          position: "absolute",
          marginLeft: "-105px",
          backgroundColor: "#ef4123",
          borderRadius: "50px",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        <Space>
          Seasons <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default Seasons;
