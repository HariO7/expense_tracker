import React from "react";
import { useSelector } from "react-redux";

function Balance() {
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expense);
  return (
    <div>
      <h1>Expense Tracker</h1>
      {`Your Balance :$${income + expense}`}
      <p>income:{income}</p>
      <p>expense:{expense}</p>
    </div>
  );
}

export default Balance;
