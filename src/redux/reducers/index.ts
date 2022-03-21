import {combineReducers} from 'redux';
import personalityTypeReducer from './personalityTypeReducer';
import nameReducer from './nameReducer';
import emailReducer from './emailReducer';


const reducers = combineReducers({
  personalityTypes: personalityTypeReducer,
  emailAddress: emailReducer,
  userName: nameReducer
});


export default reducers;
