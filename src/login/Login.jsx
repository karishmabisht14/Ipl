import { useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
import { AuthData } from "../auth/AuthWrapper";
const { Text } = Typography;

export const Login = () => {
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
};
