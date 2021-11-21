import React, { Component } from "react";
import classes from "../Footer/FooterComponent.module.css";
export default class FooterComponent extends Component {
  render() {
    return (
      <div className={classes.footer}>
        <p>All Rights Reserved.</p>
      </div>
    );
  }
}
