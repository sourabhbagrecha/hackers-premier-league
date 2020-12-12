import { Grid, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react'
import Leaderboard from './components/Leaderboard'
import AddTeam from './components/AddTeam';
import { TeamsProvider } from './contexts/team.context';
import PairTeams from './components/PairTeams';
import "./App.css"

const useStyles = makeStyles(theme => ({
  main: {
    maxWidth: "700px",
    margin: '0px auto'
  }
}))

function App() {
  const classes = useStyles()

  return (
    <div className="main-background">
      <div className={classes.main}>
        <Typography style={{paddingTop: "10px"}} variant="h4" align="center">
          Hackers Premier League
        </Typography>
        <TeamsProvider>
          <Grid container spacing={3} justify="space-between">
            <Grid item>
              <PairTeams/>
            </Grid>
            <Grid item>
              <AddTeam />
            </Grid>
          </Grid>
          <Leaderboard />
        </TeamsProvider>
      </div>
    </div>
  );
}

export default App;
