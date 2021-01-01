import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { IconButton } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import data from "../../dummyData/data.json";

import GridList from "@material-ui/core/GridList";

export default function Kanban() {
  const classes = useStyles();
  const [list, set_list] = useState(data);
  const [dragging, set_dragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

  useEffect(() => {
    set_list(data);
  }, [set_list, data]);

  const handleDragStart = (e, params) => {
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      set_dragging(true);
    }, 0);
    set_dragging(true);
  };

  const handleDragEnter = (e, targetItem) => {
    console.log(dragNode);
    if (dragNode.current !== e.target) {
      set_list((oldList) => {
        //makes a deep copy of the oldlist
        let newList = JSON.parse(JSON.stringify(oldList));

        newList[targetItem.grpI].items.splice(
          targetItem.itemI,
          0,
          newList[dragItem.current.grpI].items.splice(
            dragItem.current.itemI,
            1
          )[0]
        );
        dragItem.current = targetItem;

        return newList;
      });
    }
    return;
  };

  const handleDragEnd = () => {
    dragItem.current = null;
    dragNode.current = null;
    set_dragging(false);
  };

  if (list) {
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2}>
          {list.map((grp, grpI) => (
            <Grid item>
              <Paper
                key={grp.title}
                onDragEnter={
                  dragging && !grp.items.length
                    ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
                    : null
                }
                className={classes.paper}
              >
                <div>{grp.title}</div>
                <div>
                  {grp.items.map((item, itemI) => {
                    const currentItem = dragItem.current;
                    let styles = classes.card;
                    if (
                      currentItem?.grpI === grpI &&
                      currentItem?.itemI === itemI
                    ) {
                      styles = classes.dragCard;
                    }

                    return (
                      <Card
                        draggable
                        onDrag={(e) => handleDragStart(e, { grpI, itemI })}
                        onDragEnter={
                          dragging
                            ? (e) => {
                                handleDragEnter(e, { grpI, itemI });
                              }
                            : null
                        }
                        className={styles}
                      >
                        <CardContent>{item.title}</CardContent>
                      </Card>
                    );
                  })}
                </div>
              </Paper>
            </Grid>
          ))}
          <Grid item xs={1}>
            <IconButton size="small">
              <AddBoxIcon
                style={{ fontSize: "2em", color: "rgb(4, 100, 189)" }}
              />
            </IconButton>
          </Grid>
        </GridList>
      </div>
    );
  }
}

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
  card: {
    margin: "2px",
    height: "auto",
    width: "auto",
    fontWeight: "200",
    fontSize: "0.8em",
  },
  dragCard: {
    margin: "2px",
    height: "auto",
    width: "auto",
    fontWeight: "200",
    fontSize: "0.8em",
    color: "lightGrey",
    backgroundColor: "lightGrey",
  },
  paper: {
    backgroundColor: "rgb(245, 245, 245)",
    margin: "2px",
    height: "80vh",
    minWidth: "19vw",
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontFamily: "'Courier New', Courier, monospace;",
    fontSize: "1em",
    fontWeight: 600,
  },
  gridList: {
    height: "100vh",
    paddingTop: "10vh",
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
}));
