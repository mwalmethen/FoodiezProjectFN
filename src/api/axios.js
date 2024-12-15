const instance = axios.create({
  baseURL: "http://192.168.2.108:3000/foodiez/api/",
});

instance.interceptors.response.use((response) => {
  return response.data;
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
