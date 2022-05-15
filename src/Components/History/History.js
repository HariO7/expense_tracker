import React from "react";
import { useSelector } from "react-redux";

function History() {
  const transtactions = useSelector((state) => state.transaction);
  return (
    <div>
      <h1>History</h1>
      {transtactions.map((trans) => (
        <p>
          {trans.inputText} {trans.inputAmount}
        </p>
      ))}
    </div>
  );
}

export default History;
