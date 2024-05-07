import {
  Modal,
  Form,
  Input,
  Button,
  DatePicker,
  TimePicker,
  Select,
} from "antd";
import { addMatch, updateMatch } from "../../../services/matches/matches";

const { Option } = Select;
const CreateUpdateMatchForm = ({
  form,
  payload,
  isFormModalOpen,
  setIsFormModalOpen,
  matchesUpdatedCount,
  setMatchesUpdatedCount,
}) => {
  const submitForm = (values) => {
    const fieldsValue = {
      ...values,
      time: values["time"].format("hh:mm A"),
    };

    payload.current.data = { ...payload.current.data, ...fieldsValue };

    if (payload.current.operation === "ADD") {
      payload.current.data.match_id = Math.random();
      payload.current.data.status = "upcoming";

      addMatch(payload.current.data).then((matches) => {
        setIsFormModalOpen(false);
        setMatchesUpdatedCount(matchesUpdatedCount + 1);
        payload.current.data = {};
      });
    } else {
      updateMatch(payload.current.data, "match_id").then((matches) => {
        //console.log("updated Matches", matches);
        setIsFormModalOpen(false);
        setMatchesUpdatedCount(matchesUpdatedCount + 1);
      });
    }
  };

  return (
    <>
      <Modal
        title="Match Form"
        open={isFormModalOpen}
        onCancel={() => setIsFormModalOpen(false)}
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
            label="Match No"
            name="match_no"
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
            label="Date"
            name="date"
            rules={[
              {
                required: true,
                message: "Please pick the match date!",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="Time"
            name="time"
            rules={[
              {
                required: true,
                message: "Please pick the match timing!",
              },
            ]}
          >
            <TimePicker />
          </Form.Item>
          <Form.Item
            name="venue"
            label="Venue"
            rules={[
              {
                required: true,
                message: "Please select Venue!",
              },
            ]}
          >
            <Select placeholder="select your Venue">
              <Option value="Narendra Modi Stadium, Ahmedabad">
                Narendra Modi Stadium, Ahmedabad
              </Option>
              <Option value="MA Chidambaram Stadium, Chennai">
                MA Chidambaram Stadium, Chennai
              </Option>
              <Option value="M Chinnaswamy Stadium, Bengaluru">
                M Chinnaswamy Stadium, Bengaluru
              </Option>
              <Option value="PCA New Stadium, Mullanpur">
                PCA New Stadium, Mullanpur
              </Option>
              <Option value="Eden Gardens, Kolkata">
                Eden Gardens, Kolkata
              </Option>
              <Option value="Sawai Mansingh Stadium, Jaipur">
                Sawai Mansingh Stadium, Jaipur
              </Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Team A logo"
            name="team_A_logo"
            rules={[
              {
                required: true,
                message: "Please upload team A logo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="team_A"
            label="First Team"
            rules={[
              {
                required: true,
                message: "Please select first team!",
              },
            ]}
          >
            <Select placeholder="select your first team">
              <Option value="Chennai Super Kings">CSK</Option>
              <Option value="Gujarat Titans">GT</Option>
              <Option value="Mumbai Indians">MI</Option>
              <Option value="Lucknow Super Giants">LSG</Option>
              <Option value="Royal Challengers Bangalores">RCB</Option>
              <Option value="Punjab Kings">PBKS</Option>
              <Option value="Delhi Capitals">DC</Option>
              <Option value="Kolkata Knight Riders">KKR</Option>
              <Option value="Sunrise Hyderabad">SRH</Option>
              <Option value="Rajasthan Royals">RR</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Team B Logo"
            name="team_B_logo"
            rules={[
              {
                required: true,
                message: "Please upload team B logo",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="team_B"
            label="Second Team"
            rules={[
              {
                required: true,
                message: "Please select second team!",
              },
            ]}
          >
            <Select placeholder="select your second team">
              <Option value="Chennai Super Kings">CSK</Option>
              <Option value="Gujarat Titans">GT</Option>
              <Option value="Mumbai Indians">MI</Option>
              <Option value="Lucknow Super Giants">LSG</Option>
              <Option value="Royal Challengers Bangalores">RCB</Option>
              <Option value="Punjab Kings">PBKS</Option>
              <Option value="Delhi Capitals">DC</Option>
              <Option value="Kolkata Knight Riders">KKR</Option>
              <Option value="Sunrise Hyderabad">SRH</Option>
              <Option value="Rajasthan Royals">RR</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" onClick={() => setIsFormModalOpen(false)}>
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

export default CreateUpdateMatchForm;
