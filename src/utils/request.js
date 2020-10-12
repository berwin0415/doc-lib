import axios from "axios";
import history from "src/app/history";

const request = axios.create({
  timeout: 10000,
});

request.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err.response.status === 401) {
      history.push("/login");
    }
  }
);
