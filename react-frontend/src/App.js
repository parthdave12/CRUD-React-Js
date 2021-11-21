import classes from "./App.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployee/ListEmployeeComponent";
import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployee/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployee/ViewEmployeeComponent";

function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <div className={`${classes.container} txtAlign_Center`}>
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route
              path="/add-employee/:id"
              component={CreateEmployeeComponent}
            ></Route>

            <Route
              path="/view-employee/:id"
              component={ViewEmployeeComponent}
            ></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
