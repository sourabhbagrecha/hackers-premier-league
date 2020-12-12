const path = require("path")
const fs = require("fs")

const express = require('express')
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")

const PORT = process.env.PORT || 4000

// const Team = require("./models/team")
const { getTeams, pairTeams, addTeam, getTeamsMeta } = require("./controllers/team")

app.use(express.static('./client/build'));
app.use(express.json())
app.use(cors())

app.get('/api/teams', getTeams)
app.get('/api/teams-meta', getTeamsMeta)
app.post('/api/pair', pairTeams)
app.post('/api/team/new', addTeam)

app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "client","build","index.html"));
})

mongoose.connect("mongodb+srv://nodeapp:node1234@cluster0.yfuws.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected!")
    app.listen(PORT, () => console.log(`Running on: ${PORT}`))
  })
  .catch(err => console.log(err))

