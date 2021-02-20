const fs = require("fs")
const util = require("util")

const uuidv1 = require("uuid")

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Store {
  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note))
  }
  
  read() {
    return readFileAsync("db/db.json", "utf8")
  }

  getNotes() {
    return this.read().then((notes) => {
      let parsedNotes
      try {
        parsedNotes = [].concat(JSON.parse(notes))
      } catch (err) {
        parsedNotes = []
      }
      return parsedNotes
    })
  }

  addNote(note) {
    const { title, text } = note

    if (!title || !text) {
      throw new Error("Please add a title and some text!")
    }

    const newNote = { title, text, id: uuidv1() }

    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote)
  }

  removeNote(id) {
    return this.getNotes()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filteredNotes) => this.write(filteredNotes))
  }
}

module.exports = new Store()