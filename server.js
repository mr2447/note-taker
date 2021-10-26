// require notes database
const { notes } = require('./db/db.json');
//require express 
const express = require('express');
//PORT
const PORT = process.env.PORT || 3002;
//assign express function to app constant
const app = express();
//require fs to write to file 
const fs = require('fs');
const path = require('path');
//require apiRoutes file
const apiRoutes = require('./routes/apiRoutes/noteRoutes');
//require htmlRoutes
const htmlRoutes = require('./routes/htmlRoutes/index.js');
//parse incoming string or array data from the url, tell server to expect
app.use(express.urlencoded({extended: true}));
//parse incoming JSON data, expect incoming body to be json
app.use(express.json());
//look for static files in public
app.use(express.static('public'))
//look for matching url in the apiRoutes
app.use('/api', apiRoutes)
//look for matching url in the htmlRoutes
app.use('/',htmlRoutes);
app.listen(PORT, ()=> {
    console.log(`API server now on port ${PORT}!`)
})



