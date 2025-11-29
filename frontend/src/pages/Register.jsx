import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (response.status === 201) {
      const { message } = await response.json();
      alert(message);
      navigate("/login");
    } else {
      const { message } = await response.json();
      alert(message);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister();
      }}
    >
      <h1>Register</h1>
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

      <Button variant="primary">Register</Button>
    </form>
  );
};

export default Register;
