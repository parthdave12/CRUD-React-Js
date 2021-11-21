import React, { Component } from "react";
import classes from "../Header/HeaderComponent.module.css";
export default class HeaderComponent extends Component {
  render() {
    return (
      <div className={classes.headerSection}>
        <h2 className="txtAlign_Center">Employee Management App</h2>
      </div>
    );
  }
}
