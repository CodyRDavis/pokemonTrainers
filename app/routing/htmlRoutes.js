const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
router.get('/quiz', function(req,res){
    res.sendFile(path.join(__dirname, "..", "public", "quiz.html"));
});

module.exports = router;