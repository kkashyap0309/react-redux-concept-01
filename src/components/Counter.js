import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {   
  function fetchReduxStateCounterData(state) {
    return state.counter;
  }

   function fetchReduxStateVisibleCounter(state) {
    return state.counterVisible;
  }

  // fetchReduxStateData  funciton will be executed by react-redux since 
  const counter = useSelector(fetchReduxStateCounterData); 

//we can use mutliple times the useSelector to find the chunk of required state from store
const showCounter = useSelector(fetchReduxStateVisibleCounter);


  // useDispatch doesnt accepts any argument but it returns a function, which will dispatch 
  // a function against a redux store
  const dispatch = useDispatch();

  function handleIncrementButtonClick() {
    dispatch({type : "INCRESEMENT"});
  }

  function handleDecrementButtonClick() {
    dispatch({type : "DECREASEMENT"});
  }

  //for this method we are tighlty coupled with the function , insted we can send the payload to identify
  //the factor by which the counter can be increased
  function handleIncreseButtonClickBy5() {
    dispatch({type : "INCREASEBY5"});
  }

  function handleIncreseButtonClick() {
    dispatch({type : "INCREASE", factor: 5}); //of course factor can also be dynamic and can be taken into consideration by using input box
  }

  function handleCounterToggleClickEvent() {
    dispatch({type: "TOGGLE_COUNTER"})
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrementButtonClick}>Increment</button>
        <button onClick={handleIncreseButtonClick}>Increment By 5</button>
        <button onClick={handleDecrementButtonClick}>decrement</button>
      </div>
      {/* challenge is to show the counter only by clicking on the toggle button
      Sol -  we can pass multiple state to redux reducer and fetch back to show the counter
      */}
       <button onClick={handleCounterToggleClickEvent}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
