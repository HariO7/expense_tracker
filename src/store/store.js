import { createStore } from "redux";

const initialState = { balance: 0 };

const balenceReducer = (state = initialState, action) => {
  return state;
};

const store = createStore(balenceReducer);
export default store;
