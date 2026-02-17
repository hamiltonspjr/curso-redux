import {applyMiddleware, compose, createStore} from '../redux.browser.mjs'

function reducer(state = 0, action) {
    switch(action.type) {
        case 'INCREMENTAR':
            return state + 1;
        case 'REDUZIR':
            return state - 1;
        default:
            return state;
    }
}

// middleware 
// ele ocorre entre a ação ser disparada e o reducer processar a ação, ou seja, é um intermediário entre a ação e o reducer. Ele pode ser usado para logar ações
const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('Action', action);
    console.log('Prev_state', store.getState());
    const result = next(action);
    console.log('Next_state', store.getState());
    console.groupEnd();
    return result;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

const store = createStore(reducer, enhancer);
console.log(store.getState());

store.dispatch({type: 'INCREMENTAR'});