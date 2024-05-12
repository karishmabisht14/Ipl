import { Modal, Form, Input, Button } from "antd";
import { updateMatch } from "../../../services/matches/matches";
import { useNavigate } from "react-router-dom";
import { TranslateFunction } from "../../../utils/internationalisation";

const CompletedMatchForm = ({
  form,
  payload,
  completedModalOpen,
  setCompletedModalOpen,
  matchesUpdatedCount,
  setMatchesUpdatedCount,
}) => {
  const labels = TranslateFunction("labels");
  const navigate = useNavigate();
  const submitForm = (values) => {
    const fieldValues = {
      ...values,
      team_A_overs: +values["team_A_overs"],
      team_B_overs: +values["team_B_overs"],
    };

    payload.current.data = { ...payload.current.data, ...fieldValues };
    payload.current.data.status = "completed";
    payload.current.data.result = "declared";

    updateMatch(payload.current.data, "match_id").then((matches) => {
      console.log("completedMatchForm", matches);
      setCompletedModalOpen(false);
      setMatchesUpdatedCount(matchesUpdatedCount + 1);
      navigate("/matches/completedMatches", { state: matchesUpdatedCount });
    });
  };

  return (
    <>
      <Modal
        title={labels("Completed Match Form")}
        open={completedModalOpen}
        onCancel={() => setCompletedModalOpen(false)}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={submitForm}
          form={form}
          autoComplete="off"
        >
          <Form.Item
            label={labels("Team A Overs")}
            name="team_A_overs"
            rules={[
              {
                required: true,
                message: "Please input match no!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={labels("Team B Overs")}
            name="team_B_overs"
            rules={[
              {
                required: true,
                message: "Please input match no!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={labels("Team A Wickets")}
            name="team_A_wickets"
            rules={[
              {
                required: true,
                message: "Please input match no!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={labels("Team B Wickets")}
            name="team_B_wickets"
            rules={[
              {
                required: true,
                message: "Please input match no!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={labels("Team A Score")}
            name="team_A_score"
            rules={[
              {
                required: true,
                message: "Please input match no!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={labels("Team B Score")}
            name="team_B_score"
            rules={[
              {
                required: true,
                message: "Please input match no!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={labels("Winner")}
            name="winner_id"
            rules={[
              {
                required: true,
                message: "Please input match no!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={labels("Player of the match")}
            name="player_of_the_match"
            rules={[
              {
                required: true,
                message: "Please input match no!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={labels("Match Conclusion")}
            name="match_conclusion"
            rules={[
              {
                required: true,
                message: "Please input match no!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={() => setCompletedModalOpen(false)}>
              {labels("Cancel")}
            </Button>
            <Button type="primary" htmlType="submit">
              {payload.current.operation === "ADD"
                ? labels("Add Match")
                : labels("Update Match")}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CompletedMatchForm;
