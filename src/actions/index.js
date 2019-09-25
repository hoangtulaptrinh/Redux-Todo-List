import actionTypes from '../const/actionTypes';

export const addList = (addList) => { return { type: actionTypes.ADD_LIST, addList: addList } }

export const changeInputValue = (change) => { return { type: actionTypes.CHANGE_INPUT_VALUE, change: change } }

export const deleteList = (deleteList) => { return { type: actionTypes.DELETE_LIST, deleteList: deleteList } }

export const editList = (editList) => { return { type: actionTypes.EDIT_LIST, editList: editList } }

export const checkDone = (checkDone) => { return { type: actionTypes.CHECK_DONE, checkDone: checkDone } }