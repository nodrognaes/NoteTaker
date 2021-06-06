const router = require('express').Router();
const store = require('../db/store');

// create a route that responds with all notes coming from the database

router.get("/notes", (req, res) => {
    store.getNotes()
    .then((notes) => {
        return res.json(notes)
    })
    .catch((err) => res.status(500).json(err))
});

router.post('/notes', (req, res) => {
    store.addNote(req.body)
    .then((notes) => {
        return res.json(notes);
    })
});

module.exports = router;