const router = require('express').Router()
const noteStorage = require('../db/noteStorage')

router.post("/notes", (req, res) => {
    noteStorage.addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err))
})

router.get('/notes', (req, res) => {
    noteStorage.getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err))
})

router.delete("/notes/:id", (req, res) => {
    noteStorage.removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err))
})

module.exports = router