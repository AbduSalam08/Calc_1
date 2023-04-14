import React from "react";
import classes from "./head.module.css";
const Header = () => {
  return (
    <div className={classes.head}>
      <h1 className={classes.logo}>Calculate.</h1>
      <div className={classes.ver}>Version - 1.0.0</div>
    </div>
  );
};

export default Header;
