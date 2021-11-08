const admin = require('firebase-admin');
const serviceAccount = require('./bimoi-experts-75da4861c8a5.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); 

module.exports = db;
