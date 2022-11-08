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

function validUser(token, callback) {
  axios({
    method: "get",
    url: config.api.baseURl + "/user/valid/token",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      callback(response);
      // console.log(response.data.message)
    })
    .catch(function (error) {
      callback(error);
    });
}

function getLocations(callback) {
  axios
    .get(config.api.baseURl + "/location/locations")
    .then(function (response) {
      callback(response.data.result);
      // console.log(response.data.message)
    })
    .catch(function (error) {
      callback(error);
    });
}


function getUserByNick(token, callback) {
  axios({
    method: "get",
    url: config.api.baseURl + "/user/userbynick/" + localStorage.getItem("user"),
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      callback(response);
      // console.log(response.data.message)
    })
    .catch(function (error) {
      callback(error);
    });
}

export { createUser, login, validUser, getLocations, getUserByNick };
