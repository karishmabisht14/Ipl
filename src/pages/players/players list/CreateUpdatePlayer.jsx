import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
} from 'antd';
import { addPlayer, updatePlayer } from "../../../services/players/players"
import { Modal } from 'antd';
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const { Option } = Select;
const CreateUpdatePlayer = ({ payload, form, playerUpdated, handleCancel }) => {
  const submitForm = (values) => {

    const fieldValues = {
      ...values,
      dob: values["dob"].format("YYYY-MM-DD"),
      iplDebut: values['iplDebut'].format('YYYY')

    }
    // console.log(values, 'date')
    payload.current.data = { ...payload.current.data, ...fieldValues }
    if (payload.current.operation === 'ADD') {
      payload.current.data.playerId = Math.random()
      // console.log(payload.current)
      addPlayer(payload.current.data).then(() => playerUpdated())
    }
    else {
      updatePlayer(payload.current.data, 'playerId').then(() => playerUpdated())
    }
  }

  const { YearPicker } = DatePicker;


  return (
    <>
      <Modal
        title="Title"
        open={true}
        // onOk={handleOk}
        //confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={submitForm}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <Form.Item
            name="playerName"
            label="Player Name"
            rules={[
              {
                required: true,
                message: 'Please input your Name!',
              },
            ]}
          >
            <Input />

          </Form.Item>

          <Form.Item label="Date Of Birth" name='dob'>
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="specialization"
            label="Specialization"
            rules={[
              {
                required: true,
                message: 'Please select Specialization!',
              },
            ]}
          >
            <Select placeholder="select your Specialization">
              <Option value="Bowler">Bowler</Option>
              <Option value="Batsman">Batter</Option>
              <Option value="all-rounder">All-Rounder</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Debut Year" name='iplDebut'>
            <YearPicker picker='year' />
          </Form.Item>

          <Form.Item
            name="innings"
            label="Innings"
            rules={[
              {
                required: true,
                message: 'Please input player innings!',
              },
            ]}
          >
            <InputNumber

              style={{
                width: '50%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="runs"
            label="Runs"
            rules={[
              {
                required: true,
                message: 'Please input player Runs!',
              },
            ]}
          >
            <InputNumber

              style={{
                width: '50%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="batting_strike_rate"
            label="Batting Strike Rate"
            rules={[
              {
                required: true,
                message: 'Please input player Batting Strike Rate!',
              },
            ]}
          >
            <InputNumber

              style={{
                width: '50%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="bowling_strike_rate"
            label="Bowling Strike Rate"
            rules={[
              {
                required: true,
                message: 'Please input player Bowling Strike Rate!',
              },
            ]}
          >
            <InputNumber

              style={{
                width: '50%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="batting_average"
            label="Batting Average"
            rules={[
              {
                required: true,
                message: 'Please input player Batting Average!',
              },
            ]}
          >
            <InputNumber

              style={{
                width: '50%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="bowling_average"
            label="Bowling Average"
            rules={[
              {
                required: true,
                message: 'Please input player Bowling Averagee!',
              },
            ]}
          >
            <InputNumber

              style={{
                width: '50%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="economy"
            label="Economy"
            rules={[
              {
                required: true,
                message: 'Please input player Economy!',
              },
            ]}
          >
            <InputNumber

              style={{
                width: '50%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="wickets"
            label="Wickets"
            rules={[
              {
                required: true,
                message: 'Please input player Wickets!',
              },
            ]}
          >
            <InputNumber

              style={{
                width: '50%',
              }}
            />
          </Form.Item>


          <Form.Item label="Player Photo" name='photo'
            rules={[
              {
                required: true,
                message: 'Please upload player photo'
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

    </>
  )
}
export default CreateUpdatePlayer



