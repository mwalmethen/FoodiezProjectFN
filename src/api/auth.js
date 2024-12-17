import instance from "./axios";
const register = async (formData) => {
  const data = await instance.post("/register", formData);
  // setToken("token", data.token);
  localStorage.setItem("token", data.token);
  console.log("register data", data);
  return data;
};
const login = async (formData) => {
  const data = await instance.post("/login", formData);
  if (data.token) {
    localStorage.setItem("token", data.token);
  }
  console.log("login data", data);

  // Ensure to return the user data
  return data.user; // Assuming the API response contains the user object
};

export { register, login };
