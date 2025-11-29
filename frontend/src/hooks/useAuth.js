import { useEffect, useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("token");
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setUser(null);
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        localStorage.removeItem("token");
        setUser(null);
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      setUser(data?.user);
      setIsAuthenticated(true);
      setIsLoading(false);
    };

    fetchProfile();
  }, []);

  return { user, isAuthenticated, isLoading };
};

export default useAuth;
