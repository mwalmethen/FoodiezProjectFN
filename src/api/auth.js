import instance from "./axios";

const register = async (name, password) => {
  try {
    const response = await fetch(
      "http://192.168.2.108:3000/foodiez/api/auth/signup",
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
      "http://192.168.2.108:3000/foodiez/api/auth/signin",
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

// import instance from "./axios";
// const register = async (formData) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   const body = JSON.stringify(formData);
//   const res = await instance.post("/register", body, config);

//   if (res.data.token) {
//     localStorage.setItem("token", res.data.token);
//   }
//   return res.data;
// };
// const login = async (formData) => {
//   const data = await instance.post("/login", formData);
//   if (data.token) {
//     localStorage.setItem("token", data.token);
//   }
//   console.log("login data", data);

//   // Ensure to return the user data
//   return data.user; // Assuming the API response contains the user object
// };

// export { register, login };
