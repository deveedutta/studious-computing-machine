import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxLogger from "redux-logger";
import ReduxThunk from "redux-thunk";
import Reducers from '../Reducers/';

const middleware = applyMiddleware(ReduxThunk, ReduxLogger);
const store = createStore(Reducers, middleware);

function logger({ getState }) {
    return (next) => (action) => {
        console.log("will dispatch", action);
        let returnValue = next(action);
        console.log("state after dispatch", getState());
        return returnValue;
    };
}

export default store;