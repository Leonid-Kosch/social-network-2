import {combineReducers, legacy_createStore as createStore} from 'redux';
import addPostReducer from './addPost-reducer';
import sendMessageReducer from './sendMessage-reducer';
let reducersList = combineReducers(
    {
        profilePage: addPostReducer,
        dialogPage: sendMessageReducer
    }
);
let store = createStore(reducersList)
export default store;
window.store = store;