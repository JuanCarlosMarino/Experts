import axios from "axios";

const baseUrl = "http://localhost:5000";

export function searchExperts(city, callback) {
  axios.get(baseUrl + "/experts/search/" + city).then((res) => {
    callback(res);
  });
}
