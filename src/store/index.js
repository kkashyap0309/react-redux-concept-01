import {createStore} from 'redux';

//create a reducer function and attach to store created below
function counterReducer(state = { counter: 0 }, action) {
  if (action.type === "INCRESEMENT") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "DECREASEMENT") {
    return { counter: state.counter - 1 };
  }
  return state;
}

//create redux store
const store = createStore(counterReducer);

export default store;
