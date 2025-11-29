import React from "react";
import { useNavigate } from "react-router";
import useAuth from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="border shadow-lg rounded-xl bg-linear-120 from-sky-950 to-sky-500">
        <div className="flex flex-col items-center justify-between p-24">
          <h1 className="mb-4 text-3xl font-bold text-white">EdMission Unni</h1>

          {isAuthenticated ? (
            <div className="flex gap-2">
              <Button onClick={() => navigate("/activities")}>
                Go to Activity Builder
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button variant="outline" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
