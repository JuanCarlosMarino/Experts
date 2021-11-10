const express =  require('express');
const app = express();
const port = 3000;
const dbE = require('./src/db/crudExperts.js')
const dbU = require('./src/db/crudUsers.js')

//app.use(express.static('public'));
app.use(express.json());

//Experts Methods
app.get('/get-experts', (req, res)=>{
    dbE.getExperts(function(refDoc){
        res.json(refDoc);
    })
    
})

app.get('/get-expert/:id', (req, res)=>{
    const uid = req.params.id;
    dbE.getExpert(uid, function(refDoc){
        res.json(refDoc);
    })
    
})

app.post('/add-expert', (req, res)=>{
    const body = req.body;
    dbE.addExpert(body, function(response){
        if(response === 'Success'){
            res.status(201).send(response);
        }else{
            res.status(503).send(response);
        }        
    })
})

app.put('/update-expert-totally/:id', (req, res)=>{
    const id = req.params.id;
    const body = req.body;
    dbE.updateExpertTotally(id, body, function(refDoc){
        res.send(refDoc);
    })
})

app.patch('/update-expert-partial/:id', (req, res)=>{
    const id = req.params.id;
    const body = req.body;
    dbE.updateExpertPartial(id, body, function(refDoc){
        res.send(refDoc);
    })
})

app.delete('/delete-expert/:id', (req, res)=>{
    const id = req.params.id;
    dbE.deleteExpert(id, function(refDoc){
        res.send(refDoc);
    })
})

//Users methods

app.get('/get-user/:id', (req, res)=>{
    const uid = req.params.id;
    dbU.getUser(uid, function(refDoc){
        res.json(refDoc);
    })
    
})

app.post('/add-user', (req, res)=>{
    const body = req.body;
    dbU.addUser(body, function(refDoc){
        res.send(refDoc);
    })
})

app.put('/update-user-totally/:id', (req, res)=>{
    const id = req.params.id;
    const body = req.body;
    dbU.updateUserTotally(id, body, function(refDoc){
        res.send(refDoc);
    })
})

app.patch('/update-user-partial/:id', (req, res)=>{
    const id = req.params.id;
    const body = req.body;
    dbU.updateUserPartial(id, body, function(refDoc){
        res.send(refDoc);
    })
})

app.delete('/delete-user/:id', (req, res)=>{
    const id = req.params.id;
    dbU.deleteUser(id, function(refDoc){
        res.send(refDoc);
    })
})

app.listen(port, ()=>{
    console.log('mi port '+port);
})