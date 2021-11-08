const db = require('./firebase.js');

// CRUD Users
// Get all users


function getUsers(callback) {
    return db.collection("users").get()
        .then((refDoc) => {
            var arrayDOc = [];
            refDoc.forEach((doc) => {
                arrayDOc.push(doc.data());
                //console.log(doc.id, '=>', doc.data());
            })
            callback(arrayDOc)
        })
        .catch((error) => {
            callback(`Error to get users ${error}`)
        })
}

function getUser(uid, callback) {
    return db.collection("users").doc(uid).get()
        .then((refDoc) => {
            //console.log(doc.id, '=>', doc.data());            
            callback(refDoc.data())
        })
        .catch((error) => {
            callback(`Error to get users ${error}`)
        })
}

function addUser(user, callback) {
    return db.collection("users").add(user)
        .then(() => {
            callback("Success")
        })
        .catch((error) => {
            callback(`Error to add user ${error}`)
        })
}

function updateUser(uid, user, callback) {
    return db.collection("users").doc(uid).update(user)
        .then(() => {
            callback("Success")
        })
        .catch((error) => {
            callback(`Error to update user ${error}`)
        })
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser
};