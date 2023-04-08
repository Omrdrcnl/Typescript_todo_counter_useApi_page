import axios from "axios";

//burada iki adet api kullanmak için apiye bir tip belirtiyoruz
export type apiType = "adoptez" | "jsonplaceholder";

export default function useApi(selectedApi: apiType) {
  let baseApiUrl = "";

  if (selectedApi === "jsonplaceholder") {
    baseApiUrl = "https://jsonplaceholder.typicode.com/";
  }
  if (selectedApi === "adoptez") {
    baseApiUrl = "https://api.adoptez1artisan.com/";

    const token = localStorage.getItem("token");

    if (token) {
      axios.defaults.headers["Authorization"] = `bearer ${token}`;
    }
  }

  axios.defaults.baseURL = baseApiUrl;

  return axios;
}
