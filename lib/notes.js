const fs = require('fs');
const path = require('path');

function createNewNote (body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        jSON.stringify({notes: notesArray}, null, 2)
    );
    //return finished code to post route for response 
    return note;
}