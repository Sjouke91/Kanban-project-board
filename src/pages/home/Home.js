import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

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
  search: {
    position: "relative",
    backgroundColor: "rgb(245, 245, 245)",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(0),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(0),
      width: "auto",
    },
  },
  searchIcon: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <div className={classes.header}>
            <h1>Kanban project board</h1>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className={classes.header}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <ArrowDropDownIcon />
              </div>
              <InputBase
                placeholder="Sprint 3"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className={classes.header}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <ArrowDropDownIcon />
              </div>
              <InputBase
                placeholder="Sjouke, Jitse"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className={classes.header}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <ArrowDropDownIcon />
              </div>
              <InputBase
                placeholder="Backend, Frontend"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
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
      </Grid>
    </div>
  );
}
