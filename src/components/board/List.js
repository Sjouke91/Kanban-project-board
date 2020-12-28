import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    marginTop: "10px",
    height: "65px",
    paddingTop: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  paper: {
    backgroundColor: "rgb(245, 245, 245)",
    height: "800px",
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontFamily: "'Courier New', Courier, monospace;",
    fontSize: "1em",
    fontWeight: 600,
  },
  cards: {
    height: "35px",
    color: theme.palette.text.secondary,
    fontFamily: "'Courier New', Courier, monospace;",
    fontSize: "1em",
    fontWeight: 600,
  },
  table: {
    minWidth: 650,
  },
}));

export default function ListOfTasks(props) {
  const classes = useStyles();
  const tasks = props.data;

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <div>Planned</div>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="left">Priorty</TableCell>
                    <TableCell align="left">Owner</TableCell>
                    <TableCell align="left">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tasks.map((task, index) => (
                    <TableRow
                      onClick={(e) => console.log("clicked", index)}
                      hover={true}
                      key={index}
                    >
                      <TableCell component="th" scope="row">
                        {task.title}
                      </TableCell>

                      <TableCell align="left">{task.priority}</TableCell>
                      <TableCell align="left">{task.owner}</TableCell>
                      <TableCell align="left">{task.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>Backlog</Paper>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>Done</Paper>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}
