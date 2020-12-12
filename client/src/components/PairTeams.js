import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, makeStyles, MenuItem, Modal, Select, Typography } from '@material-ui/core'
import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import server from '../api/server'
import { TeamsContext } from '../contexts/team.context'

const useStyles = makeStyles(theme => ({
  main: {
    margin: '10px auto',
  },
  pairOpen: {
    marginTop: 3
  }
}))


export default function PairTeams() {
  const classes = useStyles()
  const {toggleRefresh} = useContext(TeamsContext)
  const [open, setOpen] = useState(false)
  const [teams, setTeams] = useState([])
  const [team1, setTeam1] = useState("")
  const [team2, setTeam2] = useState("")

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    loadTeams()
  }, [])

  const loadTeams = async () => {
    const { data } = await server.get("/api/teams-meta")
    if(data.teams && data.teams.length>0){
      setTeams(data.teams)
      setTeam1(data.teams[0]._id)
      setTeam2(data.teams[data.teams.length - 1]._id)
    }
  }
  
  const pair = async (decision) => {
    const { data } = await server.post("/api/pair", {team1, team2, decision})
    console.log({data})
    toggleRefresh()
    setOpen(false)
  }

  return (
    <div className={classes.main}>
      <Button className={classes.pairOpen} variant="contained" color="secondary" onClick={handleOpen}>
        Pair Teams
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Select teams you want to pair
        </DialogTitle>
        <DialogContent>
          {teams.length > 0 ? 
            <>
              <Grid container justify="space-evenly" spacing={2}>
                <Grid item>
                  <Select value={team1} onChange={e => setTeam1(e.target.value)} label="Team 1">
                    {
                      teams.map(team => <MenuItem value={team._id}>{team.team_name}</MenuItem>)
                    }
                  </Select>
                </Grid>
                <Grid item>
                  <Select value={team2} onChange={e => setTeam2(e.target.value)} label="Team 2">
                    {
                      teams.map(team => <MenuItem value={team._id}>{team.team_name}</MenuItem>)
                    }
                  </Select>
                </Grid>
              </Grid>
            </> 
            : 
            "No teams available to pair."}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => pair("team1")} color="primary" autoFocus>
            Team 1 Won
          </Button>
          <Button onClick={() => pair("team2")} color="primary" autoFocus>
            Team 2 Won
          </Button>
          <Button onClick={() => pair("tie")} color="primary" autoFocus>
            Match Tied
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
