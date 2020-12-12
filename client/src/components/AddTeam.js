import { Button, makeStyles, TextField } from '@material-ui/core'
import Axios from 'axios'
import React, { useContext, useState } from 'react'
import { TeamsContext } from '../contexts/team.context';

const useStyles = makeStyles(theme => ({
  main: {
    margin: '10px auto',
  },
  submit: {
    marginTop: 3,
    marginLeft: 20
  },
  input: {
    marginLeft: 20
  }
}))

export default function AddTeam() {
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const classes = useStyles()

  const submit = async () => {
    if (name.length < 4) {
      return
    }
    setLoading(true)
    const { data } = await Axios.post("http://localhost:4000/api/team/new", { name })
    console.log({ data })
    setName("")
    setLoading(false)
  }

  return (
    <div className={classes.main}>
      <TextField size="small" className={classes.input} variant="outlined" label="New Team Name" value={name} onChange={e => setName(e.target.value)}></TextField>
      <Button className={classes.submit} onClick={submit} disabled={loading} variant="contained" color="primary">Add Team</Button>
    </div>
  )
}
