import "../../../index.css";
import { Col, Row, Typography, DatePicker, Image, Select } from "antd";
import { TranslateFunction } from "../../../utils/internationalisation";

const { Text } = Typography;

const Filters = ({ searchObj, setSearchObj }) => {
  const dropdown = TranslateFunction("dropdown");
  const labels = TranslateFunction("labels");

  const venues = [
    "Narendra Modi Stadium, Ahmedabad",
    "MA Chidambaram Stadium, Chennai",
    "M Chinnaswamy Stadium, Bengaluru",
    "PCA New Stadium, Mullanpur",
    "Eden Gardens, Kolkata",
    "Sawai Mansingh Stadium, Jaipur",
  ];

  const teams = dropdown("teams");

  return (
    <>
      <Row style={{ marginBottom: 40 }}>
        <Col span={18}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {labels("Venue")}
          </Text>
          <Select
            mode="multiple"
            allowClear
            placeholder={labels("Select Venue")}
            value={searchObj.venue}
            onChange={(venue) => {
              setSearchObj({ ...searchObj, venue });
            }}
            style={{ width: "100%" }}
            options={venues.map((item) => ({
              value: item,
              label: item.toUpperCase(),
            }))}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: 40 }}>
        <Col span={18}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {labels("Teams")}
          </Text>
          <Select
            mode="multiple"
            allowClear
            placeholder={labels("Select Teams")}
            value={searchObj.team}
            onChange={(team) => {
              setSearchObj({ ...searchObj, team });
            }}
            style={{ width: "100%" }}
            options={teams.map((item) => ({
              value: item.value,
              label: (
                <>
                  <Image src={item.img} width={30} alt="logo" preview={false} />{" "}
                  {item.label}
                </>
              ),
            }))}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: 40 }}>
        <Col span={18}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {labels("Date")}
          </Text>
          <DatePicker
            multiple
            placeholder={labels("Select Dates")}
            onChange={(date, dateString) => {
              setSearchObj({ ...searchObj, date: dateString });
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Filters;
