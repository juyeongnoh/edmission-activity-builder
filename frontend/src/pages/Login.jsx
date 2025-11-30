import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useAuth from "@/hooks/useAuth";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("password");
  const { isAuthenticated, isLoading } = useAuth();
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    navigate("/");
    return null;
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="border shadow-lg rounded-xl bg-linear-120 from-sky-950 to-sky-500">
        <div className="flex flex-col items-center justify-between p-24">
          <h1 className="mb-8 text-3xl font-bold text-white">Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="flex flex-col w-full gap-4"
          >
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              required
            />
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />

            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/register")}
              className="w-full"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
