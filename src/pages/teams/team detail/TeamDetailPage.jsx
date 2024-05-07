import TeamDetail from "./TeamDetail"
import TeamBatters from "./TeamBatters";
import TeamBowlers from "./TeamBowlers";
import TeamAllRounders from "./TeamAllRounders";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from "antd";
import bgg from "../../../image/bottom-section-bg.svg"

const TeamDetailPage = ({ back, selectedTeam, setSelectedTeam, teams }) => {

      const batsmen = selectedTeam?.players?.filter(player => player.specialization === "Batsman");
      // console.log("batters", batsmen)
      const bowlers = selectedTeam?.players?.filter(player => player.specialization === "Bowler");
      const allrounders = selectedTeam?.players?.filter(player => player.specialization === "all-rounder");

      return (
            <>

                  <Button style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '0px', borderRadius: 0, backgroundColor: '#061e59' }} type="primary" onClick={back}><ArrowLeftOutlined />Teams</Button>


                  {selectedTeam && <TeamDetail selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} teams={teams} />}
                  <div style={{ backgroundImage: `url(${bgg})`, backgroundRepeat: "repeat-y", backgroundColor: "#f0f2f8", flexWrap: "wrap", marginLeft: "50px" }}>
                        {selectedTeam && <TeamBatters selectedTeam={selectedTeam} batsmen={batsmen} />}
                        {selectedTeam && <TeamBowlers selectedTeam={selectedTeam} bowlers={bowlers} />}
                        {selectedTeam && <TeamAllRounders selectedTeam={selectedTeam} allrounders={allrounders} />}
                  </div>

            </>
      )

}
export default TeamDetailPage



