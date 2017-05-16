import {combineReducers, createStore} from 'redux';

const userReducer = (state={}, action) => {
    switch(action.type){
        case "CHANGE_NAME":{
            state = {...state, name:action.value}
            break;
        }
        case "CHANGE_AGE":{
            state = {...state, age:action.value}
            break;
        }
    }
    return state;
};
const tweetReducer = (state={}, action) => {
    switch(action.type){
        case "LANG":{
            state = {...state, language:action.value}
            break;
        }
    }
    return state;
}

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetReducer
})
const store = createStore(reducers, {
     user:{
        name: 'abc',
        age:  25
    },
    tweets:{
         language: ''
    }
});

store.subscribe(()=> {
    console.log("store changed", store.getState());
})

store.dispatch({type: "CHANGE_NAME", value :"TILAK"});
store.dispatch({type: "CHANGE_AGE", value :24});
store.dispatch({type:'LANG', value:"react"});
store.dispatch({type:'CHANGE_NAME', value:"TILAK JHA"});
store.dispatch({type:'LANG', value:"angular"});