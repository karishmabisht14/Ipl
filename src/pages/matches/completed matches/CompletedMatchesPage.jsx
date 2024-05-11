import MatchesList from "./MatchesList";
import Filters from "./Filters";
import Search from "./Search";
import Seasons from "./Seasons";
import { useState } from "react";
import { Col, Row, Card, Divider } from "antd";
import background from "../../../image/background.svg";

const CompletedMatchesPage = () => {
  const [searchObj, setSearchObj] = useState({ season: 2024 });

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
          <Search searchObj={searchObj} setSearchObj={setSearchObj} />
        </Col>
        <Col span={5} style={{ marginTop: 8, paddingLeft: "190px" }}>
          <Seasons searchObj={searchObj} setSearchObj={setSearchObj} />
        </Col>
      </Row>
      <Divider plain></Divider>
      <Row>
        <Col span={1}></Col>
        <Col span={4}>
          <Filters searchObj={searchObj} setSearchObj={setSearchObj} />
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
