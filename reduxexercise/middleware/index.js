import {applyMiddleware, createStore} from 'redux';

const reducer = function (state, action){
    if(action.type === "INC"){
        return state + action.value;
    }
    if(action.type === "DEC"){
        return state  - action.value;
    }
    return state;
}

const logger = (store) => (next) => (action) => {
    console.log('Action Fires', action);
     action.type = "DEC";
    next(action);
}
const test = (store) => (next) => (action) => {
    console.log('Second Middleware', action);
    action.type = "INC";
    next(action);
}
const middleware = applyMiddleware(logger, test);

const store = createStore(reducer, 10, middleware);

store.subscribe( () => {
    console.log('store changed', store.getState());
} )

store.dispatch({type: "INC", value :10});
store.dispatch({type: "INC", value :1});
store.dispatch({type: "DEC", value :1});
store.dispatch({type: "DEC", value :1});
