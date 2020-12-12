const { getTeamScores } = require("./helper")
const Team = require("../models/team")

const getTeams = async (req, res, next) => {
  let [offset, limit, orderBy, order] = [parseInt(req.query.offset) || 0, parseInt(req.query.limit) || 20, req.query.orderBy || "score", req.query.order || "desc"]
  const teams = await Team.find({ team_name: new RegExp(req.query.searchQuery, "gi")}).sort({ [orderBy]: order === "asc" ? 1 : -1 }).skip(offset).limit(limit)
  const teamsCount = await Team.find({ team_name: new RegExp(req.query.searchQuery, "gi")}).countDocuments()
  return res.json({ teams, teamsCount })
}

const getTeamsMeta = async (req, res, next) => {
  const teams = await Team.find().select({ team_name: 1 }).sort({ team_name: 1 })
  return res.json({ teams })
}

const pairTeams = async (req, res, next) => {
  const { team1, team2, decision } = req.body
  let [team1Score, team2Score] = getTeamScores(decision)
  const updateTeam1 = await Team.findByIdAndUpdate(team1, { $inc: team1Score })
  const updateTeam2 = await Team.findByIdAndUpdate(team2, { $inc: team2Score })
  return res.json({ updateTeam1, updateTeam2 })
}

const addTeam = async (req, res, next) => {
  let { name } = req.body
  if (!name && name.length < 4) return res.json({ error: "Please provide a name with more than 3 characters" })
  const newTeam = await Team.create({
    team_name: name
  })
  console.log({ newTeam })
  return res.json({ newTeam })
}

module.exports = {
  getTeams,
  getTeamsMeta,
  pairTeams,
  addTeam,
}