const router = require('express').Router();
const store = require('../db/store');
const fs = require("fs");
const db = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");

// create a route that responds with all notes coming from the database

router.get("/notes", (req, res) => {
    res.json(db)
    })

router.post("/notes", (req, res) => {
    let noteId = uuidv4();
    req.body.id = noteId

    let dbData = db;
    dbData.push(req.body);
    res.json(true);

    let note = JSON.stringify(dbData);
    fs.writeFileSync('./db/db.json', note)
});

module.exports = router;