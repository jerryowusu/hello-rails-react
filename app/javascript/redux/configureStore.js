
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducerGreetings from './greetings';

const reducer = combineReducers({
  reducerGreetings,
});

const store = createStore(
  reducer, applyMiddleware(logger, thunk),
);

export default store;