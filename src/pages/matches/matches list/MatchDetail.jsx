import { Row, Col, Typography, Flex, Image } from "antd";
import moment from "moment";
import versus from "../../../image/versus.png";
import { SunFilled, MoonFilled } from "@ant-design/icons";

const { Text } = Typography;

const MatchDetail = ({ match }) => {
  let matchDate = moment(match.date).format("MMM, ddd DD");
  let matchTime = moment(match.time, ["HH:mm"]).format("hh:mm A");
  return (
    <>
      {match.status === "completed" ? (
        <>
          <Row>
            <Col span={7}>
              <Text
                style={{
                  fontSize: "13px",
                  border: "1px solid #367C3D",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  fontWeight: "500",
                }}
              >
                {match.match_no.toUpperCase()}
              </Text>
            </Col>
            <Col span={17}>
              <Text
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "24px",
                }}
              >
                {match.venue}
              </Text>
            </Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={7}></Col>
            <Col span={17}>
              <Text
                style={{
                  fontSize: "11px",
                  color: "#6F6F6F",
                }}
              >
                {`${matchDate},`}
              </Text>
              <Text
                style={{
                  fontSize: "11px",
                  color: "#6F6F6F",
                  padding: "0px 4px",
                }}
              >
                {`${matchTime.toLowerCase()} IST`}
              </Text>
            </Col>
          </Row>
          <Row>
            <Col span={7}>
              <Text
                style={{
                  display: "block",
                  width: "150px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {match.match_conclusion}
              </Text>
            </Col>
            <Col span={17}>
              <div style={{ width: "430px" }}>
                <Flex>
                  <div style={{ display: "flex", width: "270px" }}>
                    <Image
                      src={match.team_A_logo}
                      alt="team logo"
                      width={50}
                      preview={false}
                    />
                    <Text
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        marginTop: "-4px",
                        padding: "0px 10px",
                        lineHeight: "14px",
                        color: "#11141C",
                        width: "150px",
                        textAlign: "left",
                      }}
                    >
                      {match.team_A.toUpperCase()}
                      <span
                        style={{
                          display: "block",
                          fontSize: "14px",
                          fontWeight: "bold",
                          marginTop: "-8px",
                          lineHeight: "30px",
                          color: "#11141C",
                        }}
                      >
                        {`${match.team_A_score}/${match.team_A_wickets}`}
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontSize: "11px",
                          marginTop: "-8px",
                          lineHeight: "19px",
                          fontWeight: "500",
                          color: "#7b7b7b",
                        }}
                      >
                        {`(${match.team_A_overs.toFixed(1)} OV )`}
                      </span>
                    </Text>
                  </div>
                  <div style={{ width: "50px", textAlign: "center" }}>
                    <Image
                      src={versus}
                      width={30}
                      height={50}
                      alt="versus"
                      preview={false}
                    />
                  </div>

                  <div style={{ display: "flex", width: "270px" }}>
                    <Text
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        marginTop: "-4px",
                        padding: "0px 10px",
                        lineHeight: "14px",
                        color: "#11141C",
                        width: "180px",
                        textAlign: "right",
                      }}
                    >
                      {match.team_B.toUpperCase()}
                      <span
                        style={{
                          display: "block",
                          fontSize: "14px",
                          marginTop: "-8px",
                          fontWeight: "bold",
                          lineHeight: "30px",
                          color: "#11141C",
                        }}
                      >
                        {`${match.team_B_score}/${match.team_B_wickets}`}
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontSize: "11px",
                          marginTop: "-8px",
                          lineHeight: "19px",
                          fontWeight: "500",
                          color: "#7b7b7b",
                        }}
                      >
                        {`(${match.team_B_overs.toFixed(1)} OV )`}
                      </span>
                    </Text>
                    <Image
                      src={match.team_B_logo}
                      alt="team logo"
                      width={50}
                      preview={false}
                    />
                  </div>
                </Flex>
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row>
            <Col span={7}>
              <Text
                style={{
                  fontSize: "13px",
                  border: "1px solid #FF783E",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  fontWeight: "500",
                }}
              >
                {match.match_no.toUpperCase()}
              </Text>
            </Col>
            <Col span={17}>
              <Text
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "24px",
                }}
              >
                {match.venue}
              </Text>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col span={7}>
              <Text
                style={{
                  display: "block",
                  width: "150px",
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "rgba(17, 20, 28, 1)",
                }}
              >
                {`${matchDate.toUpperCase()}`}
              </Text>
              <Text
                style={{
                  display: "block",
                  width: "150px",
                  fontSize: "13px",
                  fontWeight: "400",
                  color: "rgba(17, 20, 28, 0.7)",
                }}
              >
                {matchTime < "05:00 pm" ? (
                  <SunFilled style={{ paddingRight: "5px" }} />
                ) : (
                  <MoonFilled style={{ paddingRight: "5px" }} />
                )}
                {`${matchTime.toLowerCase()} IST`}
              </Text>
            </Col>
            <Col span={17}>
              <div style={{ width: "430px" }}>
                <Flex>
                  <div style={{ display: "flex", width: "270px" }}>
                    <Image
                      src={match.team_A_logo}
                      alt="team logo"
                      width={50}
                      preview={false}
                    />
                    <Text
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        marginTop: "10px",
                        padding: "0px 10px",
                        lineHeight: "14px",
                        color: "#11141C",
                        width: "150px",
                        textAlign: "left",
                      }}
                    >
                      {match.team_A.toUpperCase()}
                    </Text>
                  </div>
                  <div style={{ width: "50px", textAlign: "center" }}>
                    <Image
                      src={versus}
                      width={30}
                      height={50}
                      alt="versus"
                      preview={false}
                    />
                  </div>

                  <div style={{ display: "flex", width: "270px" }}>
                    <Text
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        marginTop: "10px",
                        padding: "0px 10px",
                        lineHeight: "14px",
                        color: "#11141C",
                        width: "180px",
                        textAlign: "right",
                      }}
                    >
                      {match.team_B.toUpperCase()}
                    </Text>
                    <Image
                      src={match.team_B_logo}
                      alt="team logo"
                      width={50}
                      preview={false}
                    />
                  </div>
                </Flex>
              </div>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default MatchDetail;
