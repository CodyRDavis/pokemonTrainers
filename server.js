//SERVER DEPENDENCIES
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');


//ROUTING PATHS
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function(){
    console.log("SERVER STATUS:     STARTED");
    console.log("LISTENING ON PORT: 3000");
});