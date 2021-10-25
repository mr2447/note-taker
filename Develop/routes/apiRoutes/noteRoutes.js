//require express's router
const router = require('express').Router();
//require the functions for the routes
//require the notes database 
const { notes } = require('../../db/db.json');

//get notes object from the database
router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        res.json(results);
    }
})

module.exports = router