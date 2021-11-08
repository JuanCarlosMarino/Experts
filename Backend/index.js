const express =  require('express');
const app = express();
const port = 3000;
const db = require('./src/db/crud')

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res)=>{
    res.send('Hola soy una nueva ruta');
})

app.get('/get-users', (req, res)=>{
    db.getUsers(function(refDoc){
        res.send(refDoc);
    })
    
})

app.get('/get-user/:id', (req, res)=>{
    const uid = req.params.id;
    db.getUser(uid, function(refDoc){
        res.send(refDoc);
    })
    
})

app.post('/add-user', (req, res)=>{
    const body = req.body;
    db.addUser(body, function(refDoc){
        res.send(refDoc);
    })
})

app.put('/update-user', (req, res)=>{
    const body = req.body;
    db.updateUser(body.uid, body.user, function(refDoc){
        res.send(refDoc);
    })
})

app.get('/products', (req, res)=>{
    res.json({
        "name":"Product1",
        "price": 1000
    });
})

app.listen(port, ()=>{
    console.log('mi port '+port);
})