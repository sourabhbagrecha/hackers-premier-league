const mongoose = require("mongoose")
const {Schema, model} = mongoose

const teamSchema = new Schema({
  team_name: {
    type: String,
    required: true
  },
  wins: {
    type: Number,
    default: 0
  },
  losses: {
    type: Number,
    default: 0
  },
  ties: {
    type: Number,
    default: 0
  },
  score: {
    type: Number,
    default: 0
  }
}, {timestamps: true});

module.exports = model("Team", teamSchema)
