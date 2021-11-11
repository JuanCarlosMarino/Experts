const express = require('express');
const axios = require('axios').default;
const router = express.Router();
const dbE = require('../src/db/crudExperts.js')

router.get('/', (req, res) => {
    dbE.getExperts(function (refDoc) {
        res.json(refDoc);
    })

})

router.get('/:id', (req, res) => {
    const uid = req.params.id;
    dbE.getExpert(uid, function (refDoc) {
        res.json(refDoc);
    })

})

router.post('/', (req, res) => {
    const body = req.body;
    const country = body.Location;
    axios.get('https://restcountries.com/v3.1/name/' + country)
        .then(function (response) {
            // handle success
            //console.log(response.data[0].languages);
            body.language = response.data[0].languages;
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(()=>{
            dbE.addExpert(body, function (response) {
                if (response === 'Success') {
                    res.status(201).send(response);
                } else {
                    res.status(503).send(response);
                }
            })
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    dbE.updateExpertTotally(id, body, function (refDoc) {
        res.send(refDoc);
    })
})

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    dbE.updateExpertPartial(id, body, function (refDoc) {
        res.send(refDoc);
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    dbE.deleteExpert(id, function (refDoc) {
        res.send(refDoc);
    })
})

module.exports = router;