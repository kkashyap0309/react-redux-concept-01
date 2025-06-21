import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {   
  function fetchReduxStateData(state) {
    return state.counter;
  }

  // fetchReduxStateData  funciton will be executed by react-redux since 
  const counter = useSelector(fetchReduxStateData); 

  // useDispatch doesnt accepts any argument but it returns a function, which will dispatch 
  // a function against a redux store
  const dispatch = useDispatch();

  function handleIncrementButtonClick() {
    dispatch({type : "INCRESEMENT"});
  }

  function handleDecrementButtonClick() {
    dispatch({type : "DECREASEMENT"});
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={handleIncrementButtonClick}>Increment</button>
        <button onClick={handleDecrementButtonClick}>decrement</button>
      </div>
    </main>
  );
};

export default Counter;
