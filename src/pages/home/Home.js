import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Kanban from "../../components/board/Kanban";
import Paper from "@material-ui/core/Paper";
import ListOfTasks from "../../components/board/List";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import data from "../../dummyData/dummy.json";

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
  addIcon: {
    backgroundColor: "grey",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [viewList, set_viewList] = useState(false);

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
        <Grid item xs={1}>
          <div className={classes.header}>
            <FormControlLabel
              control={
                <Switch
                  checked={viewList}
                  onChange={() => {
                    set_viewList(!viewList);
                  }}
                  name="checkedB"
                  color="primary"
                />
              }
              label={viewList ? "List" : "Kanban"}
            />
          </div>
        </Grid>

        {viewList ? <ListOfTasks data={data} /> : <Kanban data={data} />}
      </Grid>
    </div>
  );
}
