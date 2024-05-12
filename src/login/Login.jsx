import { useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Typography, Card } from "antd";
import { AuthData } from "../auth/AuthWrapper";
import Input from "antd/es/input/Input";
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
    <div className="form">
      <Card
        style={{
          padding: "24px",
          margin: "60px auto",
          backgroundColor: "rgb(25, 57, 138)",
        }}
      >
        <Text
          style={{
            display: "block",
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
            paddingBottom: 20,
          }}
        >
          Login
        </Text>
        <div
          style={{
            width: "300px",
            display: "block",
            margin: "auto",
            paddingBottom: "20px",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: "18px",
            }}
          >
            {" "}
            Username
          </Text>
          <Input
            value={formData.userName}
            onChange={(e) => setFormData({ userName: e.target.value })}
            type="text"
          />
        </div>
        <div
          style={{
            width: "300px",
            display: "block",
            margin: "auto",
            paddingBottom: "10px",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: "18px",
            }}
          >
            {" "}
            Password
          </Text>
          <Input
            value={formData.password}
            onChange={(e) => setFormData({ password: e.target.value })}
            type="password"
          />
          <Text style={{ display: "block", textAlign: "end", color: "white" }}>
            Forget Password
          </Text>
        </div>

        <Button
          style={{
            color: "white",
            backgroundColor: "rgb(25, 57, 138)",
            fontSize: "18px",
            fontWeight: "bold",
            // padding: 20,
            width: "300px",
            borderRadius: "20px",
            height: "38px",
            display: "block",
            margin: "20px auto",
          }}
          onClick={doLogin}
        >
          SIGN IN
        </Button>

        {errorMessage && <div className="error">{errorMessage}</div>}
      </Card>
    </div>
  );
};

export default Login;
