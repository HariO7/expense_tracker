import { createStore } from "redux";

const initialState = { transaction: [], income: 0, expense: 0 };

const balenceReducer = (state = initialState, action) => {
  if (action.type === "addinginput") {
    let newIncome = 0;
    let newExpense = 0;
    if (action.value.inputAmount >= 0) {
      newIncome = action.value.inputAmount;
    } else {
      newExpense = action.value.inputAmount;
    }
    return {
      transaction: [...state.transaction, action.value],
      income: state.income + newIncome,
      expense: state.expense + newExpense,
    };
  }
  return state;
};

const store = createStore(balenceReducer);
export default store;
