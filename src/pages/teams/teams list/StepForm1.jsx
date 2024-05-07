import React, { useState } from 'react'
import { Modal, Input, Form, Button, Space, Select } from "antd";
import { addTeam } from '../../../services/teams/teams';
import { updateTeam } from '../../../services/teams/teams';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const { Option } = Select;
const UI = {
  Form1: "Form1",
  Form2: "Form2",
}

const StepForm1 = ({ isModalOpen, handleCancel, handleOk, form, payload, setUpdatedCount }) => {

  const [currentUi, setCurrentUi] = useState(UI.Form1);

  const form1 = (values) => {
    payload.current.data = { ...payload.current.data, ...values }
    // console.log(payload.current.data)
    // setCurrentUi(UI.Form2);
  }
  const submitForm = (values) => {
    payload.current.data = { ...payload.current.data, ...values }
    if (payload.current.operation === 'ADD') {
      payload.current.data.team_id = Math.random()
      addTeam(payload.current.data).then(() => {
        setUpdatedCount(count => count + 1)
        handleOk();
      })
    }
    else {
      updateTeam(payload.current.data, 'team_id').then(() => {
        setUpdatedCount(count => count + 1)
        handleOk();
      })
    }
  }

  return (
    <>
      <Modal
        title="Personal Detail"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={1000}
      >
        {currentUi === UI.Form1 && (
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, marginLeft: 120 }}
            initialValues={{ remember: true }}
            onFinish={form1}
            form={form}
          >
            <Form.Item
              label="Team Name"
              name="team_name"
              rules={[{ required: true, message: "Please input your Name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Owner Name"
              name="owner_name"
              rules={[{ required: true, message: "Please input your Name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Coach Name"
              name="coach_name"
              rules={[{ required: true, message: "Please input your Name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Captain Name"
              name="captain_name"
              rules={[{ required: true, message: "Please input your Name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Team Logo" name='team_logo'
              rules={[
                {
                  required: true,
                  message: 'Please upload team logo'
                },
              ]}
            >
              <Input />
            </Form.Item>


            <Form.Item >
              <Button type="primary" htmlType="submit" style={{ marginLeft: '600px' }} onClick={() => setCurrentUi(UI.Form2)}>
                Next
              </Button>
            </Form.Item>
          </Form>
        )}
        {currentUi === UI.Form2 && (
          <Form
            name="dynamic_form_nest_item"
            autoComplete="off"
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 24 }}
            style={{ width: 950, justifyItems: 'space-between' }}
            initialValues={{ remember: true }}
            onFinish={submitForm}
            form={form}
          >
            <Form.List name="players">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{
                        display: 'flex',
                        marginBottom: 8,
                      }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, 'playerName']}
                        label='Player Name'
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Name!',
                          },
                        ]}
                      >
                        <Input />

                      </Form.Item>

                      <Form.Item
                        {...restField}
                        name={[name, 'specialization']}
                        label='Specialization'
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


                      <Form.Item
                        {...restField}
                        label="Player Photo"
                        name={[name, 'photo']}
                        rules={[
                          {
                            required: true,
                            message: 'Please upload player photo'
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      Add Players
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item>
              <Button type="primary" onClick={() => setCurrentUi(UI.Form1)}>
                Back
              </Button>
              <Button type="primary" style={{ marginLeft: 800 }} htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </>
  )
}
export default StepForm1