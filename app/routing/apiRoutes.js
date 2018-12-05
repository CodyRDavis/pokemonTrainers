//DEPENDENCIES
const express = require('express');
const router = express.Router();
const trainers = require('../data/trainers');

//TRAINERS
router.get('/trainer', function(req, res){
    console.log("SERVER RECEIVED: GET /API /TRAINER");
    res.send(trainers);
});
router.post('/trainer', function(req, res){
    console.log("SERVER RECEIVED: POST /API /TRAINER");
    console.log("Req Body: ", req.body);
    console.log("Before: ",trainers);
    trainers.push(req.body);
    console.log("After: ", trainers);
    res.send(trainers);
});

//API CATCH EM ALL
router.get('*', function(req,res){
    console.log("SERVER RECEIVED: GET INVALID ADDRESS");
    res.send(true);
});
router.post('*', function(req,res){
    console.log("SERVER RECEIVED: POST INVALID ADDRESS");
    res.send(true);
});

module.exports = router;