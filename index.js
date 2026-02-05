const express = require('express')
const app = express()
const port = 3000

// attivazione della cartella public per uso file statici
app.use(express.static('public'));

//chiamata
app.get("/", (req, res) => {
    res.send("server del mio blog")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
