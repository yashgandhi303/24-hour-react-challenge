import { combineReducers } from 'redux';
import counter from './counter';
import user from './user';
import nfts from './nfts';

const rootReducer = combineReducers({
  counter,
  user,
  nfts,
});

export default rootReducer;
