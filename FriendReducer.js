import { combineReducers } from 'redux';
import moment from "moment";

console.log('MM/DD/YY H:mm: ', moment(new Date()).format("MM-DD H:mm") )

const INITIAL_STATE = {
  current: [],
  possible: [
    'Allie',
    'Gator',
    'Lizzie',
    'Reptar',
  ],
  route : 'route empty',
  RouteStartDateTime: moment(new Date()).format("MM-DD H:mm")
  // RouteStartDateTime: new Date()
};


const StartDateTimeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case 'CHANGE_START_TIME':
          return {...state, RouteStartDateTime : action.payload };
    default:
      return state
  }
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case 'SET_ROUTE':
          return {...state, route : action.payload };
    default:
      return state
  }
};

const friendReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case 'ADD_FRIEND':
      // Pulls current and possible out of previous state
      // We do not want to alter state directly in case
      // another action is altering it at the same time
      const {
        current,
        possible,
      } = state;

      // Pull friend out of friends.possible
      // Note that action.payload === friendIndex
      const addedFriend = possible.splice(action.payload, 1);

      // And put friend in friends.current
      current.push(addedFriend);

      // Finally, update our redux state
      const newState = { current, possible };
      return newState;
    default:
      return state
  }
};

export default combineReducers({
  friends: friendReducer,
  testReducer: testReducer,
  StartDateTimeReducer: StartDateTimeReducer,
});