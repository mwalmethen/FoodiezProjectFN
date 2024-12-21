import instance from "./axios";

const register = async (name, password) => {
  try {
    const response = await fetch(
      "http://localhost:3000/foodiez/api/auth/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      }
    );
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    return data;
  } catch (error) {
    throw error;
  }
};

const login = async (name, password) => {
  try {
    const response = await fetch(
      "http://localhost:3000/foodiez/api/auth/signin",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      }
    );
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export { register, login };
