import bg from "../../../../src/image/teams-logo-cover-img.svg"
import { Card, Col, Row, Typography, Divider } from 'antd';

const TeamDetail = ({ selectedTeam, teams, setSelectedTeam }) => {

  return (
    <>
      <div style={{ backgroundColor: '#031945', height: 400 }}>
        <Row style={{ textAlign: 'center', display: "flex", justifyContent: "space-evenly", margin: "20px 150px" }}>
          {teams.map((team) => {
            return (
              <Card
                hoverable
                style={{
                  width: 240,
                  background: '#031537',
                  display: 'flex',
                  justifyContent: 'center',
                  borderRadius: 10,
                  width: 100,
                  height: 98,
                  alignItems: 'center',
                  border: '1px solid #1a356b',
                }}
                cover={<img alt={team.team_name} src={team.team_logo} onClick={() => {
                  setSelectedTeam(team)
                }} />}
              >
              </Card>

            )
          })}
        </Row>
        <Row
          style={{ backgroundColor: '#031945', marginTop: '-36px' }}>

          <Col >
            <div style={{ display: 'flex', alignItems: 'center', width: '630px', backgroundImage: `url(${bg})`, backgroundPosition: '-248px -35px', backgroundRepeat: 'no-repeat' }}>
              <img src={selectedTeam?.team_logo} style={{ width: 300, height: 300, marginRight: '-62px', marginLeft: '62px' }} alt="Team Logo" />
              <Divider type="vertical" style={{ border: '0.1px solid white', height: 200, marginRight: '0px 0px 0px 0px' }} />
              <h2 style={{ marginLeft: '80px', color: "white", marginLeft: '5px' }}>{selectedTeam?.team_name}</h2>
            </div>

          </Col>


          <Col xs={24} md={12}  >
            <Card style={{ width: 500, backgroundColor: '#19398a', marginTop: '90px', marginLeft: '125px', border: "none" }}>
              <Col style={{ borderBottom: '2px solid #031945', height: "40px" }}>
                <Typography style={{ fontSize: "14px", fontWeight: "bold", fontFamily: "sans-serif", padding: "10px 10px ", color: "white" }}><span style={{ color: "#ffc52f" }}>Owner</span>  -  {selectedTeam?.owner_name.toUpperCase()}</Typography>
              </Col>
              <Col style={{ borderBottom: '2px solid #031945', height: "40px" }}>
                <Typography style={{ fontSize: "14px", fontWeight: "bold", fontFamily: "sans-serif", padding: "10px 10px", color: "white" }}><span style={{ color: "#ffc52f" }}>Coach</span>  -  {selectedTeam?.coach_name.toUpperCase()}</Typography>
              </Col>
              <Col style={{ borderBottom: '2px solid #031945', height: "40px" }}>
                <Typography style={{ fontSize: "14px", fontWeight: "bold", fontFamily: "sans-serif", padding: "10px 10px", color: "white" }}><span style={{ color: "#ffc52f" }}>Captain</span> -  {selectedTeam?.captain_name.toUpperCase()}</Typography>
              </Col>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );

};

export default TeamDetail;

