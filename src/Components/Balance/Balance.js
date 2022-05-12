import React, { useState } from "react";

function Balance() {
  const [balance, setbalance] = useState(1000);
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
