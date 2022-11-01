import config from "../config";
const axios = require("axios");

function createUser(user, callback) {
  axios
    .post(config.api.baseURl + "/user/create", user)
    .then(function (response) {
      callback(response);
      // console.log(response.data.message)
    })
    .catch(function (error) {
      callback(error);
    });
}

function login(user, callback) {
  axios
    .post(config.api.baseURl + "/user/login", user)
    .then(function (response) {
      callback(response);
      // console.log(response.data.message)
    })
    .catch(function (error) {
      callback(error);
    });
}

export  {
    createUser,
    login
}
