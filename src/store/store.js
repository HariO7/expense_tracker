import { createStore } from "redux";

const initialState = { balance: 0, transaction: [] };

const balenceReducer = (state = initialState, action) => {
  if (action.type === "addinginput") {
    return {
      transaction: [...state.transaction, action.value],
    };
  }
  return state;
};

const store = createStore(balenceReducer);
export default store;
