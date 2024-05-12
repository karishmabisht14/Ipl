import MatchesList from "./MatchesList";
import Filters from "./Filters";
import Search from "./Search";
import Seasons from "./Seasons";
import { useState } from "react";
import { Col, Row, Card, Divider } from "antd";
import background from "../../../image/background.svg";
import { useSearchParams } from "react-router-dom";

const CompletedMatchesPage = () => {
  const queryParams = { season: 2024 };

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchObj, setSearchObj] = useState(queryParams);
  console.log("searchObj", searchObj);

  searchParams.forEach((value, key) => {
    if (Array.isArray(value)) {
      queryParams[key] = value.split("|");
    } else queryParams[key] = value;
  });
  const setSearchUrl = (searchObject) => {
    const newSearchParams = new URLSearchParams();
    Object.entries(searchObject).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        newSearchParams.append(key, value.join("|"));
      } else {
        newSearchParams.append(key, value);
      }
    });
    setSearchObj(searchObject);
    setSearchParams(newSearchParams);
  };
  return (
    <div
      style={{
        backgroundImage: "url(" + background + ")",
      }}
    >
      <Row style={{ marginTop: 50 }}>
        <Col span={1}></Col>
        <Col span={4}></Col>
        <Col span={13} style={{ marginTop: 8, paddingLeft: "120px" }}>
          <Search searchObj={searchObj} setSearchObj={setSearchUrl} />
        </Col>
        <Col span={5} style={{ marginTop: 8, paddingLeft: "190px" }}>
          <Seasons searchObj={searchObj} setSearchObj={setSearchUrl} />
        </Col>
      </Row>
      <Divider plain></Divider>
      <Row>
        <Col span={1}></Col>
        <Col span={4}>
          <Filters searchObj={searchObj} setSearchObj={setSearchUrl} />
        </Col>
        <Col span={18}>
          <Card style={{ marginBottom: "25px", padding: "24px" }}>
            <MatchesList searchObj={searchObj} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CompletedMatchesPage;
