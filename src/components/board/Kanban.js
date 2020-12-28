import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { IconButton } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";

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
}));

export default function Kanban(props) {
  const classes = useStyles();
  const tasks = props.data;

  console.log("tasks", tasks);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>To do</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>In progress</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Up for review</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Testing</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Done</Paper>
        </Grid>
        <Grid item xs={1}>
          <IconButton size="small">
            <AddBoxIcon
              style={{ fontSize: "2em", color: "rgb(4, 100, 189)" }}
            />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
