import React, { createContext, useState } from 'react'

export const TeamsContext = createContext()

export const TeamsProvider = ({ children }) => {
  const [teams, setTeams] = useState([])
  const [page, setPage] = useState(0)
  const [teamsCount, setTeamsCount] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [refresh, setRefresh] = useState(true)

  const toggleRefresh = () => setRefresh(refresh => !refresh)

  return <TeamsContext.Provider value={{ teams, setTeams, page, setPage, teamsCount, setTeamsCount, rowsPerPage, setRowsPerPage, refresh, toggleRefresh }}>
    {children}
  </TeamsContext.Provider>
}

