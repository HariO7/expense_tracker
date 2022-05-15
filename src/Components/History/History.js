import React from "react";
import { useSelector } from "react-redux";
import classes from "./History.module.css";
function History() {
  const transtactions = useSelector((state) => state.transaction);
  return (
    <div>
      <h3>History</h3>
      <ul className={classes.list}>
        {transtactions.map((trans) => (
          <li
            key={Math.random()}
            className={trans.inputAmount > 0 ? classes.plus : classes.minus}
          >
            {trans.inputText}
            <span>{trans.inputAmount}</span>
            <button className={classes.deletebtn}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
