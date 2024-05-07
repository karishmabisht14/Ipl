import "../../../index.css";
import { Button, Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Search = ({ searchObj, setSearchObj }) => {
  return (
    <>
      <Input
        placeholder="Search here"
        style={{
          width: 500,
          margin: "0px auto",
          position: "relative",
          borderRadius: "50px",
        }}
        value={searchObj.search}
        onChange={(e) => setSearchObj({ ...searchObj, search: e.target.value })}
      />
      <Button
        style={{
          border: "none",
          position: "absolute",
          marginLeft: "-105px",
          backgroundColor: "#ef4123",
          borderRadius: "50px",
        }}
      >
        <SearchOutlined
          style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}
        />
        <Text style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>
          Search
        </Text>
      </Button>
    </>
  );
};

export default Search;
