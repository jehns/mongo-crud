import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';

// reducers
import usersReducer from './usersReducer';


const store = createStore(
  usersReducer,
  applyMiddleware(
    thunkMiddleware,
    // createLogger()
  )
);

export default store;
