const admin = require('firebase-admin');

const serviceAccount = require('./pruebab13-b1c22-768925da83df.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

//Creación de un Experto
// db.collection("experts").add({
//     Name: "Deymer",
//     Location: "Bogotá, Cundinamarca, Colombia",
//     Services: [{},{}],
//     Cel: "446448451",
//     DNI: "545448",
//     Bio: "Hola soy deymer",
//     ContactLink: "www.123.com",
//     Occupation: "Abogado",
//     Photo: "www.photo123.com"
// })
// .then(()=>{
//     console.log("Documento creado")
// })
// .catch((error)=>{
//     console.log("Error al crear documento ",error);
// })

//Leer un experto
// db.collection("experts").doc("gBOa2LVpA91M8ntmmV27").get()
// .then((doc)=>{
//     if(doc.exists){
//         console.log(doc.data());
//     }else{
//         console.log("Documento no existe")
//     }
// })
// .catch((error)=>{
//     console.log("Error al leer documento ",error);
// })
