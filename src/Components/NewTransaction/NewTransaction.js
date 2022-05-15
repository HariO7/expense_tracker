import React, { useRef } from "react";
import { useDispatch } from "react-redux";

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
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>Text</label>
        <input type="text" ref={inputRef} />
        <label>Amount (negative= expense , positive = income)</label>
        <input type="number" ref={amountRef} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewTransaction;
