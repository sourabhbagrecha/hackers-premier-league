import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
} from '@material-ui/core';
import { TeamsContext } from '../contexts/team.context';
import PaginationActions from './PaginationActions';
import EnhancedTableHead from './EnhancedTableHead'
import server from '../api/server';

const useStyles = makeStyles(theme => ({
  table: {
    maxHeight: 500,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}))

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function Leaderboard() {
  const classes = useStyles()
  const { teams, setTeams, page, setPage, teamsCount, setTeamsCount, rowsPerPage, setRowsPerPage, refresh } = useContext(TeamsContext)
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('score');
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    loadTeams()
  }, [rowsPerPage, page, order, orderBy, searchQuery, refresh])

  const loadTeams = async () => {
    const { data } = await server.get(
      `/api/teams`,
      {
        params: {
          offset: page * rowsPerPage,
          limit: rowsPerPage,
          order,
          orderBy,
          searchQuery
        }
      })
    setTeams(_ => data.teams)
    setTeamsCount(_ => data.teamsCount)
    return
  }
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, teamsCount - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <div className={classes.main}>
      <TableContainer className={classes.table} component={Paper}>
        <Table stickyHeader aria-label="custom pagination table">
          <TableCell padding="none" colSpan={5}>
            <TextField value={searchQuery} onChange={e => setSearchQuery(e.target.value)} label="Search Team" fullWidth variant="filled"/>
          </TableCell>
          <EnhancedTableHead
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rowsPerPage}
          />
          <TableBody style={{ maxHeight: 400, paddingBottom: "100px", overflowY: "scroll" }}>
            {stableSort(teams, getComparator(order, orderBy))
              .map((team) => (
                <TableRow key={team._id}>
                  <TableCell style={{ width: 100 }} component="th" scope="row">
                    {team.team_name}
                  </TableCell>
                  <TableCell style={{ width: 100 }} align="center">
                    {team.score}
                  </TableCell>
                  <TableCell style={{ width: 100 }} align="center">
                    {team.wins}
                  </TableCell>
                  <TableCell style={{ width: 100 }} align="center">
                    {team.losses}
                  </TableCell>
                  <TableCell style={{ width: 100 }} align="center">
                    {team.ties}
                  </TableCell>
                </TableRow>
              ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TableRow style={{ margin: 0 }}>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100, { label: 'All', value: teamsCount }]}
          colSpan={3}
          count={teamsCount}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: { 'aria-label': 'rows per page' },
            native: true,
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={PaginationActions}
        />
      </TableRow>
    </div>
  );
}

export default Leaderboard
