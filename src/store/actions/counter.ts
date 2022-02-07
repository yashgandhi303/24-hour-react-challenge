import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../actionTypes';

export const incrementCounterAction = () => ({
  type: COUNTER_INCREMENT,
});

export const decrementCounterAction = () => ({
  type: COUNTER_DECREMENT,
});
