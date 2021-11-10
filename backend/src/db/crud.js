const db = require("./firebase.js");

function getExperts(callback){
    return db.collection("experts").get().then((docs) => {
        var arrayExperts = []
        docs.forEach((expert) => {
            arrayExperts.push(expert.data());
        })
        // CUANDO LLEGAMOS ACÁ, SE DEBE ENVIAR LA RESPUESTA AL GET REQUEST
        callback(arrayExperts);
    })
} 

module.exports = {
    getExperts
}


