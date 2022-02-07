import { COUNTER_DECREMENT, COUNTER_INCREMENT } from '../actionTypes';

interface IAction {
  type: typeof COUNTER_DECREMENT | typeof COUNTER_INCREMENT;
}

function counterReducer(state = 0, action: IAction) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + 1;
    case COUNTER_DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;
