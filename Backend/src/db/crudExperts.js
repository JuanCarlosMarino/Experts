const db = require('./firebase.js');


//Experts CRUD

function getExperts(callback) {
    return db.collection("experts").get()
        .then((refDoc) => {
            var arrayDOc = [];
            refDoc.forEach((doc) => {
                const obj = doc.data();
                obj.id = doc.id;
                arrayDOc.push(obj);
                //console.log(doc.id, '=>', doc.data());
            })
            callback(arrayDOc)
        })
        .catch((error) => {
            callback(`Error to get users ${error}`)
        })
}

function getExpert(uid, callback) {
    return db.collection("experts").doc(uid).get()
        .then((refDoc) => {
            //console.log(doc.id, '=>', doc.data());            
            callback(refDoc.data())
        })
        .catch((error) => {
            callback(`Error to get users ${error}`)
        })
}

function addExpert(user, callback) {
    return db.collection("experts").add(user)
        .then(() => {
            callback("Success")
        })
        .catch((error) => {
            callback(`Error to add user ${error}`)
        })
}

function updateExpertTotally(uid, user, callback) {
    return db.collection("experts").doc(uid).set(user)
        .then(() => {
            callback("Success")
        })
        .catch((error) => {
            callback(`Error to update user ${error}`)
        })
}

function updateExpertPartial(uid, user, callback) {
    return db.collection("experts").doc(uid).update(user)
        .then(() => {
            callback("Success")
        })
        .catch((error) => {
            callback(`Error to update user ${error}`)
        })
}

function deleteExpert(uid, callback) {
    return db.collection("experts").doc(uid).delete()
        .then(() => {
            callback("Success")
        })
        .catch((error) => {
            callback(`Error to delete user ${error}`)
        })
}

function searchExpert(location, callback) {
    return db.collection('experts').where("location", "==", location).get()
        .then((refDoc) => {
            var arrayExperts = [];
            refDoc.forEach(doc => {                
                arrayExperts.push(doc.data());
            })
            callback(arrayExperts);
        })
        .catch((err) => {
            callback("Error to search expert ", err)
        })
}

module.exports = {
    getExperts,
    getExpert,
    addExpert,
    updateExpertTotally,
    updateExpertPartial,
    deleteExpert,
    searchExpert
};