import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    position: "fixed",
    display: "flex",
    width: "8%",
    height: "100%",
    justifyContent: "center",
    marginTop: "29px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.navbar}>
        <div>
          <Sidebar />
        </div>
      </div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
