import { useEffect, useState } from "react";

const useAuthentication = () => {
  const [token, setToken] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function tokenSetup() {
      await setToken(localStorage.getItem("accessToken"));
      setIsLoading(false);
    }
    tokenSetup();
  }, []);

  console.log(token);

  if (isLoading===false) {
    return {
      token,
    };
  }
};

export default useAuthentication;
