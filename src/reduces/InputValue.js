var initialState = '';
  
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_INPUT_VALUE':
          return state = action.change.value;
        default:
          return state
    }
}

export default myReducer;