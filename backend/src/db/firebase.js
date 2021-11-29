const admin = require('firebase-admin');
const serviceAccount = require('./experts-81553-d286603d25a6.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); 

module.exports = db;




