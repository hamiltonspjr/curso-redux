import contador from './contador.js';
import aulas from './aulas.js';
import aluno from './aluno.js';
import { combineReducers, createStore } from '../../redux.browser.mjs';

const reducer = combineReducers({contador, aulas, aluno});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;