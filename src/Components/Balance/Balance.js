import React from "react";
import { useSelector } from "react-redux";

function Balance() {
  const balance = useSelector((state) => state.balance);
  return (
    <div>
      <h1>Expense Tracker</h1>
      {`Your Balance :$${balance}`}
      <p>income:</p>
      <p>expense:</p>
    </div>
  );
}

export default Balance;
