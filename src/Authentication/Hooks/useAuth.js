const useAuth = () => {
  // localStorage.removeItem("token");
  const userToken = localStorage.getItem("token");
  // const userToken = true;
  return userToken;
};

export default useAuth;
