import "../../../index.css";
import { Col, Row, Typography, DatePicker, Image, Select } from "antd";
import CSK from "../../../image/matches/teamsLogo/CSK.png";
import DC from "../../../image/matches/teamsLogo/DC.png";
import GT from "../../../image/matches/teamsLogo/GT.png";
import KKR from "../../../image/matches/teamsLogo/KKR.png";
import LSG from "../../../image/matches/teamsLogo/LSG.png";
import MI from "../../../image/matches/teamsLogo/MI.png";
import PBKS from "../../../image/matches/teamsLogo/PBKS.png";
import RCB from "../../../image/matches/teamsLogo/RCB.png";
import RR from "../../../image/matches/teamsLogo/RR.png";
import SRH from "../../../image/matches/teamsLogo/SRH.png";

const { Text } = Typography;

const Filters = ({ searchObj, setSearchObj }) => {
  const venues = [
    "Narendra Modi Stadium, Ahmedabad",
    "MA Chidambaram Stadium, Chennai",
    "M Chinnaswamy Stadium, Bengaluru",
    "PCA New Stadium, Mullanpur",
    "Eden Gardens, Kolkata",
    "Sawai Mansingh Stadium, Jaipur",
  ];

  const teams = [
    {
      value: "Chennai Super Kings",
      img: CSK,
      label: "CSK",
    },
    { value: "Gujarat Titans", img: GT, label: "GT" },
    { value: "Mumbai Indians", img: MI, label: "MI" },
    { value: "Lucknow Super Giants", img: LSG, label: "LSG" },
    { value: "Royal Challengers Bangalores", img: RCB, label: "RCB" },
    { value: "Punjab Kings", img: PBKS, label: "PBKS" },
    { value: "Delhi Capitals", img: DC, label: "DC" },
    { value: "Kolkata Knight Riders", img: KKR, label: "KKR" },
    { value: "Sunrise Hyderabad", img: SRH, label: "SRH" },
    { value: "Rajasthan Royals", img: RR, label: "RR" },
  ];

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
            Venue
          </Text>
          <Select
            mode="multiple"
            allowClear
            placeholder="Select Venue"
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
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Teams</Text>
          <Select
            mode="multiple"
            allowClear
            placeholder="Select Teams"
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
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Date</Text>
          <DatePicker
            multiple
            placeholder="Select Dates"
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
