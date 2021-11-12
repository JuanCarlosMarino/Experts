const express = require('express');
const router = express.Router();
const expertsMock = require('./mockExperts.json');


router.get('/', (req, res) => {
    res.json(expertsMock);
})

router.get('/:id', (req, res) => {
    const uid = req.params.id;
    var expertOBJ = {};
    for (let i = 0; i < expertsMock.length; i++) {
        console.log(expertsMock[i])
        if (expertsMock[i].id === uid) {
            expertOBJ =  expertsMock[i];          
        }
    }
    res.send(expertOBJ);
})

router.post('/', (req, res) => {
    const body = req.body;
    body.id = (expertsMock.length+1)+"";
    expertsMock.push(body);
    res.send("success")
})

module.exports = router;