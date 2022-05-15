import React from "react";
import { useSelector } from "react-redux";
import classes from "./Balance.module.css";
function Balance() {
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expense);
  return (
    <div>
      <h2>Expense Tracker</h2>
      <h4>YOUR BALANCE</h4>
      {`$${income + expense}`}
      <div className={classes.incexpcontainer}>
        <div>
          <h4>income:</h4>
          <p className={classes.moneyplus}>{`$${income}`}</p>
        </div>
        <div>
          <h4>expense:</h4>
          <p className={classes.moneyminus}>{`$${expense}`}</p>
        </div>
      </div>
    </div>
  );
}

export default Balance;
