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

    //FINDING FRIEND
    match = trainers[0]
    for(let i = 1; i<trainers.length; i++){
        var total = 0;
        var matchTotal = 0;
        //comparing user to current possible friend
        for(let j = 0; j < trainers[i].score.length; j++){
            //console.log(friends[i].score[j]);
            total += Math.abs(trainers[i].score[j] - req.body.score[j]);
            matchTotal += Math.abs(match.score[j] - req.body.score[j]);
        }
        //console.log(total);
        //console.log(match.name +" MatchTotal: " + matchTotal);

        //if found now closer match, setting match to it.
        if(total < matchTotal){
            match  = trainers[i];
            //console.log("found a better match");
        }
        
    }
    console.log("sending: ",match);

    trainers.push(req.body);
    res.send(match);
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