//Sets up server
const express = require("express");
const app = express();
const PORT = 8080

app.listen(PORT, () => {
    console.log("Server listening on port 8080")
})

app.get('../../notes.html', function (req, res) {
    res.send('Hello World!')
})