const db = require('./firebase.js');

// CRUD Users
// Get all users


function getUsers(){
    db.collection("users").get().then((docs) => {
        docs.forEach((user) => {
            console.log(user.data());
        })
    })
}

module.exports = getUsers;

