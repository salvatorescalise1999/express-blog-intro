const express = require('express')
const app = express()
const port = 3000

// attivazione della cartella public per uso file statici
app.use(express.static('public'));

// Array dei post
const posts = [
    {
        id: 1,
        titolo: "ciambellone",
        contenuto: "ciambellone con lo zucchero a velo",
        immagine: "/images/ciambellone.jpeg",
        tags: ["dolce", "gustoso"]
    },
    {
        id: 2,
        titolo: "cracker",
        contenuto: "cracker alla barbabietola",
        immagine: "/images/cracker_barbabietola.jpeg",
        tags: ["viola", "gustoso" , "carbo"]
    },
    {
        id: 3,
        titolo: "pane fritto",
        contenuto: "pane fritto dolce",
        immagine: "/images/pane_fritto_dolce.jpeg",
        tags: ["dolce", "gustoso", "pane"]
    },
    {
        id: 4,
        titolo: "pasta barbabietola",
        contenuto: "pasta viola",
        immagine: "/images/pasta_barbabietola.jpeg",
        tags: ["pasta", "gustoso", "viola"]
    },
    {
        id: 5,
        titolo: "torta paesana",
        contenuto: "torta della nonna",
        immagine: "/images/torta_paesana.jpeg",
        tags: ["dolce", "gustoso", "nonna"]
    }
]


// rotta principale
app.get("/", (req, res) => {
    res.send("server del mio blog")
})

// rotta bacheca
app.get("/bacheca", (req, res) => {
    res.json({
        posts: posts,
        totale: posts.length
    })
})

//porta in ascolto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
