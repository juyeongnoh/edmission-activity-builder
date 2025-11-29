import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem("token", token);
      navigate("/");
    } else {
      const { message } = await response.json();
      alert(message);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <Input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <Input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />

      <Button variant="primary">Login</Button>
    </form>
  );
};

export default Login;
