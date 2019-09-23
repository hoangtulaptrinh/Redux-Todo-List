var initialState = [{
    name:'Play The Witcher 3: Wild Hunt',done: false
},
{
    name:'Play Dying Light 2',done: false
},
{
    name:'Play League of Legends',done: false
},
]

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return [...state,{name : action.addList.value,done : false}] 
        default:
          return state
    }
}

export default myReducer;