const router = require('express').Router()
const Store = require('../db/Store')

router.post("/notes", (req, res) => {
    Store.addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err))
})

router.get('/notes', (req, res) => {
    Store.getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err))
})

router.delete("/notes/:id", (req, res) => {
    Store.removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err))
})

module.exports = router