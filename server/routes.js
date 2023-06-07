const app = require('./index.js');
const model = require('./model');
const mockData = require('./mockData/mockData.js').mockData;
const models = require('./model');
var router = require('express').Router();
const _ = require('underscore')

router.get('/movies', (req,res)=>{
    models.getAll((err, data)=>{
        if(err){
            console.error('unable to obtain movies', err);
        } else {
            res.status(200).send(JSON.stringify(data));
        }
    });
});

router.post('/movies', (req,res)=>{
    // console.log(req.body)
    // res.status(201).send(res.body);
    models.create(req.body, (err)=>{
        if(err) {
            console.error('unable to insert to movie database', err)
        } else {
            res.sendStatus(201);
        }
    })
});

router.patch('/movies/:title', (req,res)=>{
    // var row = ;
     var compBody = _.extend(req.params,req.body);
     console.log(req.body);
    models.update(compBody, (err,data)=>{
        if(err){
            console.error('unable to update to movie database', err)
        } else {
            res.sendStatus(201);
        }
    })
});

module.exports = router;