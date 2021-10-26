const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const newUniqueId = uuidv4();


function createNewNote(body, notesArray) {
    const note = body;
    note.id = newUniqueId
    notesArray.push(note);
    console.log(__dirname); 
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray)
    );
    //return finished code to post route for response 
    return note;
}

function newNotesArray (notesArray) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray)
    )
    return notesArray
}

module.exports = {
    createNewNote,
    newNotesArray,
}