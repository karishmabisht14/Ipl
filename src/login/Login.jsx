import { useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Typography, Form, Input, Checkbox } from "antd";
import { AuthData } from "../auth/AuthWrapper";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const { Text } = Typography;

const Login = () => {
  console.log("loggg");
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = AuthData();
  const [formData, setFormData] = useReducer(
    (formData, newItem) => {
      return { ...formData, ...newItem };
    },
    { userName: "", password: "" }
  );
  const [errorMessage, setErrorMessage] = useState(null);

  const doLogin = () => {
    login(formData.userName, formData.password).then(
      () => {
        if (location.state?.from) navigate(location.state.from);
        else navigate("/");
      },
      (errorMsg) => setErrorMessage(errorMsg)
    );
  };

  return (
    <div className="inputs">
      <div className="input">
        <Text> UserName:</Text>
        <input
          value={formData.userName}
          onChange={(e) => setFormData({ userName: e.target.value })}
          type="text"
        />
      </div>
      <div className="input">
        <Text> Password:</Text>
        <input
          value={formData.password}
          onChange={(e) => setFormData({ password: e.target.value })}
          type="password"
        />
      </div>

      <div className="button">
        <Button onClick={doLogin}>Login</Button>
      </div>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
  // return (
  //   <Form
  //     name="normal_login"
  //     className="login-form"
  //     initialValues={{
  //       remember: true,
  //     }}
  //     onFinish={doLogin}
  //   >
  //     <Form.Item
  //       name="username"
  //       rules={[
  //         {
  //           required: true,
  //           message: "Please input your Username!",
  //         },
  //       ]}
  //     >
  //       <Input
  //         prefix={<UserOutlined className="site-form-item-icon" />}
  //         placeholder="Username"
  //       />
  //     </Form.Item>
  //     <Form.Item
  //       name="password"
  //       rules={[
  //         {
  //           required: true,
  //           message: "Please input your Password!",
  //         },
  //       ]}
  //     >
  //       <Input
  //         prefix={<LockOutlined className="site-form-item-icon" />}
  //         type="password"
  //         placeholder="Password"
  //       />
  //     </Form.Item>
  //     <Form.Item>
  //       <Form.Item name="remember" valuePropName="checked" noStyle>
  //         <Checkbox>Remember me</Checkbox>
  //       </Form.Item>

  //       <a className="login-form-forgot" href="">
  //         Forgot password
  //       </a>
  //     </Form.Item>

  //     <Form.Item>
  //       <Button type="primary" htmlType="submit" className="login-form-button">
  //         Log in
  //       </Button>
  //       {errorMessage && <div className="error">{errorMessage}</div>}
  //     </Form.Item>
  //   </Form>
  // );
};

export default Login;
