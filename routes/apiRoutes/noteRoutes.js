//require express's router
const router = require('express').Router();
//require the functions for the routes
const {createNewNote} = require('../../lib/notes.js');
//require the notes database 
const notes = require('../../db/db.json');

//get notes object from the database
router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        res.json(results);  
    }
})

//post notes
router.post('/notes', (req, res) => {
    console.log('request body 1', req.body)
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    if(req.body) {
        //add note to json file and notes array in this function
        const note = createNewNote(req.body, notes);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        console.log("note", note)
        //req.body is where out incoming content wil be

        res.json(note)
    }
})



module.exports = router