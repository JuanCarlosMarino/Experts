const express = require('express');
const axios = require('axios').default;
const router = express.Router();
const dbU = require('../src/db/crudUsers.js')


router.get('/:id', (req, res) => {
    const uid = req.params.id;
    dbU.getUser(uid, function (refDoc) {
        res.json(refDoc);
    })

})

router.post('/', (req, res) => {
    const body = req.body;
    dbU.addUser(body, function (refDoc) {
        res.send(refDoc);
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    dbU.updateUserTotally(id, body, function (refDoc) {
        res.send(refDoc);
    })
})

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    dbU.updateUserPartial(id, body, function (refDoc) {
        res.send(refDoc);
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    dbU.deleteUser(id, function (refDoc) {
        res.send(refDoc);
    })
})

module.exports = router;