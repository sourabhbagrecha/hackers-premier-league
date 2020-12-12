const getTeamScores = (decision) => {
  let team1Score = {
    score: 0,
    wins: 0,
    losses: 0,
    ties: 0
  }
  let team2Score = {
    score: 0,
    wins: 0,
    losses: 0,
    ties: 0
  }
  switch(decision){
    case "team1": {
      team1Score.score += 3,
      team1Score.wins += 1
      team2Score.losses+= 1
      break
    }
    case "team2": {
      team1Score.losses += 1
      team2Score.score+= 3,
      team2Score.wins+= 1
      break
    }
    case "tie" : {
      team1Score.score+= 1,
      team1Score.ties+= 1
      team2Score.score+= 1,
      team2Score.ties+= 1
      break
    }
    case "default": {
      team1Score.score+= 1,
      team1Score.ties+= 1
      team2Score.score+= 1,
      team2Score.ties+= 1
      break
    }
  }
  return [team1Score, team2Score]
}

module.exports = {
  getTeamScores
}