const useAuth = () => {
  const userToken = localStorage.getItem("token");
  return userToken ? userToken : false;
};

export default useAuth;
