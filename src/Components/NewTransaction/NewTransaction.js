import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import classes from "./NewTransaction.module.css";

function NewTransaction() {
  const inputRef = useRef();
  const amountRef = useRef();
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const inputText = inputRef.current.value;
    const inputAmount = parseInt(amountRef.current.value);
    dispatch({
      type: "addinginput",
      value: { inputText: inputText, inputAmount: inputAmount },
    });
    inputRef.current.value = "";
    amountRef.current.value = "";
  };

  return (
    <div>
      <h3>New Transaction</h3>
      <form onSubmit={onSubmitHandler}>
        <label>Text</label>
        <input type="text" ref={inputRef} required />
        <label>Amount (negative= expense , positive = income)</label>
        <input type="number" ref={amountRef} required />
        <button className={classes.btn}>Submit</button>
      </form>
    </div>
  );
}

export default NewTransaction;
