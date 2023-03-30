const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kei:1p2p3p4p@boilerplate.fgyxeqg.mongodb.net/?retryWrites=true&w=majori', {
    useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => res.send("Hello World!\n"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
