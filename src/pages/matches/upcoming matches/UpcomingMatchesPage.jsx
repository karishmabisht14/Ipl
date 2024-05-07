import MatchesList from "./MatchesList";
import Filters from "./Filters";
import moment from "moment";
import Search from "./Search";
import CreateUpdateMatchForm from "./CreateUpdateMatchForm";
import { useRef, useState } from "react";
import { Col, Row, Card, Divider, Form } from "antd";
import background from "../../../image/background.svg";
import CompletedMatchForm from "../upcoming matches/CompletedMatchForm";

const UpcomingMatchesPage = () => {
  const [searchObj, setSearchObj] = useState({});
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [completedModalOpen, setCompletedModalOpen] = useState(false);
  const [matchesUpdatedCount, setMatchesUpdatedCount] = useState(null);
  const [form] = Form.useForm();

  let payload = useRef({
    operation: "",
    payload: {},
  });

  const initFormData = () => {
    if (payload.current.data.match_id) {
      payload.current.data = {
        ...payload.current.data,
        date: moment(payload.current.data.date, "MMM, ddd DD"),
        time: moment(payload.current.data.time, "hh:mm A"),
      };
      form.setFieldsValue(payload.current.data);
    } else {
      form.resetFields();
    }
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
          <Search searchObj={searchObj} setSearchObj={setSearchObj} />
        </Col>
      </Row>
      <Divider plain></Divider>
      <Row>
        <Col span={1}></Col>
        <Col span={4}>
          <Filters searchObj={searchObj} setSearchObj={setSearchObj} />
        </Col>
        <Col span={18}>
          <Card style={{ marginBottom: "25px" }}>
            <CreateUpdateMatchForm
              form={form}
              payload={payload}
              isFormModalOpen={isFormModalOpen}
              setIsFormModalOpen={setIsFormModalOpen}
              matchesUpdatedCount={matchesUpdatedCount}
              setMatchesUpdatedCount={setMatchesUpdatedCount}
            />
            <CompletedMatchForm
              form={form}
              payload={payload}
              completedModalOpen={completedModalOpen}
              setCompletedModalOpen={setCompletedModalOpen}
              matchesUpdatedCount={matchesUpdatedCount}
              setMatchesUpdatedCount={setMatchesUpdatedCount}
            />
            <MatchesList
              searchObj={searchObj}
              setIsFormModalOpen={setIsFormModalOpen}
              setCompletedModalOpen={setCompletedModalOpen}
              payload={payload}
              initFormData={initFormData}
              matchesUpdatedCount={matchesUpdatedCount}
              setMatchesUpdatedCount={setMatchesUpdatedCount}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UpcomingMatchesPage;
