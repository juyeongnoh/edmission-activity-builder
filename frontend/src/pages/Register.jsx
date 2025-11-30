import { useState } from "react";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="border shadow-lg rounded-xl bg-linear-120 from-sky-950 to-sky-500">
        <div className="flex flex-col items-center justify-between p-24">
          <h1 className="mb-8 text-3xl font-bold text-white">Register</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
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
              Register
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/login")}
              className="w-full"
            >
              Back to Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
