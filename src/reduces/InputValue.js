import actionTypes from '../const/actionTypes';

var initialState = '';
  
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_INPUT_VALUE:
          return state = action.change.value;
        default:
          return state
    }
}

export default myReducer;