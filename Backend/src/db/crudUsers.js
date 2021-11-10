const db = require('./firebase.js');


//users CRUD

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

function updateUserTotally(uid, user, callback) {
    return db.collection("users").doc(uid).set(user)
        .then(() => {
            callback("Success")
        })
        .catch((error) => {
            callback(`Error to update user ${error}`)
        })
}

function updateUserPartial(uid, user, callback) {
    return db.collection("users").doc(uid).update(user)
        .then(() => {
            callback("Success")
        })
        .catch((error) => {
            callback(`Error to update user ${error}`)
        })
}

function deleteUser(uid, callback) {
    return db.collection("users").doc(uid).delete()
        .then(() => {
            callback("Success")
        })
        .catch((error) => {
            callback(`Error to delete user ${error}`)
        })
}

module.exports = {
    getUser,
    addUser,
    updateUserPartial,
    updateUserTotally,
    deleteUser
};