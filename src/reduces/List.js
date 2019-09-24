var initialState = [{
  name: 'Play The Witcher 3: Wild Hunt', done: false
},
{
  name: 'Play Dying Light', done: false
},
{
  name: 'Far Cry Primal', done: false
},
{
  name: 'Play League of Legends', done: false
},
{
  name: 'Age of Empires', done: false
}
]

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [...state, { name: action.addList.value, done: false }];
    case 'DELETE_LIST':
      return [
        ...state.slice(0, action.deleteList.valueIndex),
        ...state.slice(action.deleteList.valueIndex + 1),
      ];
    case 'EDIT_LIST':
      return [
        ...state.slice(0, action.editList.index),
        {
          name: action.editList.valueName,
          done: false
        },
        ...state.slice(action.editList.index + 1),
      ];
    case 'CHECK_DONE':
      return [
        ...state.slice(0, action.checkDone.checkDone),
        {
          name: state[action.checkDone.checkDone].name,
          done: !state[action.checkDone.checkDone].done
        },
        ...state.slice(action.checkDone.checkDone + 1),
      ];
    default:
      return state;
  }
}

export default myReducer;