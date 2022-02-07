import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createWrapper } from 'next-redux-wrapper';

function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
  return store;
}

export const wrapper = createWrapper(configureStore);
export { configureStore };
