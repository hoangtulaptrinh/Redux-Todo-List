import { combineReducers } from 'redux';

import List from './List'
import InputValue from './InputValue'
const myReducer = combineReducers({
  List: List,
  InputValue: InputValue
});

export default myReducer;