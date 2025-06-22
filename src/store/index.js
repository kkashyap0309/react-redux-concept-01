import { createStore } from "redux";

//create a reducer function and attach to store created below
function counterReducer(state = { counter: 0, counterVisible: true }, action) {
  if (action.type === "TOGGLE_COUNTER") {
    return {
      counter: state.counter,
      counterVisible: !state.counterVisible,
    };
  }
  if (action.type === "INCRESEMENT") {
    return { counter: state.counter + 1, counterVisible: state.counterVisible };
  }

  if (action.type === "DECREASEMENT") {
    return { counter: state.counter - 1, counterVisible: state.counterVisible };
  }

  // Instead of writing  a method for each factor of increament , we need to send payload to
  // reducer's action  identify them and increase the value by that factor
  if (action.type === "INCREASEBY5") {
    return { counter: state.counter + 5, counterVisible: state.counterVisible };
  }

  // accept the payload sent and only increase by that factor
  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.factor,
      counterVisible: state.counterVisible,
    };
  }

  return state;
}

//create redux store
const store = createStore(counterReducer);

export default store;
