//Sets up server
const express = require("express");
const app = express();
const PORT = 8080

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log("Server listening on port 8080")
})


//Creates html paths:
const router = require("express").Router();
const path = require("path");

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});


 