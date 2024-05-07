import { Modal, Form, Input, Button } from "antd";
import { addMatch, removeMatch } from "../../../services/matches/matches";

const CompletedMatchForm = ({
  form,
  payload,
  completedModalOpen,
  setCompletedModalOpen,
  matchesUpdatedCount,
  setMatchesUpdatedCount,
}) => {
  const submitForm = (values) => {
    // console.log("values", values);

    payload.current.data = { ...payload.current.data, ...values };
    const match_id = payload.current.data.match_id;
    removeMatch(match_id, "match_id").then((matches) => {
      //console.log("remove Matches", matches);
      setMatchesUpdatedCount(matchesUpdatedCount + 1);
    });
    payload.current.data.status = "completed";
    payload.current.data.result = "declared";

    addMatch(payload.current.data).then((matches) => {
      //console.log("add Matches", matches);
      setCompletedModalOpen(false);
      setMatchesUpdatedCount(matchesUpdatedCount + 1);
    });
  };

  return (
    <>
      <Modal
        title="Match Form"
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
            label="Team A Overs"
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
            label="Team B Overs"
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
            label="Team A Wickets"
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
            label="Team B Wickets"
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
            label="Team A Score"
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
            label="Team B Score"
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
            label="Winner"
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
            label="Player of the match"
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
            label="Match Conclusion"
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
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              {payload.current.operation === "ADD"
                ? "Add Match"
                : "Update Match"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CompletedMatchForm;
