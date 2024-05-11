import { Modal, Button, Table, Typography } from "antd";
import { TranslateFunction } from "../../../utils/internationalisation";

const { Text } = Typography;

const MatchResult = ({ match, isResultModalOpen, setIsResultModalOpen }) => {
  const labels = TranslateFunction("labels");
  const data = [
    {
      key: 1,
      team: match.team_A,
      scores: match.team_A_score,
      overs: match.team_A_overs,
      wickets: match.team_A_wickets,
    },
    {
      key: 2,
      team: match.team_B,
      scores: match.team_B_score,
      overs: match.team_B_overs,
      wickets: match.team_B_wickets,
    },
  ];

  const columns = [
    {
      title: "Team",
      dataIndex: "team",
      key: "key",
    },
    {
      title: "Scores",
      dataIndex: "scores",
      key: "key",
    },
    {
      title: "Overs",
      dataIndex: "overs",
      key: "key",
    },
    {
      title: "Wickets",
      dataIndex: "wickets",
      key: "key",
    },
  ];
  return (
    <>
      <Button
        className="match-result"
        onClick={() => setIsResultModalOpen(true)}
        style={{
          transform: "skew(-20deg)",
          backgroundColor: "rgb(239, 65, 35)",
          padding: "0px 20px",
          fontSize: "14px",
          fontWeight: "700",
          color: "#fff",
          margin: "70px 0px 70px -20px ",
          borderRadius: "3px",
          border: "1px solid transparent",
        }}
      >
        {labels("Match Result")}
      </Button>
      <Modal
        title="Match Result Table"
        open={isResultModalOpen}
        onCancel={() => setIsResultModalOpen(false)}
        footer={null}
        style={{ textAlign: "center" }}
      >
        <Table dataSource={data} columns={columns} pagination={false}></Table>
        <Text>Player of the Match - {match.player_of_the_match}</Text>
      </Modal>
    </>
  );
};

export default MatchResult;
